// static page — no 'use client' needed

type DayState = 'done' | 'partial' | 'today' | 'miss'

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const weekStates: DayState[] = ['done', 'done', 'partial', 'done', 'today', 'miss', 'miss']

function DayDot({ state, label }: { state: DayState; label: string }) {
  const styles: Record<DayState, { bg: string; color: string }> = {
    done: { bg: '#3D2B1A', color: '#F0C078' },
    partial: { bg: '#FBF3E2', color: '#C8832A' },
    today: { bg: '#C8832A', color: '#fff' },
    miss: { bg: 'rgba(61,43,26,0.06)', color: '#9E9388' },
  }
  const s = styles[state]
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center font-body font-medium text-[11px]"
        style={{ background: s.bg, color: s.color }}
      >
        {label[0]}
      </div>
      <span className="font-body text-[9px] text-stone">{label}</span>
    </div>
  )
}

function PillarCard({
  title,
  pct,
  sub,
}: {
  title: string
  pct: number
  sub: string
}) {
  return (
    <div
      className="mx-4 mt-3 rounded-xl p-4"
      style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-body font-medium text-[13px] text-earth">{title}</span>
        <span className="font-display font-light text-[28px] text-saffron leading-none">{pct}%</span>
      </div>
      <div className="h-1 rounded-full" style={{ background: 'rgba(61,43,26,0.08)' }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: '#C8832A' }}
        />
      </div>
      <p className="font-body font-light text-[12px] text-stone mt-2">{sub}</p>
    </div>
  )
}

export default function ProgressPage() {
  return (
    <div>
      {/* Header */}
      <div className="pt-6 px-4 mb-1">
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
          Your Progress
        </p>
        <h1 className="font-display font-light text-[28px] text-earth leading-tight">
          30 days of <em className="text-saffron italic not-italic">data.</em>
        </h1>
      </div>

      {/* Longevity Index card */}
      <div
        className="mx-4 mt-4 rounded-xl p-4"
        style={{ background: '#FDFAF5', border: '0.5px solid rgba(61,43,26,0.1)' }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-body font-medium text-[13px] text-earth">Longevity Index</span>
          <span className="font-display font-light text-[28px] text-saffron leading-none">78%</span>
        </div>
        <div className="h-1 rounded-full" style={{ background: 'rgba(61,43,26,0.08)' }}>
          <div className="h-full rounded-full" style={{ width: '78%', background: '#C8832A' }} />
        </div>
        <p className="font-body font-light text-[12px] text-stone mt-2">
          Up 6 points from last month · Keep going
        </p>

        {/* Week dot row */}
        <div className="mt-3 flex justify-between">
          {weekDays.map((day, i) => (
            <DayDot key={i} state={weekStates[i]} label={day} />
          ))}
        </div>
      </div>

      <PillarCard
        title="Nutrition"
        pct={82}
        sub="Strongest pillar · 25 of 30 days aligned"
      />

      <PillarCard
        title="Movement"
        pct={71}
        sub="Room to grow · Priya flagged this for Thursday"
      />

      <PillarCard
        title="Mindset"
        pct={80}
        sub="Consistent · 24 of 30 days locked in or present"
      />

      <div className="mb-4" />
    </div>
  )
}
