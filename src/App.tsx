import { useEffect } from 'react'
import Lenis from 'lenis'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contacts } from './components/sections/Contacts'
import { DotGrid } from './components/DotGrid'

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-screen">
      <DotGrid />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  )
}
