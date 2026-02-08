import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Video, Shield, Home, Wrench, Users, Award, Phone, Mail, ArrowRight, Tv } from "lucide-react";
import { portfolioItems } from "@/data/projectsData";

const AudiovisualNetworking = () => {
  const services = [
    {
      icon: Monitor,
      title: "Audio-Visual Systems",
      description: "We design, procure, and install world-class audiovisual systems for conferences, presentations, entertainment venues, and more. Our solutions ensure immersive audio and visual quality.",
      features: ["Conference Room Systems", "Presentation Venues", "Entertainment Installations", "Immersive Audio-Visual Quality"]
    },
    {
      icon: Network,
      title: "Computer Networking & Cabling",
      description: "From structured cabling to complex enterprise networks, we deliver reliable networking solutions including routers, switches, servers, and wireless systems.",
      features: ["Structured Cabling Systems", "Enterprise Network Solutions", "Routers & Switches Installation", "Wireless System Deployment"]
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "Partnering with industry leaders like Cisco, Zoom, Polycom, Microsoft Teams, and Logitech, we deliver seamless, high-quality video conferencing solutions.",
      features: ["Cisco Integration", "Zoom & Microsoft Teams", "Polycom & Logitech Solutions", "Complete Support Services"]
    },
    {
      icon: Shield,
      title: "Security Operations Center (SOC) Services",
      description: "Our SOC services provide comprehensive security monitoring and management, ensuring proactive detection and mitigation of threats.",
      features: ["24/7 Security Monitoring", "Threat Detection & Mitigation", "Proactive Security Management", "IT Environment Protection"]
    },
    {
      icon: Home,
      title: "Residential & Commercial Automation",
      description: "We implement intelligent automation systems that elevate convenience, security, and operational efficiency in homes and businesses.",
      features: ["Smart Home Solutions", "Commercial Automation", "Security Integration", "Operational Efficiency"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "We deploy rigorous quality processes, conduct thorough performance tests, ensure efficient cable management, and configure servers to optimize performance.",
      features: ["Quality Assurance Processes", "Performance Testing", "Cable Management", "Server Configuration"]
    }
  ];

  const stats = [
    { number: "99.99%", label: "Network Uptime", icon: Network },
    { number: "250+", label: "AV Systems Installed", icon: Monitor },
    { number: "15 min", label: "Average Response Time", icon: Users }
  ];

  // Filter AV/Networking projects
  const avProjects = portfolioItems.filter(item => item.businessLine === "Audiovisual & Networking").slice(0, 4);

  return (
    <div className="py-0">
      {/* Hero Section - AV/Tech themed */}
      <section className="py-20 bg-av-tech-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=600&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Tv className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Audiovisual & Networking Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              OFATCE GLOBAL LTD is a trusted partner in delivering comprehensive audiovisual, cabling, and computer networking solutions. We design, procure, install, and maintain robust technology infrastructures that enhance communication and productivity.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-av-tech hover:bg-av-tech-light font-roboto font-medium px-8 py-3 text-lg">
                Discuss Your Technology Needs
                <ArrowRight className="h-5 w-5 ml-2" />
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
              Our Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From design to deployment to maintenance, we deliver complete technology solutions that drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-card shadow-lg border-0 border-l-4 border-l-av-tech">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-av-tech-light rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-av-tech" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-av-tech rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      {avProjects.length > 0 && (
        <section className="py-20 bg-av-tech-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
                Recent AV & Networking Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Showcasing our commitment to delivering tailored, high-quality technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avProjects.map((project) => (
                <Card key={project.id} className="animate-on-scroll bg-card shadow-lg border-0 border-t-4 border-t-av-tech">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-poppins font-semibold text-primary mb-2">
                      {project.client}
                    </h3>
                    <p className="text-av-tech font-medium mb-3 text-sm">
                      {project.tags[0]}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {project.solution.substring(0, 100)}...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projects">
                <Button className="bg-av-tech hover:bg-av-tech-dark text-white font-roboto">
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Performance Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Proven Performance
            </h2>
            <p className="text-muted-foreground">
              Delivering measurable results across all technology implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-on-scroll bg-card shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-av-tech-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-av-tech" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-av-tech mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-av-tech-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              Quality Assurance & Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deploy rigorous quality processes, conduct thorough performance tests, ensure efficient cable management, and configure servers to optimize performance and data integrity. Our team stays updated on the latest technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Security", description: "Enterprise-grade protection" },
                { icon: Award, title: "Quality", description: "Rigorous testing standards" },
                { icon: Users, title: "Support", description: "24/7 technical assistance" },
                { icon: Network, title: "Reliability", description: "99.99% uptime guarantee" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-av-tech-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-av-tech" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section for AV */}
      <section className="py-20 bg-av-tech text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold mb-4">
                Contact Our AV & Networking Team
              </h2>
              <p className="text-xl text-white/80">
                Ready to transform your technology infrastructure? Our specialists are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur border-0 animate-on-scroll">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-white/80">
                      <a href="tel:+2348028636198" className="hover:text-white transition-colors">
                        +234 802 863 6198
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-0 animate-on-scroll">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-white/80">
                      <a href="mailto:info@ofatceglobal.com" className="hover:text-white transition-colors">
                        info@ofatceglobal.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 animate-on-scroll">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-av-tech hover:bg-av-tech-light font-roboto font-medium px-8 py-3 text-lg">
                  Send Inquiry
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudiovisualNetworking;
