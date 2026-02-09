import { useState, useMemo } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsMetrics from "@/components/projects/ProjectsMetrics";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { portfolioItems, filters, type FilterType } from "@/data/projectsData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredItems = useMemo(() => {
    const items = activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.businessLine === activeFilter);

    // Sort items: local images (starting with /) first, then remote images
    return [...items].sort((a, b) => {
      const aIsLocal = a.images[0]?.startsWith('/');
      const bIsLocal = b.images[0]?.startsWith('/');

      if (aIsLocal && !bIsLocal) return -1;
      if (!aIsLocal && bIsLocal) return 1;
      return 0;
    });
  }, [activeFilter]);

  // Calculate project counts for each filter
  const projectCounts = useMemo(() => {
    return {
      "All": portfolioItems.length,
      "Oil & Gas": portfolioItems.filter(item => item.businessLine === "Oil & Gas").length,
      "Audiovisual & Networking": portfolioItems.filter(item => item.businessLine === "Audiovisual & Networking").length
    };
  }, []);

  return (
    <div className="py-0">
      <ProjectsHero />
      <ProjectsFilter
        filters={[...filters]}
        activeFilter={activeFilter}
        onFilterChange={(filter) => setActiveFilter(filter as FilterType)}
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
