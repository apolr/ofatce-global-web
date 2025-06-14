
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Award } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const portfolioItems = [
    {
      id: 1,
      title: "Mudmat Frame Assembly for TOTAL Upstream Nigeria",
      category: "Fabrication",
      tags: ["Oil & Gas", "Fabrication"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
      ],
      description: "Comprehensive fabrication and assembly of mudmat frames for TOTAL's upstream operations. This project involved precision engineering, quality welding, and strict adherence to international standards. The project was completed within tight deadlines while maintaining zero safety incidents and exceeding client expectations for quality and delivery.",
      client: "TOTAL Upstream Nigeria",
      duration: "8 months",
      location: "Port Harcourt, Nigeria",
      kpis: {
        weight: "450 tons",
        deliveryTime: "On schedule",
        safetyRecord: "Zero incidents"
      }
    },
    {
      id: 2,
      title: "Enterprise Network Infrastructure - Chevron Nigeria",
      category: "Networking",
      tags: ["Networking", "ICT"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
      ],
      description: "Complete network infrastructure overhaul including structured cabling, enterprise switches, and cybersecurity implementation for Chevron's regional office.",
      client: "Chevron Nigeria Limited",
      duration: "6 months",
      location: "Lagos, Nigeria",
      kpis: {
        coverage: "100% facility",
        uptime: "99.9%",
        nodes: "500+ devices"
      }
    },
    {
      id: 3,
      title: "Boardroom AV Integration - Shell Nigeria",
      category: "AV",
      tags: ["AV", "Audiovisual"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
      ],
      description: "State-of-the-art audiovisual integration for executive boardrooms including video conferencing, digital displays, and unified communications systems.",
      client: "Shell Nigeria",
      duration: "3 months",
      location: "Abuja, Nigeria",
      kpis: {
        rooms: "12 boardrooms",
        displays: "24 units",
        satisfaction: "100%"
      }
    }
  ];

  const filters = ["All", "AV", "Networking", "Oil & Gas", "Fabrication"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        item.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())) ||
        item.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Showcasing our expertise through successful project deliveries across multiple industries and engineering disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="card-hover animate-on-scroll bg-white shadow-lg border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-poppins font-semibold text-primary mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{item.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-roboto">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Detail */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
                Featured Project
              </h2>
              <p className="text-lg text-gray-600">
                Detailed case study of our mudmat frame assembly project
              </p>
            </div>

            <Card className="animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={portfolioItems[0].image}
                      alt={portfolioItems[0].title}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                      {portfolioItems[0].title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-gray-600">{portfolioItems[0].location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span className="text-gray-600">Duration: {portfolioItems[0].duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="text-gray-600">Client: {portfolioItems[0].client}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {portfolioItems[0].description}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-light-grey rounded-lg">
                        <div className="text-2xl font-poppins font-bold text-accent mb-1">
                          450
                        </div>
                        <div className="text-sm text-gray-600">Tons Weight</div>
                      </div>
                      <div className="text-center p-4 bg-light-grey rounded-lg">
                        <div className="text-2xl font-poppins font-bold text-accent mb-1">
                          100%
                        </div>
                        <div className="text-sm text-gray-600">On Schedule</div>
                      </div>
                      <div className="text-center p-4 bg-light-grey rounded-lg">
                        <div className="text-2xl font-poppins font-bold text-accent mb-1">
                          Zero
                        </div>
                        <div className="text-sm text-gray-600">Incidents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
