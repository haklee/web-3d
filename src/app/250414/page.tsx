import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250414() {
  return (
    <ProjectPage
      title="Interactive 3D Dice"
      description="This interactive 3D scene demonstrates a dice implementation using React Three Fiber and Drei's MeshPortalMaterial. Each face of the dice is rendered with a different number of dots (1-6) using MeshPortalMaterial for a unique visual effect. The dice can be rotated and zoomed, and each face changes color when hovered over."
      interactionGuide={[
        "Click and drag to rotate the dice",
        "Scroll to zoom in/out",
        "Hover over faces to see the color change effect",
        "Each face uses MeshPortalMaterial for a unique visual effect"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "React Three Fiber",
        "Drei (MeshPortalMaterial)"
      ]}
      type="3D Web Experience"
      date="April 14, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 