import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wrench, Shield, Zap, Users, TrendingUp, Award, Settings, Phone, Mail, ArrowRight, Fuel } from "lucide-react";
import { portfolioItems } from "@/data/projectsData";

const OilGas = () => {
  const services = [
    {
      icon: Factory,
      title: "Exploration & Production Support",
      description: "Leveraging advanced monitoring tools, automation, and data analytics, we enhance exploration and production workflows—helping operators achieve optimized output with greater reliability.",
      features: ["Advanced Monitoring Tools", "Workflow Automation", "Data Analytics", "Production Optimization"]
    },
    {
      icon: Settings,
      title: "Infrastructure & Project Management",
      description: "We design and oversee the implementation of critical oil & gas infrastructure, offering end-to-end project management that ensures on-time, within-budget delivery of facilities and systems.",
      features: ["Infrastructure Design", "Project Management", "Facility Implementation", "On-time Delivery"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Operational Safety",
      description: "Our services extend to routine maintenance, operational audits, and safety protocol reinforcement—minimizing downtime and safeguarding assets.",
      features: ["Routine Maintenance", "Operational Audits", "Safety Protocols", "Asset Protection"]
    },
    {
      icon: Zap,
      title: "Technology Integration & Innovation",
      description: "From IoT-enabled systems to remote digital control rooms, we embed innovative technologies into oil & gas operations, equipping clients with real-time insights and advanced process controls.",
      features: ["IoT-Enabled Systems", "Digital Control Rooms", "Real-time Insights", "Process Controls"]
    }
  ];

  const sectors = [
    {
      title: "Upstream Operations",
      description: "Exploration and production support services",
      icon: Factory,
      services: ["Exploration Support", "Production Enhancement", "Well Optimization", "Reservoir Management"]
    },
    {
      title: "Midstream Operations",
      description: "Transportation and infrastructure solutions",
      icon: Settings,
      services: ["Pipeline Management", "Infrastructure Development", "Transportation Solutions", "Facility Operations"]
    },
    {
      title: "Downstream Operations",
      description: "Processing and operational support",
      icon: Wrench,
      services: ["Process Optimization", "Operational Support", "Maintenance Services", "Safety Management"]
    }
  ];

  const stats = [
    { number: "50+", label: "Oil & Gas Projects", icon: Factory },
    { number: "15+", label: "Industry Partners", icon: Users },
    { number: "100%", label: "Safety Compliance", icon: Shield }
  ];

  // Filter Oil & Gas projects
  const oilGasProjects = portfolioItems.filter(item => item.businessLine === "Oil & Gas").slice(0, 3);

  return (
    <div className="pt-20 py-0">
      {/* Hero Section - Orange themed */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=600&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Fuel className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Oil & Gas Solutions
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed mb-8">
              Building on our robust technical capabilities, OFATCE GLOBAL LTD delivers specialized solutions tailored to the oil & gas industry. Our approach combines technological innovation with deep industry insight, driving operational efficiency and safety in complex energy environments.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-100 font-roboto font-medium px-8 py-3 text-lg">
                Discuss Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
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
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions across the entire oil and gas value chain, combining technological innovation with industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0 border-l-4 border-l-orange-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
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
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Industry Sectors We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive coverage across upstream, midstream, and downstream operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0 border-t-4 border-t-orange-500">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <sector.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {sector.description}
                  </p>
                  <ul className="space-y-2">
                    {sector.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {oilGasProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
                Featured Oil & Gas Projects
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Showcasing our successful implementations in the energy sector
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {oilGasProjects.map((project) => (
                <Card key={project.id} className="animate-on-scroll bg-white shadow-lg border-0 border-t-4 border-t-orange-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-poppins font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                    <p className="text-sm text-gray-700">{project.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projects">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-roboto">
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Performance Metrics */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Industry Experience
            </h2>
            <p className="text-gray-700">
              Proven track record in oil and gas project delivery and partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-orange-600 mb-2">
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

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We understand the critical nature of oil and gas operations and are committed to delivering services that meet the highest standards of safety, reliability, and efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Safety First", description: "Uncompromising commitment to safety protocols" },
                { icon: Award, title: "Quality Assured", description: "Rigorous quality control processes" },
                { icon: Users, title: "Expert Team", description: "Experienced professionals and specialists" },
                { icon: TrendingUp, title: "Innovation", description: "Adopting latest technologies and methods" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section for O&G */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold mb-4">
                Contact Our Oil & Gas Team
              </h2>
              <p className="text-xl text-orange-100">
                Ready to discuss your energy sector project? Our specialists are here to help.
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
                    <p className="text-orange-100">
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
                    <p className="text-orange-100">
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
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-100 font-roboto font-medium px-8 py-3 text-lg">
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

export default OilGas;
