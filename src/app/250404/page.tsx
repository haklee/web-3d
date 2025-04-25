import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250404() {
  return (
    <ProjectPage
      title="Exploding Squares"
      description="This interactive 3D scene features a grid of colorful cubes that explode when clicked. Each cube has a unique color and regenerates with a potentially different color after exploding. The scene demonstrates the use of React Three Fiber for creating dynamic 3D interactions."
      interactionGuide={[
        "Click on any cube to make it explode",
        "Exploded cubes will regenerate after 2 seconds",
        "Regenerated cubes may have different colors",
        "View is fixed in isometric perspective"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber"
      ]}
      type="3D Web Experience"
      date="April 4, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 