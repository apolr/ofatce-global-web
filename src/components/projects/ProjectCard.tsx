import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Monitor, Factory, Fuel, Tv } from "lucide-react";

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
  const isOilGas = project.businessLine === "Oil & Gas";
  const themeColor = isOilGas ? "orange" : "blue";
  
  return (
    <Card className={`card-hover animate-on-scroll bg-white shadow-lg border-0 border-t-4 ${
      isOilGas ? "border-t-orange-500" : "border-t-blue-500"
    }`}>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className={`${isOilGas ? 'bg-orange-600' : 'bg-blue-600'} text-white flex items-center gap-1`}>
            {isOilGas ? <Fuel className="h-3 w-3" /> : <Tv className="h-3 w-3" />}
            {project.businessLine}
          </Badge>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${isOilGas ? 'bg-orange-500' : 'bg-blue-500'}`} />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
          {project.title}
        </h3>
        
        <div className="space-y-3 mb-4">
          <div>
            <h4 className={`font-roboto font-semibold text-sm mb-1 ${isOilGas ? 'text-orange-700' : 'text-blue-700'}`}>
              Challenge:
            </h4>
            <p className="text-gray-600 text-sm">{project.problem}</p>
          </div>
          <div>
            <h4 className={`font-roboto font-semibold text-sm mb-1 ${isOilGas ? 'text-orange-600' : 'text-blue-600'}`}>
              Solution:
            </h4>
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
            <Badge 
              key={tagIndex} 
              variant="secondary" 
              className={`text-xs ${
                isOilGas 
                  ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button className={`w-full font-roboto ${
          isOilGas 
            ? 'bg-orange-600 hover:bg-orange-700 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}>
          <Eye className="h-4 w-4 mr-2" />
          View Full Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
