import { useState, useMemo } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsMetrics from "@/components/projects/ProjectsMetrics";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { portfolioItems, filters } from "@/data/projectsData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Calculate project counts for each filter
  const projectCounts = useMemo(() => {
    return {
      "All": portfolioItems.length,
      "Oil & Gas": portfolioItems.filter(item => item.category === "Oil & Gas").length,
      "Audiovisual & Networking": portfolioItems.filter(item => item.category === "Audiovisual & Networking").length
    };
  }, []);

  return (
    <div className="pt-20 py-0">
      <ProjectsHero />
      <ProjectsFilter 
        filters={filters} 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
        filteredCount={filteredItems.length}
        projectCounts={projectCounts}
      />
      <ProjectsGrid projects={filteredItems} />
      <ProjectsMetrics />
      <ProjectsCTA />
    </div>
  );
};

export default Projects;
