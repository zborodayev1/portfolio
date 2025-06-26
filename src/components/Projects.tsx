import { ExternalLink, Github } from 'lucide-react'
import { motion, useAnimation } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import image from '../../public/issuehub.png'

type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'IssueHub',
    category: 'Project Management',
    image: image,
    description:
      'Task and project management platform inspired by GitHub Issues. Includes authentication, Kanban board, filtering, comments, and role-based access.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    liveUrl: 'https://issuehub',
    sourceUrl: 'https://github.com/issuehubcom/issuehub',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Web Design',
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Personal portfolio website with clean, minimalist design and smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#home',
    sourceUrl: 'https://github.com/zborodayev1/portfolio',
  },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{project.category}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white/20 text-white text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.liveUrl && project.liveUrl !== '#home' ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.liveUrl}
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
                aria-label="View live project"
              >
                <ExternalLink size={16} />
              </a>
            ) : (
              project.liveUrl &&
              project.liveUrl === '#home' && (
                <a
                  href="#home"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
                  aria-label="View live project"
                >
                  <ExternalLink size={16} />
                </a>
              )
            )}
            {project.sourceUrl && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.sourceUrl}
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
                aria-label="View source code"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView()
  const [isAnimate, setIsAnimate] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      setIsAnimate(true)
    }
  }, [inView])

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        setIsAnimate(true)
        await controls.start({
          width: 140,
          transition: { duration: 0.3, delay: 0.2 },
        })
        await controls.start({
          width: 64,
          transition: { duration: 0.3, delay: 0.5 },
        })
      }
      sequence()
    }
  }, [controls, inView])
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div ref={ref} className="text-center mb-16">
          <div className="overflow-hidden mb-4 h-10">
            <motion.h1
              initial={{ y: 40 }}
              animate={{ y: isAnimate ? 0 : 40 }}
              exit={{ y: 40 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 1.2,
              }}
              className="text-4xl font-bold text-black "
            >
              My Projects
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            exit={{ width: 0 }}
            className=" h-1 bg-black mx-auto"
          />
          <div className="overflow-hidden h-6 mt-6">
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: isAnimate ? 0 : 30 }}
              exit={{ y: 30 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Here are some of my recent projects. Each one represents a unique
              challenge and solution in
            </motion.p>
          </div>
          <div className="overflow-hidden h-6">
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: isAnimate ? 0 : 30 }}
              exit={{ y: 30 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {' '}
              design and development.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimate ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
