
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Network, Factory, Users, Package, Paintbrush } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "audiovisual",
      icon: Monitor,
      title: "Audiovisual & Unified Communications",
      description: "Comprehensive AV solutions including boardroom systems, video conferencing, digital signage, and unified communications platforms. We design, install, and maintain cutting-edge audiovisual infrastructure that enhances collaboration and communication across your organization with seamless integration and user-friendly interfaces."
    },
    {
      id: "networking",
      icon: Network,
      title: "Enterprise Networking & Cyber-Security",
      description: "Robust networking infrastructure including structured cabling, enterprise switching, wireless solutions, and comprehensive cybersecurity measures. Our solutions ensure reliable connectivity, data protection, and network optimization to keep your operations running smoothly while maintaining the highest security standards."
    },
    {
      id: "fabrication",
      icon: Factory,
      title: "Fabrication & EPC (Oil-&-Gas)",
      description: "Specialized fabrication services for the oil and gas industry including mudmat frames, process skids, manifolds, and complete EPC solutions. We deliver turnkey engineering, procurement, and construction services with proven expertise in upstream, midstream, and downstream operations while maintaining strict safety protocols."
    },
    {
      id: "project-management",
      icon: Users,
      title: "Project Management & Manpower Supply",
      description: "Professional project management services and skilled manpower supply across all engineering disciplines. Our experienced team ensures projects are delivered on time, within budget, and to the highest quality standards while providing qualified personnel for short-term and long-term assignments with comprehensive training and support."
    },
    {
      id: "procurement",
      icon: Package,
      title: "Procurement & Logistics",
      description: "Strategic procurement and logistics management services that optimize supply chains and reduce costs. We handle vendor management, sourcing, quality assurance, and delivery coordination to ensure timely availability of materials and equipment while maintaining compliance with local content requirements and international standards."
    },
    {
      id: "sandblasting",
      icon: Paintbrush,
      title: "Sand-blasting & Industrial Painting",
      description: "Professional surface preparation and protective coating services for industrial applications. Our sand-blasting and painting services ensure optimal surface treatment, corrosion protection, and aesthetic finishing for equipment, structures, and facilities with environmentally compliant processes and durable coating systems."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Engineering Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive engineering solutions across audiovisual, networking, and oil & gas sectors, delivered with excellence and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                id={service.id}
                className="card-hover animate-on-scroll bg-white shadow-lg border-0 scroll-mt-24"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                        {service.title}
                      </h3>
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

      {/* Service Features */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures quality, reliability, and value in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality Assured", description: "ISO 9001 certified processes ensure consistent quality delivery" },
              { title: "Local Expertise", description: "Deep understanding of Nigerian market and regulatory requirements" },
              { title: "24/7 Support", description: "Round-the-clock technical support and maintenance services" },
              { title: "Proven Track Record", description: "Successfully completed projects across multiple industries" }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-poppins font-bold">{index + 1}</span>
                </div>
                <h4 className="font-poppins font-semibold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our engineering experts to learn how we can help you achieve your project goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Request Consultation
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
