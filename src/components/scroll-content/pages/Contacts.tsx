import { Github, Mail, Terminal } from "lucide-react";
import type { RefObject } from "react";
import { AnimatedText } from "../../ui/AnimatedText";
import { Text } from "../../ui/Text";

export const Contacts = ({
  cubeScreenPos,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}) => {
  const getExperience = () => {
    const start = new Date(2026, 2, 13);
    const now = new Date();

    const totalDays = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    if (years > 0) return `${years}y ${months}m`;
    if (months > 0) return `${months}m ${days}d`;
    return `${days}d`;
  };

  const contactMethods = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      handle: "zborodayev1",
      link: "https://github.com/zakharborodayev",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Telegram",
      handle: "@zakharborodayev",
      link: "https://t.me/zakharborodayev",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      label: "CV",
      handle: "Download PDF",
      link: "#",
    },
  ];

  const stats = [
    { label: "Backend Projects", value: "2" },
    { label: "Experience", value: getExperience() },
    { label: "Technologies", value: "10+" },
    { label: "Age", value: "15" },
  ];

  return (
    <section className="h-screen flex items-center justify-center px-6 py-20">
      <AnimatedText>
        <div className="max-w-5xl w-full space-y-16 text-center">
          <div className="space-y-4">
            <Text
              text="Get In Touch"
              cubeScreenPos={cubeScreenPos}
              className="text-6xl font-bold"
            />
            <div className="h-1 w-24 bg-white mx-auto"></div>

            <Text
              text="Open to collaboration, code review, or just a good backend conversation. Let's build something solid together."
              cubeScreenPos={cubeScreenPos}
              className="text-xl max-w-2xl mx-auto leading-relaxed"
              color="text-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <Text
                  text={stat.value}
                  cubeScreenPos={cubeScreenPos}
                  className="text-3xl md:text-4xl font-bold text-white"
                />
                <Text
                  text={stat.label}
                  cubeScreenPos={cubeScreenPos}
                  className="text-sm"
                  color="text-gray-400"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3 p-6 border-2 border-white/20 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-105 hover:bg-white/10 min-w-[160px]"
              >
                <div className="text-white transition-colors duration-300">
                  {method.icon}
                </div>
                <div className="space-y-1">
                  <Text
                    text={method.label}
                    cubeScreenPos={cubeScreenPos}
                    className="font-semibold"
                  />
                  <Text
                    text={method.handle}
                    cubeScreenPos={cubeScreenPos}
                    className="text-xs"
                    color="text-gray-400"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-8">
            <a
              href="https://t.me/zakharborodayev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Send Message
            </a>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              Available for collaboration • Preferred stack: Node.js,
              TypeScript, PostgreSQL
            </p>
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};
