
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wrench, Shield, Zap, Users, TrendingUp, Award, Settings } from "lucide-react";

const OilGas = () => {
  const services = [
    {
      icon: Factory,
      title: "Exploration & Production Services",
      description: "Comprehensive support for oil and gas exploration and production operations with advanced technology and expertise.",
      features: ["Seismic Data Analysis", "Drilling Support", "Production Optimization", "Reservoir Management"]
    },
    {
      icon: Settings,
      title: "Infrastructure & Project Management",
      description: "End-to-end infrastructure development and project management services for complex oil and gas operations.",
      features: ["Pipeline Construction", "Facility Development", "Project Coordination", "Quality Assurance"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Safety",
      description: "Preventive maintenance and safety management services ensuring operational excellence and regulatory compliance.",
      features: ["Preventive Maintenance", "Safety Protocols", "Emergency Response", "Compliance Management"]
    },
    {
      icon: Zap,
      title: "Technology & Innovation",
      description: "Cutting-edge technology solutions and innovative approaches to optimize oil and gas operations.",
      features: ["Digital Solutions", "Automation Systems", "Data Analytics", "Process Optimization"]
    }
  ];

  const sectors = [
    {
      title: "Upstream Operations",
      description: "Exploration and production support services",
      icon: Factory,
      services: ["Drilling Services", "Well Completion", "Production Support", "Reservoir Engineering"]
    },
    {
      title: "Midstream Operations", 
      description: "Transportation and storage solutions",
      icon: Settings,
      services: ["Pipeline Services", "Storage Solutions", "Transportation", "Processing Support"]
    },
    {
      title: "Downstream Operations",
      description: "Refining and distribution support",
      icon: Wrench,
      services: ["Refinery Support", "Distribution Networks", "Quality Control", "Process Optimization"]
    }
  ];

  const stats = [
    { number: "50+", label: "Oil & Gas Projects", icon: Factory },
    { number: "15+", label: "Industry Partners", icon: Users },
    { number: "100%", label: "Safety Compliance", icon: Shield }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Oil & Gas Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive services for the oil and gas industry, delivering excellence in exploration, production, infrastructure management, and technological innovation across the entire value chain.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across the entire oil and gas value chain, from exploration to production and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Industry Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across upstream, midstream, and downstream operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <sector.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {sector.description}
                  </p>
                  <ul className="space-y-2">
                    {sector.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Industry Experience
            </h2>
            <p className="text-gray-600">
              Proven track record in oil and gas project delivery and partnership
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

      {/* Commitment Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand the critical nature of oil and gas operations and are committed to delivering services that meet the highest standards of safety, reliability, and efficiency. Our team combines deep industry knowledge with innovative approaches to help our clients achieve their operational goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Safety First", description: "Uncompromising commitment to safety protocols" },
                { icon: Award, title: "Quality Assured", description: "Rigorous quality control processes" },
                { icon: Users, title: "Expert Team", description: "Experienced professionals and specialists" },
                { icon: TrendingUp, title: "Continuous Innovation", description: "Adopting latest technologies and methods" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Partner with Oil & Gas Experts
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our specialized oil and gas services can support your operations and drive project success
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

export default OilGas;
