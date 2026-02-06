import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Factory, ArrowRight, Users, Award, TrendingUp, Fuel, Tv } from "lucide-react";

const Home = () => {
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`
          }} 
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-on-scroll">
          <h1 className="text-responsive-5xl font-poppins font-bold mb-6 leading-tight">
            Two Specialized Business Lines.<br />One Trusted Partner.
          </h1>
          <p className="text-responsive-xl mb-8 text-gray-200 max-w-4xl mx-auto">
            OFATCE Global Limited delivers excellence across Oil & Gas Solutions and Audiovisual & Networking Services. Serving Nigeria's most demanding organizations since 2006.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#business-lines">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Choose Your Path
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Line Selection - NEW PROMINENT SECTION */}
      <section id="business-lines" className="py-24 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Choose Your Business Line
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer two specialized areas of expertise. Select the one that matches your needs to explore our dedicated solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Oil & Gas Card */}
            <Card className="card-hover animate-on-scroll bg-white shadow-xl border-0 overflow-hidden group relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-orange-500"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop" 
                  alt="Oil & Gas Solutions" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-orange-900/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <Fuel className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-white">
                      Oil & Gas Solutions
                    </h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Comprehensive services for exploration, production, infrastructure management, and operational safety in the energy sector.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-roboto font-semibold text-orange-700 mb-3">Key Services:</h4>
                  <ul className="text-gray-600 space-y-2">
                    {["Exploration & Production Support", "Infrastructure & Project Management", "Maintenance & Operational Safety", "Technology Integration"].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/oil-gas">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-roboto text-lg py-6">
                    Explore Oil & Gas
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Audiovisual & Networking Card */}
            <Card className="card-hover animate-on-scroll bg-white shadow-xl border-0 overflow-hidden group relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop" 
                  alt="Audiovisual & Networking" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <Tv className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-white">
                      Audiovisual & Networking
                    </h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Complete AV systems, enterprise networking, structured cabling, and technology solutions for modern organizations.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-roboto font-semibold text-blue-700 mb-3">Key Services:</h4>
                  <ul className="text-gray-600 space-y-2">
                    {["Audio-Visual Systems", "Computer Networking & Cabling", "Video Conferencing Solutions", "Automation & Security"].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/audiovisual-networking">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-roboto text-lg py-6">
                    Explore AV & Networking
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview with Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              One Company, Two Specializations
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
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
