
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, TrendingUp, Users, Zap, Monitor, Factory } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const portfolioItems = [
    {
      id: 1,
      title: "Barcadi Ltd – Lagos Campus Network Upgrade",
      category: "Audiovisual & Networking",
      tags: ["Enterprise", "Networking"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      problem: "Network bottlenecks across two campuses",
      solution: "Fibre backbone + redundant core switching",
      result: "4× throughput, zero unplanned downtime in 12 months",
      client: "Barcadi Ltd",
      duration: "4 months",
      location: "Lagos, Nigeria",
      businessLine: "AV/Networking"
    },
    {
      id: 2,
      title: "Avanti Communications Boardroom Transformation",
      category: "Audiovisual & Networking",
      tags: ["Audiovisual", "Video Conferencing"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      problem: "Poor remote participation in board meetings",
      solution: "Complete boardroom video-conferencing overhaul",
      result: "Remote-participation rate ↑ 60%",
      client: "Avanti Communications",
      duration: "2 months",
      location: "Lagos, Nigeria",
      businessLine: "AV/Networking"
    },
    {
      id: 3,
      title: "TotalEnergies Offshore Communication Systems",
      category: "Oil & Gas",
      tags: ["Oil & Gas", "Offshore"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      problem: "Communication gaps in offshore project sites",
      solution: "Integrated communication and data systems for offshore platforms",
      result: "Seamless communication across all offshore platforms",
      client: "TotalEnergies E&P",
      duration: "6 months",
      location: "Offshore Nigeria",
      businessLine: "Oil & Gas"
    },
    {
      id: 4,
      title: "Nigerian Ministry of Defence Secure Communications",
      category: "Audiovisual & Networking",
      tags: ["Defence", "Security"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      problem: "Need for classified-level secure communications",
      solution: "Hardened conferencing suite & backbone links",
      result: "Meets classified-info standards with full redundancy",
      client: "Nigerian Ministry of Defence",
      duration: "8 months",
      location: "Abuja, Nigeria",
      businessLine: "AV/Networking"
    },
    {
      id: 5,
      title: "NNPC Production Facility Infrastructure",
      category: "Oil & Gas",
      tags: ["Production", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      problem: "Aging infrastructure affecting production efficiency",
      solution: "Complete infrastructure modernization and automation",
      result: "30% increase in production efficiency",
      client: "NNPC Limited",
      duration: "12 months",
      location: "Port Harcourt, Nigeria",
      businessLine: "Oil & Gas"
    },
    {
      id: 6,
      title: "Shell Upstream Operations Support",
      category: "Oil & Gas",
      tags: ["Upstream", "Operations"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      problem: "Complex logistics and operational coordination challenges",
      solution: "Comprehensive operational support and logistics management",
      result: "Streamlined operations with 25% cost reduction",
      client: "Shell Nigeria",
      duration: "18 months",
      location: "Multiple Locations",
      businessLine: "Oil & Gas"
    }
  ];

  const filters = ["All", "Audiovisual & Networking", "Oil & Gas"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Projects & Case Studies
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Proven delivery capability across both business lines with concrete, outcome-focused results that demonstrate real business impact
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
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Showing {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''} 
              {activeFilter !== "All" && ` in ${activeFilter}`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${item.businessLine === 'AV/Networking' ? 'bg-blue-600' : 'bg-orange-600'} text-white`}>
                      {item.businessLine}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    {item.businessLine === 'AV/Networking' ? (
                      <Monitor className="h-6 w-6 text-white" />
                    ) : (
                      <Factory className="h-6 w-6 text-white" />
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-roboto font-semibold text-red-600 text-sm mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-roboto font-semibold text-blue-600 text-sm mb-1">Solution:</h4>
                      <p className="text-gray-600 text-sm">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-roboto font-semibold text-green-600 text-sm mb-1">Result:</h4>
                      <p className="text-gray-600 text-sm font-medium">{item.result}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tagIndex) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Measurable Outcomes Across Both Business Lines
            </h2>
            <p className="text-lg text-gray-600">
              Real business impact and measurable results across all our project deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, metric: "4×", label: "Average Performance Improvement" },
              { icon: Users, metric: "60%", label: "Increase in Operational Efficiency" },
              { icon: Zap, metric: "99.9%", label: "System Reliability" },
              { icon: MapPin, metric: "100%", label: "On-Time Delivery Rate" }
            ].map((stat, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar outcomes for your organization across our two specialized business lines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Start Your Project
              </Button>
            </Link>
            <Link to="/our-businesses">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
