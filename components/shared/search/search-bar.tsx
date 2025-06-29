'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { sendGAEvent } from '@next/third-parties/google'
import { useMediaQuery } from '@/utils/use-media-query'

export default function SearchBar({ className }: { className?: string }) {
    const [query, setQuery] = useState('')
    const [expanded, setExpanded] = useState(false)
    const router = useRouter()

    const isDesktop = useMediaQuery('(min-width: 1280px)')
    const desktopInputRef = useRef<HTMLInputElement>(null)
    const mobileInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim()) {
            sendGAEvent('event', 'search_triggered', { value: 'header' })
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
            setQuery('')
            setExpanded(false)
        }
    }

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().includes('MAC')
            const isShortcut = (isMac && e.metaKey && e.key === 'k') || (!isMac && e.ctrlKey && e.key === 'k')

            if (isShortcut) {
                e.preventDefault()

                if (isDesktop) {
                    setExpanded(true)
                    setTimeout(() => desktopInputRef.current?.focus(), 0)
                } else {
                    setExpanded(true)
                    setTimeout(() => mobileInputRef.current?.focus(), 0)
                }
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [isDesktop])

    return (
        <div className={cn('relative', className)}>
            {/* Desktop Input */}
            <form
                onSubmit={handleSubmit}
                className={cn(
                    'hidden xl:flex items-center border border-neutral-700 bg-neutral-900 rounded-md px-2 py-1 transition-all w-full max-w-40',
                    'focus-within:ring-2 focus-within:ring-blue-500'
                )}
            >
                <Search className="w-4 h-4 text-neutral-400 mr-2" />
                <input
                    ref={desktopInputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent border-none focus:outline-none text-sm text-white placeholder:text-neutral-500 w-full"
                />
                <kbd className="ml-2 hidden lg:inline-flex items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
                    ⌘K
                </kbd>
            </form>

            {/* Mobile Icon Button */}
            <div className="xl:hidden">
                {!expanded ? (
                    <button
                        onClick={() => {
                            setExpanded(true)
                            setTimeout(() => mobileInputRef.current?.focus(), 0)
                        }}
                        className="p-2 text-neutral-400 hover:text-white"
                        aria-label="Open Search"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full">
                        <Input
                            ref={mobileInputRef}
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="text-sm bg-neutral-800 text-white w-full"
                            onBlur={() => setExpanded(false)}
                        />
                    </form>
                )}
            </div>
        </div>
    )
}
