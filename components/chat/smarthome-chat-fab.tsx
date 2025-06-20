'use client';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js';
import Image from 'next/image';
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
            className="absolute top-2 right-2 text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-400"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

const CodeBlock = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
    const codeRef = useRef<HTMLElement>(null);
    const code = String(children ?? '').trim();
    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, []);
    const isInline = !className;
    if (isInline) {
        return (
            <code className="bg-zinc-200 px-1 rounded text-blue-700" {...props}>
                {code}
            </code>
        );
    }
    return (
        <pre className="rounded-xl bg-zinc-100 p-4 overflow-x-auto text-sm mt-2">
            <code ref={codeRef} className={className} {...props}>
                {code}
            </code>
        </pre>
    );
};

export default function SmartHomeChatFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
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
        return protectedLinks.reduce((text, link, index) => text.replace(`__LINK_${index}__`, link), converted);
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
                className="fixed bottom-4 right-4 bg-white hover:shadow-xl p-1 rounded-full shadow-lg z-50 border border-blue-600"
                aria-label="Open Smart Home Chat"
            >
                <Image
                    width={64}
                    height={64}
                    src="/chat-avatar.png"
                    alt="Chat Avatar"
                    className="w-16 h-16 rounded-full object-cover"
                />
            </button>

            {isOpen && !isMinimized && (
                <div className="fixed bottom-24 right-4 w-[380px] max-h-[70vh] sm:max-h-[80vh] bg-zinc-50 border border-zinc-200 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
                    <div className="sticky top-0 z-10 p-4 font-semibold text-zinc-800 bg-zinc-100 border-b border-zinc-200 rounded-t-2xl flex justify-between items-center shadow">
                        <div className="flex items-center gap-2">
                            <img src="/oz-smart-home-icon.svg" alt="OZ Icon" className="w-6 h-6" />
                            <span>Oz Smart Home Assistant</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <button
                                onClick={() => setIsMinimized(true)}
                                title="Minimize"
                                className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200 transition"
                            >
                                <span className="text-xl font-bold">–</span>
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsMinimized(false);
                                    setMessages([
                                        {
                                            role: 'assistant',
                                            content: "Hi there! I'm Jimmy, the Oz Smart Home Assistant (v1). I can help you with packages, pricing, and smart home tips. I'll get smarter as you ask more. 💡"
                                        },
                                    ]);
                                }}
                                title="Close Chat"
                                className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-500 hover:text-white hover:bg-red-600 transition"
                            >
                                <span className="text-xl font-bold">×</span>
                            </button>
                        </div>
                    </div>

                    <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-zinc-800">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'assistant' && (
                                    <img src="/chat-avatar.png" alt="OZ Icon" className="w-8 h-8 mr-2 rounded-full p-1" />
                                )}
                                {msg.role === 'user' && (
                                    <div className="w-7 h-7 ml-2 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                                        🧑
                                    </div>
                                )}
                                <div className={`rounded-xl px-4 py-3 max-w-[85%] whitespace-normal ${msg.role === 'user' ? 'bg-blue-100 text-blue-800 ml-2' : 'bg-zinc-200 text-zinc-900 mr-2'}`}>
                                    <ReactMarkdown
                                        components={{
                                            p: ({ children }) => <p className="m-0 leading-relaxed">{children}</p>,
                                            a: ({ href, children }) => (
                                                <a
                                                    href={href ?? '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 font-medium underline hover:text-blue-500"
                                                    title="Open service page"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                            code: CodeBlock,
                                        }}
                                    >
                                        {formatMessage(msg.content)}
                                    </ReactMarkdown>
                                    {msg.type === 'feedback_request' && !feedbackGivenFor.includes(i) && (
                                        <div className="mt-2">
                                            <div className="flex gap-3">
                                                <button onClick={() => sendFeedback('positive', i)} className="text-green-600 hover:text-green-500 underline">👍 Yes</button>
                                                <button onClick={() => sendFeedback('negative', i)} className="text-red-600 hover:text-red-500 underline">👎 No</button>
                                            </div>
                                        </div>
                                    )}
                                    {msg.type === 'feedback_request' && feedbackGivenFor.includes(i) && (
                                        <p className="text-green-600 text-sm mt-2">Thanks for your feedback!</p>
                                    )}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="italic text-zinc-400">Jimmy is typing...</div>}
                    </div>

                    <div className="p-3 border-t border-zinc-200 bg-zinc-100 flex items-center gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask me something..."
                            className="flex-1 px-3 py-2 text-sm text-zinc-800 bg-white border border-zinc-300 rounded-lg placeholder-zinc-500 outline-none focus:ring-1 focus:ring-blue-500"
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
