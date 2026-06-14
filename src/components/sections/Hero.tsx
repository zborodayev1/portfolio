import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-4xl">
        <div className="hero-line flex items-center gap-2 mb-8" style={{ opacity: 0 }}>
          <span style={{ color: '#3b82f6' }} className="text-sm font-mono">~/portfolio</span>
          <span style={{ color: '#475569' }} className="text-sm font-mono">$</span>
          <span style={{ color: '#94a3b8' }} className="text-sm font-mono">whoami</span>
          <span
            className="cursor-blink ml-1 inline-block w-2 h-4 align-middle"
            style={{ background: '#3b82f6', verticalAlign: 'middle' }}
          />
        </div>

        <h1
          className="hero-line font-mono font-bold leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em', opacity: 0 }}
        >
          <span style={{ color: '#f0f4f8' }}>Zakhar</span>
          <br />
          <span className="gradient-text">Borodayev</span>
        </h1>

        <p
          className="hero-line text-xl md:text-2xl mb-4 font-mono"
          style={{ color: '#94a3b8', opacity: 0 }}
        >
          Backend Engineer
        </p>

        <p
          className="hero-line text-sm mb-10 font-mono"
          style={{ color: '#3d5070', opacity: 0 }}
        >
          Node.js · TypeScript · PostgreSQL · Express
        </p>

        <p
          className="hero-line text-base md:text-lg mb-10 max-w-xl leading-relaxed"
          style={{ color: '#94a3b8', opacity: 0 }}
        >
          Building APIs, real-time systems, and digging into how things actually work under the hood. From Kazakhstan.
        </p>

        <div className="hero-line flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <a
            href="https://github.com/zborodayev1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 font-mono text-sm font-medium transition-all duration-300"
            style={{
              border: '1px solid rgba(59,130,246,0.4)',
              color: '#f0f4f8',
              borderRadius: '4px',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(59,130,246,0.1)'
              el.style.borderColor = '#3b82f6'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.borderColor = 'rgba(59,130,246,0.4)'
            }}
          >
            <span>GitHub</span>
            <span style={{ color: '#3b82f6' }}>→</span>
          </a>
          <a
            href="https://t.me/zakharborodayev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 font-mono text-sm font-medium transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #38bdf8)',
              color: '#080c14',
              borderRadius: '4px',
              border: '1px solid transparent',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
          >
            <span>Telegram</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ color: '#3d5070' }}
      >
        <span className="text-xs font-mono">scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  )
}
