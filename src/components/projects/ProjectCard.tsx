import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Fuel, Tv } from "lucide-react";
import type { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isOilGas = project.businessLine === "Oil & Gas";

  // Get the primary image (first in array) or fallback
  const primaryImage = project.images[0] || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop";

  return (
    <Card className={`card-hover bg-card shadow-lg border-0 border-t-4 ${isOilGas ? "border-t-oil-gas" : "border-t-av-tech"
      }`}>
      <div className="relative">
        <img
          src={primaryImage}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className={`${isOilGas ? 'bg-oil-gas' : 'bg-av-tech'} text-white flex items-center gap-1`}>
            {isOilGas ? <Fuel className="h-3 w-3" /> : <Tv className="h-3 w-3" />}
            {project.businessLine}
          </Badge>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${isOilGas ? 'bg-oil-gas' : 'bg-av-tech'}`} />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
          {project.title}
        </h3>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className={`font-roboto font-semibold text-sm mb-1 ${isOilGas ? 'text-oil-gas-dark' : 'text-av-tech-dark'}`}>
              Challenge:
            </h4>
            <p className="text-muted-foreground text-sm">{project.problem}</p>
          </div>
          <div>
            <h4 className={`font-roboto font-semibold text-sm mb-1 ${isOilGas ? 'text-oil-gas' : 'text-av-tech'}`}>
              Solution:
            </h4>
            <p className="text-muted-foreground text-sm">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-roboto font-semibold text-green-600 text-sm mb-1">Result:</h4>
            <p className="text-muted-foreground text-sm font-medium">{project.result}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{project.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className={`text-xs ${isOilGas
                  ? 'bg-oil-gas-light text-oil-gas-dark hover:bg-oil-gas-light'
                  : 'bg-av-tech-light text-av-tech-dark hover:bg-av-tech-light'
                }`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button className={`w-full font-roboto ${isOilGas
            ? 'bg-oil-gas hover:bg-oil-gas-dark text-white'
            : 'bg-av-tech hover:bg-av-tech-dark text-white'
          }`}>
          <Eye className="h-4 w-4 mr-2" />
          View Full Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
