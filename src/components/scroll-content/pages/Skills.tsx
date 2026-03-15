import { motion } from "framer-motion";
import { Code2, Database, Palette, Server } from "lucide-react";
import type { RefObject } from "react";
import { AnimatedText } from "../../ui/AnimatedText";
import { Text } from "../../ui/Text";

export const Skills = ({
  cubeScreenPos,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}) => {
  const skillCategories = [
    {
      icon: <Server className="w-12 h-12 mb-4" />,
      title: "Core Backend",
      subtitle: "Node.js, Express, Fastify",
      technologies: [
        { name: "Node.js & Express/Fastify", level: 85 },
        { name: "REST API Design", level: 80 },
        { name: "Worker Threads & Concurrency", level: 65 },
      ],
    },
    {
      icon: <Database className="w-12 h-12 mb-4" />,
      title: "Data & Storage",
      subtitle: "PostgreSQL, Prisma, Redis",
      technologies: [
        { name: "PostgreSQL / Prisma", level: 70 },
        { name: "Redis", level: 55 },
        { name: "Schema & Query Design", level: 70 },
      ],
    },
    {
      icon: <Code2 className="w-12 h-12 mb-4" />,
      title: "Architecture",
      subtitle: "CQRS, WebSocket, Auth",
      technologies: [
        { name: "JWT Auth & Cookies", level: 80 },
        { name: "WebSocket / Real-time", level: 70 },
        { name: "CQRS & Service Patterns", level: 65 },
      ],
    },
    {
      icon: <Palette className="w-12 h-12 mb-4" />,
      title: "Tooling & Quality",
      subtitle: "TypeScript, Zod, Winston",
      technologies: [
        { name: "TypeScript", level: 75 },
        { name: "Zod Validation", level: 80 },
        { name: "Logging & Error Handling", level: 75 },
      ],
    },
  ];

  return (
    <section className="h-screen flex items-center justify-center px-6 py-20">
      <AnimatedText>
        <div className="max-w-7xl w-full space-y-16">
          <div className="text-center space-y-4">
            <Text
              text="Skills & Expertise"
              cubeScreenPos={cubeScreenPos}
              className="text-6xl font-bold text-white"
            />
            <div className="h-1 w-24 bg-white mx-auto"></div>
            <Text
              text="Backend-focused stack built through real projects — not tutorials"
              cubeScreenPos={cubeScreenPos}
              className="text-lg max-w-2xl mx-auto"
              color="text-gray-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-xl group"
              >
                <div>{category.icon}</div>

                <Text
                  text={category.title}
                  cubeScreenPos={cubeScreenPos}
                  className="text-2xl font-bold text-white mb-2"
                />
                <Text
                  text={category.subtitle}
                  cubeScreenPos={cubeScreenPos}
                  className="text-sm mb-6"
                  color="text-gray-400"
                />

                <div className="space-y-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Text
                          text={tech.name}
                          cubeScreenPos={cubeScreenPos}
                          className="text-sm"
                          color="text-gray-300"
                        />
                        <Text
                          text={`${tech.level}%`}
                          cubeScreenPos={cubeScreenPos}
                          className="text-sm"
                          color="text-gray-400"
                        />
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};
