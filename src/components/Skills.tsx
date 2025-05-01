import clsx from 'clsx'
import React from 'react'

const skillCategories = [
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 65 },
      { name: 'Graphic Design', level: 65 },
      { name: 'Prototyping', level: 70 },
      { name: 'Branding', level: 70 },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', level: 0 },
      { name: 'Git', level: 60 },
      { name: 'VS Code', level: 85 },
      { name: 'Adobe Suite', level: 0 },
    ],
  },
]

const SkillBar: React.FC<{ name: string; level: number }> = ({
  name,
  level,
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-medium">{name}</span>
        <span
          className={clsx(
            'text-gray-600 text-sm',
            level > 70 && 'text-green-500',
            level > 40 && level <= 70 && 'text-yellow-500',
            level <= 40 && 'text-red-500'
          )}
        >
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={clsx(
            'h-full transition-all duration-1000 delay-150 ease-out border rounded-full',
            level > 70 && 'bg-green-200 border-green-500',
            level > 40 && level <= 70 && 'bg-yellow-200 border-yellow-500',
            level <= 40 && 'bg-red-200 border-red-500'
          )}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I've developed expertise across design and development, allowing me
            to create comprehensive solutions from concept to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-black">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
