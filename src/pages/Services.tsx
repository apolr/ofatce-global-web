
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Factory, Shield, Users, Package, Video, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "networking",
      icon: Network,
      title: "Structured Cabling & Enterprise Networking",
      problem: "Wi-Fi drops, slow file transfers, spaghetti cabinets",
      outcome: "Documented fibre/copper layouts, redundant switching, 99.99% uptime",
      description: "Professional network infrastructure design and deployment including structured cabling, enterprise switching, and comprehensive documentation. We eliminate connectivity issues and ensure reliable, high-performance networks that scale with your business."
    },
    {
      id: "audiovisual",
      icon: Monitor,
      title: "Audiovisual Systems",
      problem: "Clients can't hear or see presentations clearly",
      outcome: "Theatre-quality sound & visuals, intuitive room control",
      description: "Complete audiovisual solutions for boardrooms, auditoriums, and presentation spaces. Our systems deliver crystal-clear audio and visuals with user-friendly controls that make every presentation impactful."
    },
    {
      id: "video-conferencing",
      icon: Video,
      title: "Video-Conferencing",
      problem: "15 min wasted per call fighting setup",
      outcome: "One-touch join with Cisco, Zoom, Teams or Logitech—meetings start on time",
      description: "Seamless video conferencing solutions that eliminate technical delays. Our systems integrate with all major platforms and provide one-touch joining for efficient, productive meetings."
    },
    {
      id: "security-operations",
      icon: Shield,
      title: "Security Operations Centre (SOC)",
      problem: "Breaches discovered weeks late",
      outcome: "24×7 monitoring, SIEM correlation, response playbooks—MTTD in minutes",
      description: "Advanced security monitoring and incident response services. Our SOC provides round-the-clock protection with rapid threat detection and automated response capabilities."
    },
    {
      id: "automation",
      icon: Home,
      title: "Residential & Commercial Automation",
      problem: "Lights, blinds, HVAC all manual",
      outcome: "App-controlled scenes, occupancy sensors, energy dashboards",
      description: "Smart building automation solutions that provide centralized control over lighting, climate, security, and energy systems. Increase comfort, security, and energy efficiency."
    }
  ];

  const addOns = [
    "Maintenance SLAs",
    "Hardware Procurement", 
    "Staff Training",
    "On-site Support"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Five Service Pillars
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive technology solutions that drive real business outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                id={service.id}
                className="card-hover animate-on-scroll bg-white shadow-lg border-0"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                      <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    
                    <div className="lg:col-span-10">
                      <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">
                        {service.title}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-roboto font-semibold text-red-600 mb-2">Problem we solve:</h4>
                          <p className="text-gray-600">{service.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-roboto font-semibold text-green-600 mb-2">Outcome for you:</h4>
                          <p className="text-gray-600">{service.outcome}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to maximize your technology investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-poppins font-bold">+</span>
                  </div>
                  <h4 className="font-poppins font-semibold text-primary">
                    {addon}
                  </h4>
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
            Let's discuss how our service pillars can drive outcomes for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Book Discovery Call
              </button>
            </a>
            <a href="tel:+2348028636198" className="inline-block">
              <button className="border border-white text-white hover:bg-white hover:text-primary font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
