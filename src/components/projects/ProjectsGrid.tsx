import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projectsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Calendar, Fuel, Tv } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOilGas = selectedProject?.businessLine === "Oil & Gas";

  // Handle keyboard navigation for lightbox
  if (lightboxIndex !== null && selectedProject) {
    window.onkeydown = (e) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex(lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex(lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
  } else {
    window.onkeydown = null;
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-background/95 backdrop-blur-sm">
          {selectedProject && (
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="relative w-full h-64 md:h-80 shrink-0 group">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover cursor-pointer transition-opacity hover:opacity-90"
                  onClick={() => setLightboxIndex(0)}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">Click to expand</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${isOilGas ? 'bg-oil-gas' : 'bg-av-tech'} text-white flex items-center gap-1`}>
                    {isOilGas ? <Fuel className="h-3 w-3" /> : <Tv className="h-3 w-3" />}
                    {selectedProject.businessLine}
                  </Badge>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${isOilGas ? 'bg-oil-gas' : 'bg-av-tech'}`} />
              </div>

              <ScrollArea className="flex-1">
                <div className="p-6 space-y-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-poppins font-bold text-primary">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedProject.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedProject.duration}</span>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className={`font-roboto font-semibold text-lg mb-2 ${isOilGas ? 'text-oil-gas-dark' : 'text-av-tech-dark'}`}>
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                      </div>

                      <div>
                        <h4 className={`font-roboto font-semibold text-lg mb-2 ${isOilGas ? 'text-oil-gas' : 'text-av-tech'}`}>
                          Our Solution
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-roboto font-semibold text-lg mb-2 text-green-600">
                          The Result
                        </h4>
                        <p className="text-muted-foreground leading-relaxed font-medium">{selectedProject.result}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Project Gallery</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedProject.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative group cursor-pointer overflow-hidden rounded-md border border-border"
                              onClick={() => setLightboxIndex(idx)}
                            >
                              <img
                                src={img}
                                alt={`Project detail ${idx + 1}`}
                                className="w-full h-24 object-cover transition-transform group-hover:scale-110 duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies & Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox Overlay */}
      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject && lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-w-[100vw] h-[100vh] p-0 border-none bg-black/95 backdrop-blur-sm [&>button]:hidden">
          {selectedProject && lightboxIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-[70] p-2"
                onClick={() => setLightboxIndex(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <button
                className="absolute left-4 text-white hover:text-gray-300 z-[70] p-4 bg-black/50 rounded-full transition-colors"
                onClick={handlePrevImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.images[lightboxIndex]}
                  alt={`${selectedProject.title} - View ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
                  {lightboxIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              <button
                className="absolute right-4 text-white hover:text-gray-300 z-[70] p-4 bg-black/50 rounded-full transition-colors"
                onClick={handleNextImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsGrid;
