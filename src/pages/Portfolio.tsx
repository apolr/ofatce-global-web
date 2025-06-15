
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const portfolioItems = [
    {
      id: 1,
      title: "Barcadi Ltd – Lagos Campus Network Upgrade",
      category: "Networking",
      tags: ["Enterprise", "Networking"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      problem: "Network bottlenecks across two campuses",
      solution: "Fibre backbone + redundant core switching",
      result: "4× throughput, zero unplanned downtime in 12 months",
      client: "Barcadi Ltd",
      duration: "4 months",
      location: "Lagos, Nigeria",
      metrics: {
        throughput: "4× increase",
        uptime: "100%",
        campuses: "2"
      }
    },
    {
      id: 2,
      title: "Avanti Communications Boardroom Transformation",
      category: "AV",
      tags: ["Audiovisual", "Video Conferencing"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      problem: "Poor remote participation in board meetings",
      solution: "Complete boardroom video-conferencing overhaul",
      result: "Remote-participation rate ↑ 60%",
      client: "Avanti Communications",
      duration: "2 months",
      location: "Lagos, Nigeria",
      metrics: {
        participation: "60% increase",
        satisfaction: "95%",
        rooms: "3"
      }
    },
    {
      id: 3,
      title: "TotalEnergies Offshore AV & Network Deployment",
      category: "Energy",
      tags: ["Oil & Gas", "Offshore"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      problem: "Communication gaps in offshore project sites",
      solution: "Rapid-deploy AV & network for offshore project sites",
      result: "Seamless communication across all offshore platforms",
      client: "TotalEnergies E&P (via Southgate Technologies)",
      duration: "6 months",
      location: "Offshore Nigeria",
      metrics: {
        platforms: "5",
        reliability: "99.9%",
        deployment: "Rapid"
      }
    },
    {
      id: 4,
      title: "Nigerian Ministry of Defence Secure Communications",
      category: "Government",
      tags: ["Defence", "Security"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      problem: "Need for classified-level secure communications",
      solution: "Hardened conferencing suite & backbone links",
      result: "Meets classified-info standards with full redundancy",
      client: "Nigerian Ministry of Defence",
      duration: "8 months",
      location: "Abuja, Nigeria",
      metrics: {
        classification: "Top Secret",
        redundancy: "N+1",
        compliance: "100%"
      }
    }
  ];

  const filters = ["All", "Networking", "AV", "Energy", "Government"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        item.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Proven Delivery Capability
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Concrete, outcome-focused case studies that demonstrate real business impact
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
                    <Badge className="bg-accent text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-roboto font-semibold text-red-600 text-sm mb-1">Problem:</h4>
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
              Measurable Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              Real business impact across all our project deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, metric: "4×", label: "Average Performance Improvement" },
              { icon: Users, metric: "60%", label: "Increase in Remote Participation" },
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
            Let's discuss how we can deliver similar outcomes for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Start Your Project
              </button>
            </a>
            <a href="/why-ofatce" className="inline-block">
              <button className="border border-white text-white hover:bg-white hover:text-primary font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Why Choose OFATCE
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
