import type { RefObject } from "react";

import { AnimatedText } from "../../ui/AnimatedText";
import { Text } from "../../ui/Text";

export const Hero = ({
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
    <section className="h-screen flex items-center justify-center px-6">
      <AnimatedText>
        <div className="max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <Text
              text="Zakhar Borodayev"
              cubeScreenPos={cubeScreenPos}
              className="text-7xl md:text-9xl font-bold text-white tracking-tight"
            />

            <div className="h-1 w-32 bg-white mx-auto" />

            <Text
              text="Backend Engineer — Node.js, TypeScript, PostgreSQL"
              cubeScreenPos={cubeScreenPos}
              className="text-2xl md:text-3xl font-light tracking-wide"
              color="text-gray-300"
            />
          </div>

          <Text
            text="I build reliable backend systems — REST APIs, real-time WebSocket platforms, and document generation pipelines. 16 y.o. and already thinking in architecture."
            cubeScreenPos={cubeScreenPos}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            color="text-gray-400"
          />
        </div>
      </AnimatedText>
    </section>
  );
};
