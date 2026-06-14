import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const groups = [
  {
    label: 'Confident',
    color: '#f0f4f8',
    items: ['TypeScript', 'Node.js', 'Express / Fastify', 'REST API', 'PostgreSQL', 'SQL', 'Git', 'JWT / Auth'],
  },
  {
    label: 'Working knowledge',
    color: '#94a3b8',
    items: ['Docker', 'WebSocket', 'Prisma', 'Redis', 'Zod', 'CQRS'],
  },
  {
    label: 'Learning',
    color: '#3d5070',
    items: ['CI/CD', 'Testing', 'PostgreSQL internals', 'Linux networking'],
  },
]

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-group',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-32"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <div className="max-w-4xl">
        <p className="text-xs font-mono mb-8 md:mb-12" style={{ color: '#3b82f6' }}>
          // skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {groups.map((group) => (
            <div key={group.label} className="skill-group" style={{ opacity: 0 }}>
              <p
                className="text-xs font-mono mb-5 pb-3"
                style={{ color: '#3b82f6', borderBottom: '1px solid rgba(59,130,246,0.15)' }}
              >
                {group.label}
              </p>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-mono"
                    style={{ color: group.color }}
                  >
                    <span style={{ color: 'rgba(59,130,246,0.4)', fontSize: '10px' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
