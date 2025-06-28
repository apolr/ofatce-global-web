
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Video, Shield, Home, Wrench, Users, Award } from "lucide-react";

const AudiovisualNetworking = () => {
  const services = [
    {
      icon: Monitor,
      title: "Audio-Visual Systems",
      description: "We design, procure, and install world-class audiovisual systems for conferences, presentations, entertainment venues, and more. Our solutions ensure immersive audio and visual quality, creating captivating experiences for your audiences.",
      features: ["Conference Room Systems", "Presentation Venues", "Entertainment Installations", "Immersive Audio-Visual Quality"]
    },
    {
      icon: Network,
      title: "Computer Networking & Cabling",
      description: "From structured cabling to complex enterprise networks, we deliver reliable networking solutions. This includes the procurement and installation of routers, switches, servers, and wireless systems—ensuring high availability and data security.",
      features: ["Structured Cabling Systems", "Enterprise Network Solutions", "Routers & Switches Installation", "Wireless System Deployment"]
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "Partnering with industry leaders like Cisco, Zoom, Polycom, Microsoft Teams, and Logitech, we deliver seamless, high-quality video conferencing solutions that cover procurement, installation, configuration, and long-term support.",
      features: ["Cisco Integration", "Zoom & Microsoft Teams", "Polycom & Logitech Solutions", "Complete Support Services"]
    },
    {
      icon: Shield,
      title: "Security Operations Center (SOC) Services",
      description: "Our SOC services provide comprehensive security monitoring and management, ensuring proactive detection and mitigation of threats to keep your IT environment secure.",
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
      description: "We deploy rigorous quality processes, conduct thorough performance tests, ensure efficient cable management, and configure servers to optimize performance and data integrity.",
      features: ["Quality Assurance Processes", "Performance Testing", "Cable Management", "Server Configuration"]
    }
  ];

  const recentProjects = [
    {
      client: "Barcadi Limited, Lagos",
      service: "Network Infrastructure Cabling",
      description: "Installed comprehensive network infrastructure cabling"
    },
    {
      client: "Avanti Communications",
      service: "Video Conferencing Systems",
      description: "Delivered advanced video conferencing systems"
    },
    {
      client: "TotalEnergies E&P Nigeria",
      service: "Technology Services",
      description: "Provided technology services supporting energy sector operations"
    },
    {
      client: "Nigerian Ministry of Defense, Abuja",
      service: "Secure Networking Solutions",
      description: "Implemented secure networking solutions"
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
            <p className="text-xl text-white leading-relaxed mb-8">
              OFATCE GLOBAL LTD is a trusted partner in delivering comprehensive audiovisual, cabling, and computer networking solutions. We design, procure, install, and maintain robust technology infrastructures that enhance communication, collaboration, and productivity.
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
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From design to deployment to maintenance, we deliver complete technology solutions that drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
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
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Showcasing our commitment to delivering tailored, high-quality solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                    {project.client}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {project.service}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Proven Performance
            </h2>
            <p className="text-gray-700">
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
                  <p className="text-gray-700">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Quality Assurance & Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We deploy rigorous quality processes, conduct thorough performance tests, ensure efficient cable management, and configure servers to optimize performance and data integrity. Our team stays updated on the latest technologies, guaranteeing state-of-the-art implementations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
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
