import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  name: string
  description: string
  stack: string[]
  badge: string
  highlight: string
  github: string
  npm?: string
}

const projects: Project[] = [
  {
    name: 'Market-Nest',
    description:
      'Full-stack marketplace application. Auth, product listings, real-time notifications over WebSocket, and a Node.js MVC backend. Largest personal project — built everything from scratch.',
    stack: ['TypeScript', 'React', 'Redux', 'Node.js', 'WebSocket', 'MongoDB', 'Tailwind'],
    badge: '70 commits',
    highlight: 'WebSocket real-time layer',
    github: 'https://github.com/zborodayev1/Market-Nest',
  },
  {
    name: 'npm-pdf-markup',
    description:
      'Published npm package for generating PDF documents using a custom markup syntax. Built a tag parser that converts markup into styled text fragments with colors, sizes, and fonts.',
    stack: ['TypeScript', 'pdf-lib', 'npm'],
    badge: 'Published',
    highlight: 'Custom markup parser',
    github: 'https://github.com/zborodayev1/npm-pdf-markup',
    npm: 'https://www.npmjs.com/package/npm-pdf-markup',
  },
]

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-32"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <div className="max-w-4xl">
        <p className="text-xs font-mono mb-12" style={{ color: '#3b82f6' }}>
          // projects
        </p>

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card group p-8 transition-all duration-300"
              style={{
                background: '#0d1526',
                border: '1px solid rgba(59,130,246,0.15)',
                borderRadius: '8px',
                opacity: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.15)'
              }}
            >
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <h3 className="text-xl font-mono font-bold" style={{ color: '#f0f4f8' }}>
                  {project.name}
                </h3>
                <span
                  className="text-xs font-mono px-3 py-1"
                  style={{ color: '#3b82f6', background: 'rgba(59,130,246,0.08)', borderRadius: '4px' }}
                >
                  {project.badge}
                </span>
              </div>

              <p className="text-xs font-mono mb-4" style={{ color: '#38bdf8' }}>
                → {project.highlight}
              </p>

              <p className="text-sm leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1"
                    style={{
                      color: '#3d5070',
                      border: '1px solid rgba(59,130,246,0.12)',
                      borderRadius: '3px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono transition-colors duration-200"
                  style={{ color: '#3d5070' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#3b82f6' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#3d5070' }}
                >
                  GitHub →
                </a>
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono transition-colors duration-200"
                    style={{ color: '#3d5070' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38bdf8' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#3d5070' }}
                  >
                    npm →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
