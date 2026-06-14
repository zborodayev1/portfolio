import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BIRTH = new Date('2010-04-14T00:00:00')
const EXP_START = new Date('2026-03-13T00:00:00')

function formatElapsed(from: Date, now: Date) {
  let ms = now.getTime() - from.getTime()
  if (ms < 0) ms = 0

  const totalSec = Math.floor(ms / 1000)
  const sec = totalSec % 60
  const totalMin = Math.floor(totalSec / 60)
  const min = totalMin % 60
  const totalHour = Math.floor(totalMin / 60)
  const hour = totalHour % 24
  const totalDays = Math.floor(totalHour / 24)
  const years = Math.floor(totalDays / 365)
  const months = Math.floor((totalDays % 365) / 30)
  const days = totalDays % 30

  const pad = (n: number) => String(n).padStart(2, '0')

  if (years > 0) {
    return `${years}y ${months}mo ${days}d ${pad(hour)}h ${pad(min)}m ${pad(sec)}s`
  }
  return `${months}mo ${days}d ${pad(hour)}h ${pad(min)}m ${pad(sec)}s`
}

const CARD = {
  background: '#0d1526',
  border: '1px solid rgba(59,130,246,0.12)',
  borderRadius: '6px',
  padding: '20px 24px',
} as const

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.a-item',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const staticStats = [
    { label: 'Location', value: 'Kazakhstan' },
    { label: 'Focus', value: 'Backend' },
    { label: 'Stack', value: 'Node · TS · PG' },
  ]

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-32"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <div className="max-w-4xl">
        <p className="a-item text-xs font-mono mb-7 md:mb-10" style={{ color: '#3b82f6', opacity: 0 }}>
          // about
        </p>

        <p
          className="a-item text-base md:text-xl leading-relaxed mb-5 max-w-2xl"
          style={{ color: '#94a3b8', opacity: 0 }}
        >
          Junior backend developer from Kazakhstan. I work with{' '}
          <span style={{ color: '#f0f4f8' }}>Node.js, TypeScript, and PostgreSQL</span>{' '}
          — building APIs, real-time systems, and digging into how things actually work.
        </p>

        <p
          className="a-item text-sm leading-relaxed mb-10 md:mb-14 max-w-2xl"
          style={{ color: '#3d5070', opacity: 0 }}
        >
          Strong at debugging and navigating existing codebases. Starting to think about
          engineering tradeoffs rather than just writing features.
        </p>

        {/* static stats */}
        <div
          className="a-item grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3"
          style={{ opacity: 0 }}
        >
          {staticStats.map((stat) => (
            <div key={stat.label} style={CARD}>
              <p className="text-xs font-mono mb-2" style={{ color: '#3d5070' }}>{stat.label}</p>
              <p className="text-sm font-mono font-medium" style={{ color: '#f0f4f8' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* live counters */}
        <div
          className="a-item grid grid-cols-1 sm:grid-cols-2 gap-3"
          style={{ opacity: 0 }}
        >
          <div style={CARD}>
            <p className="text-xs font-mono mb-2" style={{ color: '#3d5070' }}>Age</p>
            <p className="text-xs md:text-sm font-mono tabular-nums" style={{ color: '#38bdf8' }}>
              {formatElapsed(BIRTH, now)}
            </p>
          </div>
          <div style={CARD}>
            <p className="text-xs font-mono mb-2" style={{ color: '#3d5070' }}>Experience</p>
            <p className="text-xs md:text-sm font-mono tabular-nums" style={{ color: '#38bdf8' }}>
              {formatElapsed(EXP_START, now)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
