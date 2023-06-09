import Me from "./components/LeftPane/Me";
import About from "./components/RightPane/About";
import ExperienceCard from "./components/RightPane/ExperienceCard";
import ProjectCard from "./components/RightPane/ProjectCard";

export default function Home() {
  return (
    <main>
      <div>
        <Me />
      </div>
      <div>
        <About />
        <ExperienceCard />
        <ProjectCard />
      </div>
    </main>
  );
}
