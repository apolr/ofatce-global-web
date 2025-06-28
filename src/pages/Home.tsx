import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Factory, Shield, Clock, Award, Users, Zap } from "lucide-react";
const Home = () => {
  const valueTrio = [{
    icon: Monitor,
    title: "Design",
    description: "Custom solutions tailored to your specific requirements and environment"
  }, {
    icon: Network,
    title: "Deploy",
    description: "Professional installation with minimal disruption to your operations"
  }, {
    icon: Shield,
    title: "Maintain",
    description: "Lifetime support ensuring optimal performance and reliability"
  }];
  const clientLogos = [{
    name: "TotalEnergies",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Avanti",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Ministry of Defence",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Barcadi",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Hometronics",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }];
  const quickStats = [{
    number: "18+",
    label: "Years in Business"
  }, {
    number: "250+",
    label: "Projects Delivered"
  }, {
    number: "99.99%",
    label: "Network Uptime"
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`
      }} />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-on-scroll">
          <h1 className="text-responsive-5xl font-poppins font-bold mb-6 leading-tight">
            Modern AV & Networking Solutions for Nigeria's Most Demanding Organisations
          </h1>
          <p className="text-responsive-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Founded in 2006, OFATCE GLOBAL LTD delivers seamless connectivity, immersive audiovisual experiences and enterprise-grade security—end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Book a Free 30-Minute Discovery Call
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Trio Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Design → Deploy → Maintain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One partner from concept to lifetime support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueTrio.map((item, index) => <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {quickStats.map((stat, index) => <div key={index} className="animate-on-scroll">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-200 text-lg">
                  {stat.label}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-semibold text-primary mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600">
              TotalEnergies, Avanti, Ministry of Defence, Barcadi, Hometronics and more
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {clientLogos.map((client, index) => <div key={index} className="animate-on-scroll">
                <img src={client.logo} alt={client.name} className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get expert guidance on your next project with a free discovery call
          </p>
          <Link to="/contact">
            
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;