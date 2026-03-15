import type { RefObject } from "react";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Focus } from "./pages/Focus";
import { Hero } from "./pages/Hero";
import { Skills } from "./pages/Skills";

export const ScrollContent = ({
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
    <div className="w-screen">
      {/* Hero */}

      <Hero cubeScreenPos={cubeScreenPos} />

      {/* About */}

      <About cubeScreenPos={cubeScreenPos} />

      {/* Skills */}

      <Skills cubeScreenPos={cubeScreenPos} />

      {/* Focus */}

      <Focus cubeScreenPos={cubeScreenPos} />

      {/* Contacts */}

      <Contacts cubeScreenPos={cubeScreenPos} />
    </div>
  );
};
