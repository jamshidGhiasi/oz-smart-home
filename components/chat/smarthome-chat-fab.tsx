'use client';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js';
import { Message } from '@/types';

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    async function copyToClipboard() {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 text-xs bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

export default function SmartHomeChatFAB() {
    const [isOpen, setIsOpen] = useState(false);

    const [isMinimized, setIsMinimized] = useState(false); // minimized view
    const [messages, setMessages] = useState<Message[]>([{
        role: 'assistant',
        content: "Hi there! I'm Jimmy, the Oz Smart Home Assistant (v1). I can help you with packages, pricing, and smart home tips. I'll get smarter as you ask more. 💡"
    }]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const [feedbackGivenFor, setFeedbackGivenFor] = useState<number[]>([]);

    useEffect(() => {
        if (isOpen && chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    function formatMessage(msg: string): string {
        const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
        const protectedLinks: string[] = [];
        const withPlaceholders = msg.replace(markdownLinkRegex, (_, text, url) => {
            const placeholder = `__LINK_${protectedLinks.length}__`;
            protectedLinks.push(`[${text}](${url})`);
            return placeholder;
        });

        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const converted = withPlaceholders.replace(urlRegex, (url) => `[Read more](${url})`);

        return protectedLinks.reduce(
            (text, link, index) => text.replace(`__LINK_${index}__`, link),
            converted
        );
    }

    async function sendMessage() {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        const newMessages: Message[] = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setLoading(true);




        try {
            const res = await fetch('/api/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();

            const assistantMessage: Message = { role: 'assistant', content: data.reply };
            const updatedMessages: Message[] = [...newMessages, assistantMessage];

            const assistantCount = updatedMessages.filter(m => m.role === 'assistant').length;
            if (assistantCount % 5 === 0) {
                updatedMessages.push({
                    role: 'assistant',
                    type: 'feedback_request',
                    content: 'Was this helpful? Your feedback helps improve the assistant.'
                });
            }

            setMessages(updatedMessages);
        } catch {
            setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Please try again.' }]);
        }

        setLoading(false);
    }

    const sendFeedback = async (rating: 'positive' | 'negative', index: number) => {
        const msg = messages[index];

        await fetch('/api/ask/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: messages[index - 1]?.content,
                response: msg.content,
                rating,
                ip: '',
            }),
        });

        setFeedbackGivenFor(prev => [...prev, index]);
    };

    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(true);
                    setIsMinimized(false);
                }}
                className="fixed bottom-6 right-8 bg-black hover:shadow-xl p-1 rounded-full shadow-lg z-50 border border-blue-600"
                aria-label="Open Smart Home Chat"
            >
                <img src="/chat-avatar.png" alt="Jamshid Avatar" className="w-16 h-16 rounded-full object-cover" />
            </button>

            {isOpen && !isMinimized && (
                <div className="fixed bottom-28 right-6 w-[380px] max-h-[80vh] bg-black border border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
                    <div className="p-4 font-semibold text-white border-b border-zinc-800 bg-zinc-800 rounded-t-2xl flex justify-between items-center shadow-md shadow-zinc-950/40">
                        <div className="flex items-center gap-2">
                            <img src="/oz-smart-home-icon.svg" alt="OZ Icon" className="w-6 h-6" />
                            <span>Oz Smart Home Assistant</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            {/* Minimize */}
                            <button
                                onClick={() => setIsMinimized(true)}
                                title="Minimize"
                                className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
                            >
                                <span className="text-lg font-bold">–</span>
                            </button>

                            {/* Close */}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsMinimized(false);
                                    setMessages([
                                        {
                                            role: 'assistant',
                                            content:
                                                "Hi there! I'm Jimmy, the Oz Smart Home Assistant (v1). I can help you with packages, pricing, and smart home tips. I'll get smarter as you ask more. 💡",
                                        },
                                    ]);
                                }}
                                title="Close Chat"
                                className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-white hover:bg-red-600 transition"
                            >
                                <span className="text-lg font-bold">×</span>
                            </button>
                        </div>
                    </div>

                    <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-white">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'assistant' && (
                                    <img src="/chat-avatar.png" alt="OZ Icon" className="w-8 h-8 mr-2 rounded-full p-1" />
                                )}
                                {msg.role === 'user' && (
                                    <div className="w-7 h-7 ml-2 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold">
                                        🧑
                                    </div>
                                )}

                                <div className={`rounded-xl px-4 py-3 max-w-[85%] whitespace-normal ${msg.role === 'user' ? 'bg-blue-700 text-right ml-2' : 'bg-zinc-800 text-left mr-2'}`}>
                                    <ReactMarkdown
                                        components={{
                                            p: ({ children }) => <p className="m-0 leading-relaxed">{children}</p>,
                                            a: ({ href, children }) => (
                                                <a
                                                    href={href ?? '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 font-semibold underline hover:text-blue-300"
                                                    title="Open service page"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                            code({ className, children }) {
                                                const codeRef = useRef<HTMLElement>(null);
                                                const code = String(children).trim();

                                                useEffect(() => {
                                                    if (codeRef.current) hljs.highlightElement(codeRef.current);
                                                }, []);

                                                const isInline = !className;
                                                if (isInline) {
                                                    return <code className="bg-zinc-800 px-1 rounded text-blue-300">{code}</code>;
                                                }

                                                return (
                                                    <div className="relative">
                                                        <CopyButton code={code} />
                                                        <pre className="rounded-xl bg-zinc-900 p-4 overflow-x-auto text-sm mt-2">
                                                            <code ref={codeRef} className={className || ''}>{code}</code>
                                                        </pre>
                                                    </div>
                                                );
                                            }
                                        }}
                                    >
                                        {formatMessage(msg.content)}
                                    </ReactMarkdown>
                                    {msg.type === 'feedback_request' && !feedbackGivenFor.includes(i) && (
                                        <div className="mt-2">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => sendFeedback('positive', i)}
                                                    className="text-green-400 hover:text-green-300 underline"
                                                >
                                                    👍 Yes
                                                </button>
                                                <button
                                                    onClick={() => sendFeedback('negative', i)}
                                                    className="text-red-400 hover:text-red-300 underline"
                                                >
                                                    👎 No
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {msg.type === 'feedback_request' && feedbackGivenFor.includes(i) && (
                                        <p className="text-green-400 text-sm mt-2">Thanks for your feedback!</p>
                                    )}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="italic text-zinc-400">Jimmy is typing...</div>}
                    </div>

                    <div className="p-3 border-t border-zinc-800 bg-zinc-900 flex items-center gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask me something..."
                            className="flex-1 px-3 py-2 text-sm text-white bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-400 outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
