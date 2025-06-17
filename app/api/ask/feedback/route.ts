// /app/api/ask/feedback/route.ts (or /pages/api/ask/feedback.ts for Pages Router)
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function POST(req: Request) {
  const { question, response, rating, ip } = await req.json();

  if (!question || !response || !rating) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("chat_feedback").insert([
    {
      question,
      response,
      rating,
      ip,
      timestamp: new Date().toISOString(), // Optional, Supabase can also default to NOW()
    },
  ]);

  if (error) {
    console.error("[Feedback Error]", error);
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
