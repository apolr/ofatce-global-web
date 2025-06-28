
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Video, Shield, Home, Wrench, Users, Award } from "lucide-react";

const AudiovisualNetworking = () => {
  const services = [
    {
      icon: Monitor,
      title: "Audiovisual Systems",
      description: "Complete audiovisual solutions for boardrooms, auditoriums, and presentation spaces with theater-quality sound and visuals.",
      features: ["Professional Display Systems", "High-Quality Audio Solutions", "Interactive Presentation Tools", "Room Control Systems"]
    },
    {
      icon: Network,
      title: "Networking & Cabling",
      description: "Professional network infrastructure design and deployment including structured cabling and enterprise switching.",
      features: ["Structured Cabling Systems", "Enterprise Network Design", "Fiber Optic Installation", "Network Documentation"]
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "Seamless video conferencing solutions that integrate with all major platforms for efficient, productive meetings.",
      features: ["One-Touch Meeting Join", "Multi-Platform Integration", "Professional Camera Systems", "Crystal Clear Audio"]
    },
    {
      icon: Shield,
      title: "Automation & Security",
      description: "Smart building automation and security systems providing centralized control and enhanced protection.",
      features: ["Building Automation", "Access Control Systems", "CCTV Surveillance", "Integrated Security Solutions"]
    },
    {
      icon: Home,
      title: "Residential Automation",
      description: "Smart home solutions for lighting, climate, security, and entertainment systems with app-controlled convenience.",
      features: ["Smart Lighting Control", "Climate Management", "Home Entertainment", "Security Integration"]
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      description: "Comprehensive maintenance services ensuring optimal performance and reliability of all installed systems.",
      features: ["24/7 Support Services", "Preventive Maintenance", "System Monitoring", "Rapid Response"]
    }
  ];

  const stats = [
    { number: "99.99%", label: "Network Uptime", icon: Network },
    { number: "250+", label: "AV Systems Installed", icon: Monitor },
    { number: "15 min", label: "Average Response Time", icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Audiovisual & Networking Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive technology solutions that connect, communicate, and automate your business operations with enterprise-grade reliability and professional excellence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Discuss Your Technology Needs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Technology Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From design to deployment to maintenance, we deliver complete technology solutions that drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Proven Performance
            </h2>
            <p className="text-gray-600">
              Delivering measurable results across all technology implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Process: Design → Deploy → Maintain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to lifetime support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Design",
                description: "Custom solutions tailored to your specific requirements and environment",
                icon: Monitor
              },
              {
                step: "02", 
                title: "Deploy",
                description: "Professional installation with minimal disruption to your operations",
                icon: Network
              },
              {
                step: "03",
                title: "Maintain",
                description: "Lifetime support ensuring optimal performance and reliability",
                icon: Shield
              }
            ].map((phase, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-poppins font-bold text-accent mb-4">
                    {phase.step}
                  </div>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {phase.description}
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
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our audiovisual and networking solutions can drive efficiency and success for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                View Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudiovisualNetworking;
