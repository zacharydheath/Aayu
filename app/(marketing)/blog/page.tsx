import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog — Aayu',
  description:
    'Honest writing about Bangladeshi health, longevity, and what the wellness industry gets wrong.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            The Aayu Blog
          </p>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-earth leading-[1.1] mb-8">
            Honest writing about{' '}
            <em className="text-saffron not-italic italic">Bangladeshi health.</em>
          </h1>
          <p className="font-body font-light text-lg text-earth/60 leading-relaxed max-w-2xl">
            Evidence-based. Culturally fluent. No wellness fluff, no shame, no
            generic advice that wasn&apos;t built for your body.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-earth/10">
            {posts.map((post) => (
              <article key={post.slug} className="bg-warm-white p-8 lg:p-10 flex flex-col">
                <p className="font-body text-[9px] font-medium tracking-[0.22em] text-saffron uppercase mb-4">
                  {post.category}
                </p>
                <h2 className="font-display font-light text-2xl text-earth leading-snug mb-4 flex-1">
                  {post.title}
                </h2>
                <p className="font-body font-light text-sm text-earth/55 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-earth/8">
                  <span className="font-body text-xs font-light text-stone">
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-body text-sm font-light text-saffron underline underline-offset-4 hover:text-earth-mid transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
