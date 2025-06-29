// app/search/search-skeleton.tsx
export default function SearchSkeleton() {
    return (
        <div className="min-h-screen px-6 xl:px-32 py-16 bg-neutral-900 text-white">
            <div className="max-w-4xl mx-auto animate-pulse">
                <h1 className="text-3xl font-semibold mb-6">Search Results</h1>

                <div className="mb-8 h-10 bg-neutral-800 rounded w-full" />

                <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="border border-neutral-800 rounded-lg p-5 bg-neutral-800"
                        >
                            <div className="h-5 w-3/4 bg-neutral-700 rounded mb-3" />
                            <div className="h-4 w-full bg-neutral-700 rounded mb-2" />
                            <div className="h-4 w-5/6 bg-neutral-700 rounded mb-1" />
                            <div className="h-4 w-1/2 bg-neutral-700 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
