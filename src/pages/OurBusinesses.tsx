
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Factory, ArrowRight, Network, Wrench, Shield, Video } from "lucide-react";

const OurBusinesses = () => {
  const businessLines = [
    {
      id: "audiovisual-networking",
      title: "Audiovisual & Networking Solutions",
      description: "Comprehensive technology solutions including audiovisual systems, enterprise networking, structured cabling, video conferencing, and building automation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
      icon: Monitor,
      link: "/audiovisual-networking",
      services: [
        { name: "Audiovisual Systems", icon: Monitor },
        { name: "Networking & Cabling", icon: Network },
        { name: "Video Conferencing", icon: Video },
        { name: "Automation & Security", icon: Shield }
      ],
      highlights: [
        "Enterprise-grade networking infrastructure",
        "Professional audiovisual installations",
        "Seamless video conferencing solutions",
        "Smart building automation systems"
      ]
    },
    {
      id: "oil-gas",
      title: "Oil & Gas Solutions",
      description: "Specialized services for the oil and gas industry, covering exploration, production, infrastructure development, and maintenance operations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      icon: Factory,
      link: "/oil-gas",
      services: [
        { name: "Exploration Services", icon: Factory },
        { name: "Production Support", icon: Wrench },
        { name: "Infrastructure Management", icon: Network },
        { name: "Safety & Maintenance", icon: Shield }
      ],
      highlights: [
        "Comprehensive exploration and production services",
        "Advanced infrastructure project management",
        "Safety-focused maintenance operations",
        "Technology-driven innovation solutions"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Business Lines
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Two specialized divisions delivering excellence across technology solutions and energy sector services
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              OFATCE Global Limited operates through two distinct business lines, each with deep industry expertise and a proven track record of delivering exceptional results. Our dual-focus approach allows us to serve diverse client needs while maintaining the highest standards of quality and innovation.
            </p>
          </div>

          <div className="space-y-16">
            {businessLines.map((business, index) => (
              <div key={business.id} className="animate-on-scroll">
                <Card className="overflow-hidden shadow-lg border-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={business.image} 
                        alt={business.title}
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <business.icon className="h-12 w-12 text-white mb-2" />
                      </div>
                    </div>
                    
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
                        {business.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {business.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-roboto font-semibold text-primary mb-4">Core Services:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {business.services.map((service, idx) => (
                            <div key={idx} className="flex items-center">
                              <service.icon className="h-5 w-5 text-accent mr-3" />
                              <span className="text-sm text-gray-600">{service.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-roboto font-semibold text-primary mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {business.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to={business.link}>
                        <Button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-6 py-3">
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
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
            Ready to Explore Our Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our specialized business lines can address your unique challenges and deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                View Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-roboto font-medium px-8 py-3 text-lg">
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
