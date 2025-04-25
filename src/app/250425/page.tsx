"use client";

import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250425() {
  return (
    <ProjectPage
      title="Conway's Game of Life in 3D"
      description="This interactive 3D implementation of Conway's Game of Life features a 30x30 grid where each cell is represented as a cube. Living cells glow white against a dark background, creating a mesmerizing cellular automaton simulation. The game follows the classic rules of Conway's Game of Life, where cells live, die, or are born based on their neighbors."
      interactionGuide={[
        "Interactive 3D grid with orthographic view",
        "Click cells to toggle them between alive (white) and dead (dark)",
        "Play/Pause controls to control the simulation",
        "Reset to generate a new random pattern",
        "Clear to start with an empty grid",
        "Smooth animation with optimized rendering"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber",
        "TypeScript"
      ]}
      type="Cellular Automaton"
      date="April 25, 2025"
    >
      <Scene />
    </ProjectPage>
  );
}
