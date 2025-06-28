
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Monitor, Factory } from "lucide-react";

interface ProjectCardProps {
  project: {
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
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="card-hover animate-on-scroll bg-white shadow-lg border-0">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4">
          <Badge className={`${project.businessLine === 'AV/Networking' ? 'bg-blue-600' : 'bg-orange-600'} text-white`}>
            {project.businessLine}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          {project.businessLine === 'AV/Networking' ? (
            <Monitor className="h-6 w-6 text-white" />
          ) : (
            <Factory className="h-6 w-6 text-white" />
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
          {project.title}
        </h3>
        
        <div className="space-y-3 mb-4">
          <div>
            <h4 className="font-roboto font-semibold text-red-600 text-sm mb-1">Challenge:</h4>
            <p className="text-gray-600 text-sm">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-roboto font-semibold text-blue-600 text-sm mb-1">Solution:</h4>
            <p className="text-gray-600 text-sm">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-roboto font-semibold text-green-600 text-sm mb-1">Result:</h4>
            <p className="text-gray-600 text-sm font-medium">{project.result}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
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
            <Badge key={tagIndex} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button className="w-full bg-accent hover:bg-accent/90 text-white font-roboto">
          <Eye className="h-4 w-4 mr-2" />
          View Full Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
