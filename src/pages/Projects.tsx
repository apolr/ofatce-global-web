import { useState } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsMetrics from "@/components/projects/ProjectsMetrics";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { portfolioItems, filters } from "@/data/projectsData";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <div className="pt-20 py-0">
      <ProjectsHero />
      <ProjectsFilter filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} filteredCount={filteredItems.length} />
      <ProjectsGrid projects={filteredItems} />
      <ProjectsMetrics />
      <ProjectsCTA />
    </div>;
};
export default Projects;