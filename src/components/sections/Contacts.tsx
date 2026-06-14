import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  {
    label: 'GitHub',
    value: 'zborodayev1',
    href: 'https://github.com/zborodayev1',
  },
  {
    label: 'Telegram',
    value: '@zakharborodayev',
    href: 'https://t.me/zakharborodayev',
  },
  {
    label: 'Email',
    value: 'zakharborodayev@gmail.com',
    href: 'mailto:zakharborodayev@gmail.com',
  },
]

export const Contacts = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-32 pb-24 md:pb-40"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <div className="max-w-4xl">
        <p className="contact-item text-xs font-mono mb-6 md:mb-8" style={{ color: '#3b82f6', opacity: 0 }}>
          // contact
        </p>

        <h2
          className="contact-item font-mono font-bold mb-10 md:mb-16"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: '#f0f4f8', opacity: 0 }}
        >
          Let's talk.
        </h2>

        <div className="flex flex-col gap-px" style={{ borderRadius: '8px', overflow: 'hidden' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-item group flex items-center justify-between px-4 py-4 md:px-6 md:py-5 transition-all duration-200"
              style={{ background: '#0d1526', opacity: 0 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(59,130,246,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#0d1526'
              }}
            >
              <span className="text-xs font-mono shrink-0" style={{ color: '#3d5070' }}>{link.label}</span>
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <span className="text-xs md:text-sm font-mono truncate" style={{ color: '#94a3b8' }}>{link.value}</span>
                <span
                  className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: '#3b82f6' }}
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <p
          className="contact-item text-xs font-mono mt-16 text-center"
          style={{ color: '#3d5070', opacity: 0 }}
        >
          open to collaboration · backend focused
        </p>
      </div>
    </section>
  )
}
