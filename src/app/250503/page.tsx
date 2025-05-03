import Scene from "./components/Scene";
import ProjectPage from "@/components/ProjectPage";

export default function Project250503() {
  return (
    <ProjectPage
      title="Image Gallery Practice"
      description="A practice project exploring interactive image galleries in 3D space. The gallery uses Lorem Picsum, a free image placeholder service, to fetch random images. Features include image loading, camera controls, and interactive zoom functionality. Click on images to zoom in and explore them in detail."
      interactionGuide={[
        "Use your mouse to navigate around the gallery",
        "Left click and drag to rotate the view",
        "Right click and drag to pan",
        "Scroll to zoom in/out",
        "Click on any image to zoom in and focus on it",
        "Click again to return to the overview"
      ]}
      technologies={[
        "Next.js",
        "Three.js",
        "TypeScript",
        "Lorem Picsum API"
      ]}
      type="3D Web Experience"
      date="May 3, 2025"
    >
      <Scene />
    </ProjectPage>
  );
} 