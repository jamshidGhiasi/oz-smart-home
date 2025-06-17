import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY! // Use service_role key
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string" || message.length > 1000) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    // Create embedding for user message
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: message,
    });

    const userEmbedding = embeddingRes.data[0].embedding;

    // Query Supabase for top relevant chunks
    const { data: matches, error: matchError } = await supabase.rpc(
      "match_knowledge",
      {
        query_embedding: userEmbedding,
        match_count: 8,
        similarity_threshold: 0.7,
      }
    );

    if (matchError) {
      console.error("Supabase match error:", matchError);
      return new Response(JSON.stringify({ error: "Vector search failed" }), {
        status: 500,
      });
    }

    let systemPrompt: string;

    if (!matches || matches.length === 0) {
      // No matches — fallback to GPT knowledge
      systemPrompt = `You are a helpful smart home assistant for OZ Smart Home. The user may ask about smart home protocols (like Matter, Zigbee, Home Assistant), smart devices, or general automation. Answer clearly and professionally using your own knowledge.`;
    } else {
      // Matches found — use RAG data
      const context = matches
        .map((m: any) => `- ${m.content.trim()}`)
        .join("\n\n");

      systemPrompt = `You are a smart home assistant for OZ Smart Home.

Use the knowledge below as your **primary source** when answering the user's question — especially if it relates to our services, features, or custom documentation. Always include Markdown-formatted links if provided.

If the user asks about smart home tech more broadly (like Matter, Home Assistant, or Zigbee), you may supplement with your own general knowledge **only if the answer is not found below**.

--- BEGIN KNOWLEDGE ---
${context}
--- END KNOWLEDGE ---`;
    }

    // Final call to GPT with merged logic
    const chatRes = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.6,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply =
      chatRes.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (err) {
    console.error("Chat error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
