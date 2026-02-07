import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Factory, ArrowRight, Network, Wrench, Shield, Video, Fuel, Tv } from "lucide-react";

const OurBusinesses = () => {
  const businessLines = [
    {
      id: "oil-gas",
      title: "Oil & Gas Solutions",
      description: "Building on our robust technical capabilities, OFATCE GLOBAL LTD now delivers specialized solutions tailored to the oil & gas industry. Our approach combines technological innovation with deep industry insight, driving operational efficiency and safety in complex energy environments.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      icon: Fuel,
      link: "/oil-gas",
      theme: "oil-gas",
      services: [
        { name: "Exploration & Production Support", icon: Factory },
        { name: "Infrastructure & Project Management", icon: Wrench },
        { name: "Maintenance & Operational Safety", icon: Shield },
        { name: "Technology Integration & Innovation", icon: Network }
      ],
      highlights: [
        "Advanced monitoring tools and automation",
        "End-to-end project management",
        "Operational audits and safety protocols",
        "IoT-enabled systems and digital control rooms"
      ]
    },
    {
      id: "audiovisual-networking",
      title: "Audiovisual & Networking Solutions",
      description: "OFATCE GLOBAL LTD is a trusted partner in delivering comprehensive audiovisual, cabling, and computer networking solutions. We design, procure, install, and maintain robust technology infrastructures that enhance communication, collaboration, and productivity.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
      icon: Tv,
      link: "/audiovisual-networking",
      theme: "av-tech",
      services: [
        { name: "Audio-Visual Systems", icon: Monitor },
        { name: "Computer Networking & Cabling", icon: Network },
        { name: "Video Conferencing", icon: Video },
        { name: "Security Operations Center", icon: Shield }
      ],
      highlights: [
        "World-class audiovisual systems for all venues",
        "Enterprise networking and structured cabling",
        "Seamless video conferencing with industry leaders",
        "Comprehensive security monitoring and management"
      ]
    }
  ];

  return (
    <div className="pt-20 py-0">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Business Lines
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Two specialized divisions delivering excellence across energy sector services and technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              Specialized Expertise, Unified Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OFATCE Global Limited operates through two distinct business lines, each with deep industry expertise and a proven track record of delivering exceptional results. Our dual-focus approach allows us to serve diverse client needs while maintaining the highest standards of quality and innovation.
            </p>
          </div>

          <div className="space-y-16">
            {businessLines.map((business, index) => (
              <div key={business.id} className="animate-on-scroll">
                <Card className={`overflow-hidden shadow-lg border-0 border-t-4 ${
                  business.theme === "oil-gas" ? "border-t-oil-gas" : "border-t-av-tech"
                }`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img src={business.image} alt={business.title} className="w-full h-full object-cover min-h-[400px]" />
                      <div className={`absolute inset-0 ${
                        business.theme === "oil-gas" 
                          ? "bg-gradient-to-t from-oil-gas-dark/60 to-transparent" 
                          : "bg-gradient-to-t from-av-tech-dark/60 to-transparent"
                      }`} />
                      <div className="absolute bottom-6 left-6">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                          business.theme === "oil-gas" ? "bg-oil-gas" : "bg-av-tech"
                        }`}>
                          <business.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
                        {business.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {business.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-roboto font-semibold text-primary mb-4">Core Services:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {business.services.map((service, idx) => (
                            <div key={idx} className="flex items-center">
                              <service.icon className={`h-5 w-5 mr-3 ${
                                business.theme === "oil-gas" ? "text-oil-gas" : "text-av-tech"
                              }`} />
                              <span className="text-sm text-muted-foreground">{service.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-roboto font-semibold text-primary mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {business.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                                business.theme === "oil-gas" ? "bg-oil-gas" : "bg-av-tech"
                              }`}></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to={business.link}>
                        <Button className={`font-roboto font-medium px-6 py-3 ${
                          business.theme === "oil-gas" 
                            ? "bg-oil-gas hover:bg-oil-gas-dark text-white" 
                            : "bg-av-tech hover:bg-av-tech-dark text-white"
                        }`}>
                          Learn More About {business.title}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
            Ready to Explore Our Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our specialized business lines can address your unique challenges and deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto font-medium px-8 py-3 text-lg">
                View Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-roboto font-medium px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusinesses;
