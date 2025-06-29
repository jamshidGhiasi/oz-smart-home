import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { format } from 'date-fns'
import Image from 'next/image'
import Script from 'next/script'



export async function generateStaticParams() {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content/knowledge-hub'))
    return posts.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const postPath = path.join(process.cwd(), 'content/knowledge-hub', params.slug, 'index.md')

    if (!fs.existsSync(postPath)) return {}

    const fileContent = fs.readFileSync(postPath, 'utf-8')
    const { data } = matter(fileContent)

    return {
        title: data?.seo?.title || data.title,
        description: data?.seo?.description || data.excerpt,
        openGraph: {
            title: data?.seo?.title || data.title,
            description: data?.seo?.description || data.excerpt,
            images: data.coverImage
                ? [{ url: data.coverImage, width: 1200, height: 630 }]
                : [],
        },
    }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const postPath = path.join(process.cwd(), 'content/knowledge-hub', slug, 'index.md')

    if (!fs.existsSync(postPath)) notFound()

    const fileContent = fs.readFileSync(postPath, 'utf-8')
    const { content, data } = matter(fileContent)

    // ✅ Set up marked with custom code renderer
    marked.use({
        renderer: {
            code({ text, lang }) {
                const language = hljs.getLanguage(lang || '') ? lang! : 'plaintext'
                const highlighted = hljs.highlight(language, text).value

                return `
          <div class="relative group my-6">
            <button 
              class="copy-btn absolute top-2 right-2 text-xs px-2 py-1 bg-gray-700 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onclick="navigator.clipboard.writeText(\`${text.replace(/`/g, '\\`')}\`)">
              Copy
            </button>
            <pre class="overflow-x-auto rounded"><code class="hljs ${language}">${highlighted}</code></pre>
          </div>
        `
            }
        }
    })

    const html = marked.parse(content)

    const { seo } = data

    return (
        <>
            <div className="min-h-screen px-6 xl:px-32 py-16 bg-neutral-900 text-white">
                <div className="max-w-3xl mx-auto">
                    {data.coverImage && (
                        <Image
                            src={data.coverImage}
                            alt={data.title}
                            width={1200}
                            height={600}
                            className="rounded-lg mb-8 w-full object-cover"
                        />
                    )}
                    <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                    {data.date && (
                        <p className="text-sm text-neutral-400 mb-6">
                            {format(new Date(data.date), 'MMMM d, yyyy')}
                        </p>
                    )}
                    <Script
                        id="structured-data"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BlogPosting",
                                headline: data.title,
                                description: data?.seo?.description || data.excerpt || '',
                                image: data.coverImage
                                    ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ozsmarthome.com.au'}${data.coverImage}`
                                    : undefined,
                                author: {
                                    "@type": "Organization",
                                    name: "Oz Smart Home",
                                    url: "https://www.ozsmarthome.com.au"
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "Oz Smart Home",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ozsmarthome.com.au'}/oz-smart-home-icon.svg`
                                    }
                                },
                                datePublished: data.date,
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ozsmarthome.com.au'}/knowledge-hub/${slug}`
                                }
                            })
                        }}
                    />

                    <article
                        className="prose prose-invert prose-neutral max-w-none"
                        dangerouslySetInnerHTML={{ __html: html as string }}
                    />
                </div>
            </div>
        </>
    )
}
