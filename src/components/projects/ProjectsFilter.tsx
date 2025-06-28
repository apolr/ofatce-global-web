
import { Button } from "@/components/ui/button";

interface ProjectsFilterProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filteredCount: number;
}

const ProjectsFilter = ({ filters, activeFilter, onFilterChange, filteredCount }: ProjectsFilterProps) => {
  return (
    <section className="py-12 bg-light-grey">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => onFilterChange(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`${
                activeFilter === filter 
                  ? "bg-accent hover:bg-accent/90 text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              } font-roboto font-medium`}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {filteredCount} project{filteredCount !== 1 ? 's' : ''} 
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFilter;
