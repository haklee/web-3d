import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250411() {
  return (
    <ProjectPage
      title="Halton Sequence Visualization"
      description="This interactive visualization demonstrates the Halton sequence, a low-discrepancy sequence that generates points with good distribution properties. Use the controls below to adjust the number of points and the random seed."
      interactionGuide={[
        "Adjust the number of points using the slider",
        "Change the random seed to generate different point distributions",
        "Points are generated using the Halton sequence for optimal distribution"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber"
      ]}
      type="2D Visualization"
      date="April 11, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 