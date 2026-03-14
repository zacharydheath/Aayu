import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast — Aayu',
  description:
    'Honest conversations about South Asian health, longevity, and what it means to truly live.',
}

const episodes = [
  {
    num: 'EP 01',
    title: 'The South Asian Heart Disease Epidemic Nobody\'s Talking About',
    duration: '52 min',
    desc:
      'We break down the data on South Asian cardiovascular risk — why rates are four times higher, why they emerge younger, and what the wellness industry is getting badly wrong.',
  },
  {
    num: 'EP 02',
    title: 'What Ayurvedic Medicine Gets Right (And Wrong)',
    duration: '44 min',
    desc:
      'A nuanced look at the Ayurvedic tradition — the parts that hold up under modern scientific scrutiny, the parts that don\'t, and how to think about integrating ancient frameworks with contemporary evidence.',
  },
  {
    num: 'EP 03',
    title: 'Talking to Your Parents About Their Health: A Practical Guide',
    duration: '38 min',
    desc:
      'One of the most requested topics. How to approach the conversation, what to expect, how to handle resistance, and why the conversation is worth having even when it\'s hard.',
  },
  {
    num: 'EP 04',
    title: 'Why Western Wellness Advice Fails South Asian Bodies',
    duration: '49 min',
    desc:
      'The research gap, the BMI problem, the cholesterol confusion, and what it actually means to receive health advice that was never designed with you in mind.',
  },
  {
    num: 'EP 05',
    title: 'The Gut Health Crisis in the Diaspora',
    duration: '41 min',
    desc:
      'The intersection of traditional South Asian diets, Western dietary shifts in the diaspora, microbiome research, and what the gut health influencer industry gets spectacularly wrong.',
  },
  {
    num: 'EP 06',
    title: 'Strength Training and South Asian Women: Breaking the Taboo',
    duration: '55 min',
    desc:
      'The cultural silence around exercise for South Asian women, the specific health risks that make strength training particularly important, and how to start building a practice from zero.',
  },
]

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-earth">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative overflow-hidden">
          <div className="diagonal-pattern absolute inset-0" />
          <div className="relative">
            <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-6">
              The Aayu Podcast
            </p>
            <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-saffron-light leading-[1.1] mb-8">
              Honest conversations.{' '}
              <em className="text-saffron not-italic italic">Real lives.</em>
            </h1>
            <p className="font-body font-light text-lg text-saffron-light/60 leading-relaxed max-w-2xl mb-10">
              Honest conversations about South Asian health, longevity, and what
              it means to truly live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-body text-sm font-medium bg-saffron text-white px-6 py-3 rounded-sm hover:bg-saffron-light hover:text-earth transition-colors tracking-wide"
              >
                <SpotifyIcon />
                Listen on Spotify
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-body text-sm font-medium bg-saffron-light/10 text-saffron-light px-6 py-3 rounded-sm hover:bg-saffron-light/20 transition-colors tracking-wide border border-saffron-light/20"
              >
                <AppleIcon />
                Apple Podcasts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episode grid */}
      <section className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-4">
              All Episodes
            </p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-earth">
              Every conversation, on demand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-earth/10">
            {episodes.map((ep) => (
              <article key={ep.num} className="bg-warm-white p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <p className="font-body text-[9px] font-medium tracking-[0.22em] text-saffron uppercase">
                    {ep.num}
                  </p>
                  <p className="font-body text-xs font-light text-stone">
                    {ep.duration}
                  </p>
                </div>
                <h3 className="font-display font-light text-2xl text-earth leading-snug mb-4 flex-1">
                  {ep.title}
                </h3>
                <p className="font-body font-light text-sm text-earth/55 leading-relaxed mb-6">
                  {ep.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-5 border-t border-earth/8">
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 font-body text-xs font-medium bg-earth text-saffron-light px-4 py-2.5 rounded-sm hover:bg-earth-mid transition-colors tracking-wide"
                  >
                    <SpotifyIcon small />
                    Spotify
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 font-body text-xs font-medium border border-earth/15 text-earth/70 px-4 py-2.5 rounded-sm hover:border-earth/30 transition-colors tracking-wide"
                  >
                    <AppleIcon small />
                    Apple
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe strip */}
      <section className="bg-linen">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="font-body text-[10px] font-medium tracking-[0.25em] text-saffron uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-earth mb-4">
            New episodes every two weeks.
          </h2>
          <p className="font-body font-light text-base text-earth/60 leading-relaxed mb-8">
            Subscribe wherever you listen. We cover South Asian health, longevity
            research, cultural dynamics, and the evidence behind the coaching we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium bg-saffron text-white px-6 py-3 rounded-sm hover:bg-earth-mid transition-colors tracking-wide"
            >
              <SpotifyIcon />
              Follow on Spotify
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium border border-earth/20 text-earth px-6 py-3 rounded-sm hover:bg-earth/5 transition-colors tracking-wide"
            >
              <AppleIcon />
              Subscribe on Apple
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function SpotifyIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 16
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function AppleIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 16
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}
