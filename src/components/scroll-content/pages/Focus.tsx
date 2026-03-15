import { motion } from "framer-motion";
import { Code2, Database, Rocket } from "lucide-react";
import type { RefObject } from "react";
import { AnimatedText } from "../../ui/AnimatedText";
import { Text } from "../../ui/Text";

export const Focus = ({
  cubeScreenPos,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}) => {
  const goals = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Go Deeper on Data",
      description:
        "Study PostgreSQL internals, query optimization, indexing strategies, and transactional patterns beyond basic CRUD.",
      skills: [
        { name: "Query Optimization", level: 50 },
        { name: "Transactions & Locks", level: 45 },
        { name: "Database Design", level: 65 },
      ],
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Ship Real Products",
      description:
        "Take projects from architecture to production — CI/CD, Docker, monitoring, and real users.",
      skills: [
        { name: "Docker & Deployment", level: 40 },
        { name: "CI/CD Pipelines", level: 35 },
        { name: "Production Monitoring", level: 30 },
      ],
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Master the Craft",
      description:
        "Write code that scales and survives — testing, clean architecture, performance profiling, and code review habits.",
      skills: [
        { name: "Testing & Coverage", level: 40 },
        { name: "Clean Architecture", level: 65 },
        { name: "Performance Profiling", level: 35 },
      ],
    },
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-transparent text-white">
      <AnimatedText>
        <Text
          text="Focus & Goals"
          cubeScreenPos={cubeScreenPos}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.2 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-6">{goal.icon}</div>

              <Text
                text={goal.title}
                cubeScreenPos={cubeScreenPos}
                className="text-2xl font-bold mb-3 text-center"
              />
              <Text
                text={goal.description}
                cubeScreenPos={cubeScreenPos}
                className="text-sm mb-6 text-center leading-relaxed"
                color="text-gray-400"
              />

              <div className="space-y-4">
                {goal.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <Text
                        text={skill.name}
                        cubeScreenPos={cubeScreenPos}
                        className="text-sm"
                        color="text-gray-300"
                      />
                      <Text
                        text={`${skill.level}%`}
                        cubeScreenPos={cubeScreenPos}
                        className="text-sm"
                        color="text-gray-400"
                      />
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedText>
    </section>
  );
};
