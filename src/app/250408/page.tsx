import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250408() {
  return (
    <ProjectPage
      title="Dynamic Convex Hull"
      description="This interactive 3D scene demonstrates a dynamic convex hull visualization. The scene starts with 7 randomly generated points and their convex hull. Click anywhere on the canvas to add new points and update the hull. Use the reset button to clear all points and generate a new set of 7 random points."
      interactionGuide={[
        "Click anywhere on the canvas to add a new point",
        "The convex hull will automatically update when new points are added",
        "Use the reset button to clear all points and generate 7 new random points",
        "Drag to rotate the view",
        "Scroll to zoom in/out"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber"
      ]}
      type="3D Web Experience"
      date="April 8, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 