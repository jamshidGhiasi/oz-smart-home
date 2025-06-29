// app/search/page.tsx
import { Suspense } from 'react'
import SearchSkeleton from './search-skeleton'
import SearchPage from './search-client'

export default function SearchPageWrapper() {
    return (
        <Suspense fallback={<SearchSkeleton />}>
            <SearchPage />
        </Suspense>
    )
}
