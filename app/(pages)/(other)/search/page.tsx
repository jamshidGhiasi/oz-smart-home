'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PageContent } from '@/types'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function SearchPage() {
    const params = useSearchParams()
    const query = params.get('q') || ''
    const [results, setResults] = useState<PageContent[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) return
            setLoading(true)
            try {
                const res = await fetch(`/api/search/all?q=${encodeURIComponent(query)}`)
                const data = await res.json()
                setResults(data)
            } catch (err) {
                console.error('Search failed', err)
            } finally {
                setLoading(false)
            }
        }

        fetchResults()
    }, [query])

    return (
        <div className="min-h-screen px-6 xl:px-32 py-16 bg-neutral-900 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Search Results</h1>

                <div className="relative mb-8">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
                    <Input
                        type="text"
                        defaultValue={query}
                        placeholder="Search again..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const val = (e.target as HTMLInputElement).value
                                if (val.trim()) {
                                    window.location.href = `/search?q=${encodeURIComponent(val.trim())}`
                                }
                            }
                        }}
                        className="pl-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                    />
                </div>

                {loading && <p className="text-neutral-400">Loading...</p>}

                {!loading && results.length === 0 && (
                    <p className="text-neutral-400">No results found for “{query}”.</p>
                )}

                <ul className="space-y-6">
                    {results.map((page) => (
                        <li key={page.slug}>
                            <Link
                                href={`/${page.slug}`}
                                className="block group border border-neutral-800 hover:border-neutral-600 rounded-lg p-5 bg-neutral-800 hover:bg-neutral-700 transition-all"
                            >
                                <h2 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                    {page.title}
                                </h2>
                                {page.excerpt && (
                                    <p className="text-sm text-neutral-400 mt-1 line-clamp-3">{page.excerpt}</p>
                                )}
                                {page.tags && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {page.tags.map((tag: string) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="text-xs text-yellow-400 border-yellow-400/40 bg-yellow-400/5"
                                            >
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
