import { Fuel, Tv } from "lucide-react";

interface ProjectsFilterProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filteredCount: number;
  projectCounts?: Record<string, number>;
}

const ProjectsFilter = ({ filters, activeFilter, onFilterChange, filteredCount, projectCounts = {} }: ProjectsFilterProps) => {
  const getFilterIcon = (filter: string) => {
    if (filter === "Oil & Gas") return <Fuel className="h-4 w-4 mr-2" />;
    if (filter === "Audiovisual & Networking") return <Tv className="h-4 w-4 mr-2" />;
    return null;
  };

  const getFilterColor = (filter: string, isActive: boolean) => {
    if (!isActive) return "text-foreground hover:bg-muted";
    if (filter === "Oil & Gas") return "bg-oil-gas text-white hover:bg-oil-gas";
    if (filter === "Audiovisual & Networking") return "bg-av-tech text-white hover:bg-av-tech";
    return "bg-accent text-accent-foreground hover:bg-accent";
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 animate-on-scroll">
          <div className="flex w-full max-w-2xl bg-card shadow-md rounded-md p-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => onFilterChange(filter)}
                  className={`flex-1 flex items-center justify-center py-3 px-4 font-roboto font-medium transition-all rounded-sm ${getFilterColor(filter, isActive)}`}
                >
                  {getFilterIcon(filter)}
                  <span className="hidden sm:inline">{filter}</span>
                  <span className="sm:hidden">
                    {filter === "All" ? "All" : filter === "Oil & Gas" ? "O&G" : "AV"}
                  </span>
                  {projectCounts[filter] !== undefined && (
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {projectCounts[filter]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Showing {filteredCount} project{filteredCount !== 1 ? 's' : ''} 
            {activeFilter !== "All" && (
              <span className={`ml-1 font-medium ${
                activeFilter === "Oil & Gas" ? "text-oil-gas" : "text-av-tech"
              }`}>
                in {activeFilter}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFilter;
