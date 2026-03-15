import type { RefObject } from "react";
import { AnimatedText } from "../../ui/AnimatedText";
import { Text } from "../../ui/Text";

export const About = ({
  cubeScreenPos,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}) => {
  return (
    <section className="h-screen flex items-center justify-center px-6 ">
      <AnimatedText>
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-6xl font-bold text-white">About Me</h2>
              <div className="h-1 w-20 bg-white" />
            </div>

            <Text
              text="I'm a backend developer focused on building reliable APIs, real-time systems, and document generation pipelines. My main stack is Node.js, TypeScript, and PostgreSQL."
              cubeScreenPos={cubeScreenPos}
              className="text-lg leading-relaxed"
              color="text-gray-300"
            />

            <Text
              text="At 16, I've already shipped two real backend projects — a PDF document platform with a custom Worker Pool and a real-time event platform over WebSocket with a CQRS architecture."
              cubeScreenPos={cubeScreenPos}
              className="leading-relaxed"
              color="text-gray-300"
            />
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-xl">
              <Text
                text="16 y.o."
                cubeScreenPos={cubeScreenPos}
                className="text-5xl font-bold text-white mb-2"
              />
              <Text
                text="Age — and already shipping real systems"
                cubeScreenPos={cubeScreenPos}
                className=""
                color="text-gray-300"
              />
            </div>
            <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-xl">
              <Text
                text="2"
                cubeScreenPos={cubeScreenPos}
                className="text-5xl font-bold text-white mb-2"
              />
              <Text
                text="Real Backend Projects"
                cubeScreenPos={cubeScreenPos}
                className=""
                color="text-gray-300"
              />
            </div>
            <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-xl">
              <Text
                text="∞"
                cubeScreenPos={cubeScreenPos}
                className="text-5xl font-bold text-white mb-2"
              />
              <Text
                text="Ideas in Progress"
                cubeScreenPos={cubeScreenPos}
                className=""
                color="text-gray-300"
              />
            </div>
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};
