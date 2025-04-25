import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250421() {
  return (
    <ProjectPage
      title="Dynamic Random Pixel Animation"
      description="This interactive 3D scene demonstrates a dynamic pixel animation using React Three Fiber. The canvas is filled with pixels that change color randomly every frame, creating a mesmerizing visual effect. The animation runs at 60 frames per second, with each pixel independently changing its color."
      interactionGuide={[
        "Watch the pixels change color randomly",
        "Each pixel updates independently",
        "The animation runs at 60 FPS",
        "Colors are generated using HSL color space"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber",
        "Shader Programming"
      ]}
      type="3D Web Experience"
      date="April 21, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 