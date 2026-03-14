import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/blog-data'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  return {
    title: post ? `${post.title} — Aayu Blog` : 'Post Not Found — Aayu Blog',
    description: post?.excerpt,
  }
}

const fullContent: Record<string, { body: string[] }> = {
  'south-asian-heart-disease-risk': {
    body: [
      'The statistics are not subtle. South Asians develop cardiovascular disease at rates four times higher than the general Western population — and at ages that routinely catch both patients and physicians off guard. A 45-year-old South Asian man presenting with his first cardiac event is not unusual. A 50-year-old South Asian woman with advanced coronary artery disease who has never smoked, is not overweight by standard measures, and has a clean cholesterol panel is not unusual either.',
      'The question is why — and more importantly, what to do about it.',
      'Part of the answer lies in the inadequacy of the tools we use to assess cardiovascular risk in South Asian populations. Standard BMI thresholds, developed from studies conducted predominantly on white Western populations, consistently miss the visceral fat accumulation that characterises South Asian metabolic profiles. South Asians tend to carry more dangerous abdominal fat at lower overall body weights. A BMI of 23 in a South Asian individual may carry the same metabolic risk as a BMI of 27 in a white European.',
      'The cholesterol picture is similarly misleading. Standard lipid panels miss the elevated lipoprotein(a) that runs at higher rates in South Asian populations — a particle that dramatically increases cardiac risk and does not respond to the interventions that lower standard LDL. Many South Asians who appear to have "good" cholesterol are unknowingly carrying a significant additional risk factor that their doctors have never checked for.',
      'Insulin resistance is the third piece. Type 2 diabetes develops at lower BMI thresholds in South Asian populations and often progresses silently for years before diagnosis. The metabolic dysfunction that precedes a diabetes diagnosis — elevated fasting insulin, impaired glucose tolerance, rising triglycerides — is exactly the same dysfunction that drives cardiovascular disease. Catching it early requires testing that most general practitioners don\'t order by default.',
      'None of this is an indictment of any individual doctor. It is a structural problem in a medical system that was not built to Recognize the specific risks of South Asian biology. The solution is not to wait for that system to change. The solution is to know what to ask for.',
      'The Aayu biomarker protocol includes lipoprotein(a) testing, fasting insulin alongside standard blood glucose, CIMT (carotid intima-media thickness) assessment where appropriate, and a full vitamin D panel. These are not exotic interventions. They are available at most standard labs. They are simply never ordered, because the default protocol was not designed with South Asian patients in mind.',
      'The good news is that the lifestyle interventions that reduce cardiovascular risk are well-established and highly effective. Progressive resistance training, in particular, has a stronger effect on insulin resistance and visceral fat reduction than any form of cardio. A nutrition approach that reduces refined carbohydrate load without eliminating cultural staples is achievable and sustainable. Managing chronic stress — a significant and underappreciated cardiac risk factor — is possible with the right frameworks.',
      'The elevated risk is real. It is not inevitable.',
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  const content = fullContent[params.slug]

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-linen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-display font-light text-4xl text-earth mb-4">
            Post not found
          </h1>
          <Link
            href="/blog"
            className="font-body text-sm text-saffron underline underline-offset-4"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-16 bg-linen">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/blog"
            className="font-body text-xs font-light text-stone hover:text-earth tracking-wide transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </Link>
          <p className="font-body text-[9px] font-medium tracking-[0.22em] text-saffron uppercase mb-4">
            {post.category}
          </p>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-earth leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-display italic font-light text-xl text-earth/60 leading-snug mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs font-body font-light text-stone border-t border-earth/10 pt-5">
            <span>Aayu Health</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {content ? (
            <div className="flex flex-col gap-6">
              {content.body.map((para, i) => (
                <p
                  key={i}
                  className="font-body font-light text-base text-earth/70 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <p className="font-body font-light text-base text-earth/70 leading-relaxed">
                This article is coming soon. In the meantime, explore our coaching
                programs or listen to the Aayu Podcast for related content.
              </p>
            </div>
          )}

          {/* In-article CTA */}
          <div className="mt-16 pt-12 border-t border-earth/10">
            <p className="font-display font-light text-2xl text-earth mb-4">
              Want to go deeper?
            </p>
            <p className="font-body font-light text-sm text-earth/60 leading-relaxed mb-6">
              This is exactly the kind of work we do with Aayu members — turning
              this information into a Personalized action plan built around your
              specific biology, your diet, your family, and your life.
            </p>
            <Link
              href="/services"
              className="inline-block font-body text-sm font-medium bg-saffron text-white px-7 py-3.5 rounded-sm hover:bg-earth-mid transition-colors tracking-wide"
            >
              Explore coaching programs
            </Link>
          </div>
        </div>
      </section>

      {/* More posts */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display font-light text-2xl text-earth mb-8">
            More from the blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-earth/10">
            {posts
              .filter((p) => p.slug !== params.slug)
              .slice(0, 3)
              .map((p) => (
                <article key={p.slug} className="bg-linen p-8 flex flex-col">
                  <p className="font-body text-[9px] font-medium tracking-[0.22em] text-saffron uppercase mb-3">
                    {p.category}
                  </p>
                  <h3 className="font-display font-light text-xl text-earth leading-snug mb-4 flex-1">
                    {p.title}
                  </h3>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="font-body text-sm font-light text-saffron underline underline-offset-4 hover:text-earth-mid transition-colors mt-auto"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
