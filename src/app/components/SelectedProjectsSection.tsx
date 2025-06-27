// SelectedProjectsSection.tsx
import ProjectCard from "./ProjectCard";
import { allProjects } from "../../../lib/projects";

const SelectedProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100 text-left leading-tight">
        Selected projects
      </h2>

      <div className="space-y-6">
        {allProjects.map(
          (
            project,
            index // lib/projects.ts からインポートした allProjects を使用
          ) => (
            <ProjectCard key={index} {...project} />
          )
        )}
      </div>
    </section>
  );
};

export default SelectedProjectsSection;
