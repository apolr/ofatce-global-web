
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Factory, Wrench, ArrowRight, Users, Award, TrendingUp } from "lucide-react";

const Home = () => {
  const businessLines = [
    {
      title: "Oil & Gas Solutions",
      description: "Comprehensive services for exploration, production, and infrastructure management",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      icon: Factory,
      link: "/oil-gas",
      highlights: ["Exploration Services", "Production Support", "Infrastructure Management"]
    },
    {
      title: "Audiovisual & Networking",
      description: "Complete AV systems, enterprise networking, and structured cabling solutions",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      icon: Monitor,
      link: "/audiovisual-networking",
      highlights: ["Video Conferencing", "Network Infrastructure", "Automation Systems"]
    }
  ];

  const clientLogos = [
    {
      name: "TotalEnergies",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "Avanti",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "Ministry of Defence",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "Barcadi",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "Hometronics",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    }
  ];

  const quickStats = [
    {
      number: "18+",
      label: "Years in Business",
      icon: Award
    },
    {
      number: "250+",
      label: "Projects Delivered",
      icon: TrendingUp
    },
    {
      number: "99.99%",
      label: "System Reliability",
      icon: Users
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`
        }} />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-on-scroll">
          <h1 className="text-responsive-5xl font-poppins font-bold mb-6 leading-tight">
            Two Specialized Business Lines Under One Trusted Brand
          </h1>
          <p className="text-responsive-xl mb-8 text-gray-200 max-w-4xl mx-auto">
            OFATCE Global Limited delivers excellence across Oil & Gas Solutions and Audiovisual & Networking Services—serving Nigeria's most demanding organizations since 2006.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/our-businesses">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Explore Our Businesses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Lines Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Two Core Business Lines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise in energy sector services and technology solutions, delivering exceptional results across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessLines.map((business, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={business.image} 
                    alt={business.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center mb-2">
                      <business.icon className="h-8 w-8 text-white mr-3" />
                      <h3 className="text-xl font-poppins font-bold text-white">
                        {business.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {business.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-roboto font-semibold text-primary mb-2">Key Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {business.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={business.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-roboto">
                      Explore {business.title}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              One Company, Two Specializations
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2006, OFATCE Global Limited has evolved into a dual-focused organization, combining our expertise in comprehensive oil & gas services with cutting-edge technology solutions. Our commitment to excellence, innovation, and reliable delivery remains constant across both business lines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-semibold text-primary mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600">
              Serving diverse sectors with excellence across both business lines
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="animate-on-scroll">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover how our specialized business lines can deliver exceptional results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/our-businesses">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
