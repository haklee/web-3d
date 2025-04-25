import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250401() {
  return (
    <ProjectPage
      title="3D Cube Demo"
      description="This interactive 3D scene demonstrates the integration of Three.js with React Three Fiber in a Next.js environment. The scene features a dynamically rotating cube with realistic lighting and shadows, showcasing the capabilities of modern web-based 3D graphics."
      interactionGuide={[
        "Rotate the view by clicking and dragging with your mouse",
        "Zoom in/out using the mouse wheel or pinch gestures on touch devices",
        "Pan the view by right-clicking and dragging",
        "Double-click to reset the camera position"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber"
      ]}
      type="3D Web Experience"
      date="April 1, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 