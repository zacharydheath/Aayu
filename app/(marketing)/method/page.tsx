import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Method — Aayu',
  description:
    'Four pillars. One coherent life. Nutrition, movement, mindset, and biomarkers — built for Bangladeshi bodies.',
}

const pillars = [
  {
    num: '01',
    name: 'Nutrition',
    intro: 'The goal isn\'t a perfect diet. It\'s a sustainable one.',
    paras: [
      'Bangladeshi food is rich, communal, and deeply tied to who you are. Most nutrition advice treats that as a problem to overcome. We don\'t.',
      'We work with what you actually eat — rice, dal, hilsa, family dinners, Eid, everything. Our coaching is built around understanding how your specific food patterns interact with your specific body, then making intelligent adjustments that don\'t require you to stop being who you are.',
      'No elimination diets. No meal plans that ignore your mother\'s cooking. Just a clearer understanding of what\'s working, what isn\'t, and how to shift it gradually and permanently.',
    ],
  },
  {
    num: '02',
    name: 'Movement',
    intro: 'Start where you are. Build from there.',
    paras: [
      'Exercise has an image problem in Bangladesh — particularly for women, for whom vigorous physical activity was rarely modeled or encouraged. We don\'t judge that history. We work from it.',
      'Your movement plan starts at your actual starting point, not a fitness influencer\'s. We focus on progressive strength and mobility — the two things that most directly determine how your body ages — built into a routine that fits your real life, not an idealized version of it.',
      'The goal isn\'t aesthetic. It\'s functional longevity. Being strong enough to live fully for as long as possible.',
    ],
  },
  {
    num: '03',
    name: 'Mindset',
    intro: 'Habits don\'t form in a vacuum.',
    paras: [
      'Lasting change isn\'t about willpower. It\'s about understanding the environment, relationships, and identity patterns that shape your daily decisions — and working with them intelligently.',
      'Bangladeshi families are often built around shared meals, collective schedules, and deep respect for tradition. That\'s not an obstacle to health. With the right framing, it\'s one of the most powerful assets you have. We help you work with your context, not against it.',
      'Your coach will work with you on the internal side of change — not with generic productivity frameworks, but with real attention to what actually drives your behavior and what\'s been quietly getting in the way.',
    ],
  },
  {
    num: '04',
    name: 'Biomarkers',
    intro: 'Your numbers should mean something to you.',
    paras: [
      'Most people get their labs back and don\'t know what they\'re looking at. A number is in range, or it isn\'t. End of conversation.',
      'We go further. In Bangladesh, the risk profiles for cardiovascular disease, insulin resistance, and vitamin D deficiency are significantly elevated — and standard lab panels often underweight them. We help you understand what to test for, how to read what comes back, and what to actually do about it.',
      'At the Premier and Elite tiers, your coach works through your labs with you directly, flags patterns worth discussing with your physician, and helps you track progress over time. Your biomarkers become a conversation, not a mystery.',
    ],
  },
]

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            The Method
          </p>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-earth leading-[1.1] mb-8">
            Longevity science built for the body{' '}
            <em className="text-saffron not-italic italic">you actually have.</em>
          </h1>
          <p className="font-body font-light text-lg text-earth/60 leading-relaxed max-w-2xl">
            Most health coaching was designed for someone else. We built Aayu
            around the specific patterns, risks, and realities that shape health
            in Bangladesh — then wrapped it in the kind of human support that
            actually makes change stick.
          </p>
        </div>
      </section>

      {/* Pillar overview strip */}
      <section className="bg-earth">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-saffron/10">
            {pillars.map((p) => (
              <a
                key={p.num}
                href={`#pillar-${p.num}`}
                className="bg-earth px-6 py-6 hover:bg-earth-mid transition-colors group"
              >
                <p className="font-body text-[9px] font-medium tracking-[0.2em] text-saffron uppercase mb-2">
                  {p.num}
                </p>
                <p className="font-display font-light text-xl text-saffron-light group-hover:text-saffron transition-colors">
                  {p.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <section
          key={pillar.num}
          id={`pillar-${pillar.num}`}
          className={i % 2 === 0 ? 'bg-warm-white' : 'bg-linen'}
        >
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10 lg:gap-16 items-start">
              {/* Number column */}
              <div className="lg:sticky lg:top-24">
                <p
                  className="font-display font-light text-[120px] leading-none text-earth select-none"
                  style={{ opacity: 0.06 }}
                >
                  {pillar.num}
                </p>
                <p className="font-body text-[10px] font-medium tracking-[0.22em] text-saffron uppercase -mt-4">
                  {pillar.num}
                </p>
                <h2 className="font-display font-light text-4xl md:text-5xl text-earth leading-tight mt-2">
                  {pillar.name}
                </h2>
              </div>

              {/* Content */}
              <div>
                <p className="font-display italic font-light text-lg md:text-xl text-earth/70 leading-snug mb-8 border-l-2 border-saffron/40 pl-6">
                  {pillar.intro}
                </p>
                <div className="flex flex-col gap-6">
                  {pillar.paras.map((para, j) => (
                    <p
                      key={j}
                      className="font-body font-light text-[15px] text-earth-mid leading-[1.8]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="border-t border-earth/8" />
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-linen">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="font-display font-light text-4xl md:text-5xl text-earth leading-tight mb-6">
            Ready to see the{' '}
            <em className="text-saffron not-italic italic">method in action?</em>
          </h2>
          <p className="font-body font-light text-base text-earth/60 leading-relaxed mb-10">
            Every member starts with an intake session where we review your
            health history, your goals, and your life — and map out how the four
            pillars will apply to you specifically.
          </p>
          <Link
            href="/services"
            className="inline-block font-body text-sm font-medium bg-saffron text-white px-8 py-4 rounded-sm hover:bg-earth-mid transition-colors tracking-wide"
          >
            View coaching programs
          </Link>
        </div>
      </section>
    </>
  )
}
