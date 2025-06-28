
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Array<{
    id: number;
    title: string;
    category: string;
    tags: string[];
    image: string;
    problem: string;
    solution: string;
    result: string;
    client: string;
    duration: string;
    location: string;
    businessLine: string;
  }>;
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
