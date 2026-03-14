// static page

const actions = [
  {
    done: true,
    text: 'Walk 20 minutes after dinner, 4x this week',
    sub: 'Movement · Done 2 of 4',
  },
  {
    done: true,
    text: 'Add a protein source to breakfast daily',
    sub: 'Nutrition · Done 5 of 7',
  },
  {
    done: false,
    text: '10 min of intentional stillness before bed',
    sub: 'Mindset · Not started',
  },
]

export default function PlanPage() {
  return (
    <div>
      {/* Header */}
      <div className="pt-6 px-4 mb-1">
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
          This Week
        </p>
        <h1 className="font-display font-light text-[28px] text-earth leading-tight">
          Your <em className="text-saffron italic not-italic">Plan.</em>
        </h1>
      </div>

      {/* Action items */}
      <div className="mx-4 mt-4 flex flex-col gap-2">
        {actions.map((action, i) => (
          <div
            key={i}
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              background: '#FDFAF5',
              border: '0.5px solid rgba(61,43,26,0.1)',
              opacity: action.done ? 1 : 0.5,
            }}
          >
            {/* Indicator */}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={
                action.done
                  ? { background: '#3D2B1A' }
                  : { border: '1.5px solid rgba(61,43,26,0.2)', background: 'transparent' }
              }
            >
              {action.done && (
                <div className="w-2 h-2 rounded-full" style={{ background: '#F0C078' }} />
              )}
            </div>
            <div>
              <p className="font-body font-medium text-[13px] text-earth leading-snug">
                {action.text}
              </p>
              <p className="font-body font-light text-[11px] text-stone mt-0.5">
                {action.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Coach note */}
      <div
        className="mx-4 mt-4 mb-4 rounded-xl p-4"
        style={{ background: '#FBF3E2', border: '0.5px solid #C8832A' }}
      >
        <p className="font-body font-medium text-[9px] tracking-[0.22em] uppercase text-saffron mb-2">
          From Priya
        </p>
        <p className="font-display italic font-light text-[18px] text-earth leading-snug">
          Focus on the evening walk this week. Consistency here will move your
          Movement score the most right now.
        </p>
      </div>
    </div>
  )
}
