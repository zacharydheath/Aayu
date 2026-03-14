import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story — Aayu',
  description:
    'Aayu was founded after watching someone we love pay the price of a health system that wasn\'t built for South Asian bodies.',
}

const values = [
  {
    name: 'Cultural Fluency',
    body:
      'We know what a South Asian dinner table looks like. We know the dynamics of a multigenerational household. We know the unspoken rules around exercise, food, and the body — especially for women. That knowledge isn\'t incidental to our work. It is our work.',
  },
  {
    name: 'Evidence-Based',
    body:
      'We take what works from Ayurvedic tradition and pair it with peer-reviewed longevity research. We don\'t sell you ancient wisdom that hasn\'t been tested, and we don\'t hand you generic Western protocols that weren\'t built for your biology.',
  },
  {
    name: 'Human-First',
    body:
      'Every member works with a real human coach — not an algorithm, not a chatbot, not a PDF. Coaching is relationship. Progress happens inside that relationship, built over time with someone who actually knows your life.',
  },
]

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            Our Story
          </p>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-earth leading-[1.1] mb-8">
            We built the coaching{' '}
            <em className="text-saffron not-italic italic">
              we wish had existed.
            </em>
          </h1>
          <p className="font-body font-light text-lg text-earth/60 leading-relaxed max-w-2xl">
            A dear friend returned from an emergency trip to Dhaka because his
            mother, at 64, had been diagnosed with advanced heart disease and
            osteoporosis and needed emergency surgery. She had done everything
            right, by every standard she had been given. This should not be
            happening to our loved ones — and we feel called to change the
            standards.
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text */}
          <div>
            <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
              Her doctors treated what they could see. They addressed the
              symptoms in front of them — the numbers on the chart, the
              immediate risks. That's what doctors are trained to do, and they
              do it well.
            </p>
            <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
              But no one asked what she'd been eating for sixty years. No one
              asked how much she moved, or didn't. No one connected the dots
              between decades of small habits and the crisis that had quietly
              been building the whole time.
            </p>
            <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
              That gap isn't a failure of any individual doctor. It's a gap in
              how medicine is practiced everywhere — built to respond to disease,
              not to prevent it from taking hold in the first place.
            </p>
            <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
              That gap — between what South Asian bodies actually need and what
              the wellness industry offers — is exactly what Aayu was built to
              close.
            </p>
            <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-8">
              We are not a wellness app. We're a coaching practice rooted in
              deep cultural knowledge and rigorous modern science. We work with a
              small number of members at a time, because real change requires
              real relationship.
            </p>
            <Link
              href="/services"
              className="inline-block font-body text-sm font-medium bg-saffron text-white px-7 py-3.5 rounded-sm hover:bg-earth-mid transition-colors tracking-wide"
            >
              Explore our programs
            </Link>
          </div>

          {/* Decorative panel */}
          <div className="bg-earth rounded-sm p-10 lg:p-14 relative overflow-hidden">
            <div className="diagonal-pattern absolute inset-0" />
            <div className="relative">
              <p
                className="font-display italic font-light text-7xl md:text-8xl text-saffron-light leading-none mb-8 select-none"
                style={{ opacity: 0.15 }}
              >
                आय़ू
              </p>
              <p className="font-display italic font-light text-2xl text-saffron-light/80 leading-snug mb-6">
                "The word Aayu comes from Sanskrit. It means life, lifespan,
                vitality. We chose it because that's what we're giving back."
              </p>
              <div className="border-t border-saffron/20 pt-6">
                <p className="font-body text-xs font-light text-saffron-light/40 tracking-wide italic font-display">
                  life · lifespan · vitality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="bg-earth">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-saffron-light leading-tight">
            "Longevity isn't a luxury. For South Asian families,{' '}
            <em className="text-saffron not-italic italic">it's overdue.</em>"
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-14">
            <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-earth leading-tight">
              What we believe.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-earth/10">
            {values.map((v) => (
              <div key={v.name} className="bg-linen p-8 lg:p-10">
                <h3 className="font-display font-light text-2xl text-earth mb-5">
                  {v.name}
                </h3>
                <p className="font-body font-light text-sm text-earth/60 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The gap in the market */}
      <section className="bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
            The Gap
          </p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-earth leading-tight mb-8">
            What the wellness industry gets{' '}
            <em className="text-saffron not-italic italic">wrong.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
                South Asians are four times more likely to develop heart disease
                than the general population — and at significantly younger ages.
                South Asian women have some of the highest rates of osteoporosis
                in the world. Type 2 diabetes develops at lower BMI thresholds
                in South Asian populations than in any other group.
              </p>
              <p className="font-body font-light text-base text-earth/65 leading-relaxed">
                These are known facts. The wellness industry has, largely, failed
                to act on them.
              </p>
            </div>
            <div>
              <p className="font-body font-light text-base text-earth/65 leading-relaxed mb-5">
                Generic advice — eat less rice, do more cardio, take your
                vitamins — fails South Asian clients not because it's wrong, but
                because it misses the cultural context that makes behaviour
                change actually possible.
              </p>
              <p className="font-body font-light text-base text-earth/65 leading-relaxed">
                Aayu coaches understand the role of food in South Asian
                community life. They understand the family pressure, the
                intergenerational norms, the specific dynamics around women and
                exercise. That understanding is what makes our coaching work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
