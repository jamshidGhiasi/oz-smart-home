import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import Script from 'next/script'

const BLOG_DIR = path.join(process.cwd(), 'content/knowledge-hub')

export default function KnowledgeHubPage() {
  const posts = fs.readdirSync(BLOG_DIR)
    .filter((dir) => fs.existsSync(path.join(BLOG_DIR, dir, 'index.md')))
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, slug, 'index.md')
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt || '',
        date: data.date || '',
        coverImage: data.coverImage || null,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Knowledge Hub Articles",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.ozsmarthome.com.au/knowledge-hub/${post.slug}`,
    })),
  }

  return (
    <div className="min-h-screen px-6 xl:px-32 py-16 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Knowledge Hub</h1>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-yellow-400 transition">
              <Link href={`/knowledge-hub/${post.slug}`}>
                <div>
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white hover:text-yellow-400">{post.title}</h2>
                    <p className="text-sm text-neutral-400 mt-1">{post.excerpt}</p>
                    {post.date && (
                      <p className="text-xs text-neutral-500 mt-2">
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Script
          id="knowledge-hub-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </div>
  )
}
