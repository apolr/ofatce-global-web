import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    if (!isActive) return "";
    if (filter === "Oil & Gas") return "bg-orange-600 text-white hover:bg-orange-600";
    if (filter === "Audiovisual & Networking") return "bg-blue-600 text-white hover:bg-blue-600";
    return "bg-accent text-white hover:bg-accent";
  };

  return (
    <section className="py-12 bg-light-grey">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 animate-on-scroll">
          <Tabs value={activeFilter} onValueChange={onFilterChange} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white shadow-md">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter}
                  value={filter}
                  className={`flex items-center justify-center py-3 px-4 font-roboto font-medium transition-all data-[state=active]:shadow-sm ${getFilterColor(filter, activeFilter === filter)}`}
                >
                  {getFilterIcon(filter)}
                  <span className="hidden sm:inline">{filter}</span>
                  <span className="sm:hidden">
                    {filter === "All" ? "All" : filter === "Oil & Gas" ? "O&G" : "AV"}
                  </span>
                  {projectCounts[filter] !== undefined && (
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      activeFilter === filter 
                        ? "bg-white/20 text-white" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {projectCounts[filter]}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <p className="text-sm text-gray-600">
            Showing {filteredCount} project{filteredCount !== 1 ? 's' : ''} 
            {activeFilter !== "All" && (
              <span className={`ml-1 font-medium ${
                activeFilter === "Oil & Gas" ? "text-orange-600" : "text-blue-600"
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
