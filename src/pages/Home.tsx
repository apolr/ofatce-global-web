import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Factory, Shield, Clock, Award } from "lucide-react";
const Home = () => {
  const highlights = [{
    icon: Monitor,
    title: "Audiovisual Integration",
    description: "Design, install and support of modern AV & unified-communications systems for boardrooms, NOCs and training suites with cutting-edge technology solutions."
  }, {
    icon: Network,
    title: "Networking & ICT",
    description: "Enterprise switching, structured cabling, Wi-Fi and cybersecurity that keep operations always-on with robust infrastructure and 24/7 monitoring."
  }, {
    icon: Factory,
    title: "Fabrication & EPC",
    description: "Mudmat frames, skids, manifolds plus turnkey engineering, procurement & construction for upstream assets with proven safety standards."
  }];
  const clientLogos = [{
    name: "TOTAL",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Chevron",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "NLNG",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Shell",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }, {
    name: "Agip",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`
      }} />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-responsive-5xl font-poppins font-bold mb-6 leading-tight">
            Modern solutions for Audiovisual, Networking & Oil-and-Gas industries
          </h1>
          <p className="text-responsive-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            From AV integration to EPC fabrication, we deliver end-to-end engineering services with unmatched expertise and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Core Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering innovative engineering solutions across multiple industries with precision and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center space-x-3 animate-on-scroll">
              <Award className="h-8 w-8 text-accent" />
              <span className="font-roboto font-medium">ISO-9001 Certified</span>
            </div>
            <div className="flex items-center space-x-3 animate-on-scroll">
              <Shield className="h-8 w-8 text-accent" />
              <span className="font-roboto font-medium">Nigerian Local-Content Focus</span>
            </div>
            <div className="flex items-center space-x-3 animate-on-scroll">
              <Clock className="h-8 w-8 text-accent" />
              <span className="font-roboto font-medium">24/7 Support Hotline</span>
            </div>
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
              We're proud to serve leading companies in the oil & gas industry
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
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get in touch with our engineering experts and discover how we can help bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;