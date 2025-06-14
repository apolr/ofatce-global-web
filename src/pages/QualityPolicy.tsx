
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Shield, Target, CheckCircle } from "lucide-react";

const QualityPolicy = () => {
  const commitments = [
    {
      icon: Award,
      title: "International Standards",
      description: "All services conform to international standards and best practices"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Full compliance with statutory and regulatory requirements"
    },
    {
      icon: Target,
      title: "Continuous Improvement",
      description: "Ongoing enhancement of our Quality Management System effectiveness"
    },
    {
      icon: CheckCircle,
      title: "Zero-Defect Goal",
      description: "Striving for perfection in every project and service delivery"
    }
  ];

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    console.log("Downloading quality policy PDF...");
    alert("Quality Policy PDF download would be initiated here.");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Striving for Zero-Defect Delivery
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our commitment to quality excellence drives everything we do, ensuring consistent delivery of superior engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Quality engineering processes" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
                Our Quality Commitment
              </h2>
              
              <Card className="bg-light-grey border-0 shadow-md">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "Ofatce Global Limited is committed to providing services – including welding, sand-blasting & painting, project supervision and procurement – that conform to international standards and all statutory & regulatory requirements. We continually improve the effectiveness of our Quality Management System."
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <p className="text-sm text-gray-600 font-medium">
                      — Ofatce Global Limited Management
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Button 
                  onClick={handleDownload}
                  className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Quality Policy PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Quality Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The pillars of our quality management system that ensure excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <commitment.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold text-primary mb-3">
                    {commitment.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
                Quality Management Process
              </h2>
              <p className="text-lg text-gray-600">
                Our systematic approach to quality assurance and continuous improvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Plan",
                  description: "Establish quality objectives and processes necessary to deliver results in accordance with customer requirements and organizational policies."
                },
                {
                  step: "02", 
                  title: "Do",
                  description: "Implement the processes, execute the work, and collect data for monitoring and evaluation of processes and products."
                },
                {
                  step: "03",
                  title: "Check",
                  description: "Monitor and evaluate processes and products against policies, objectives, and requirements, and report the results."
                }
              ].map((process, index) => (
                <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-poppins font-bold text-xl">
                        {process.step}
                      </span>
                    </div>
                    <h4 className="text-xl font-poppins font-semibold text-primary mb-4">
                      {process.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold mb-4">
              Quality Performance Metrics
            </h2>
            <p className="text-xl text-gray-200">
              Measurable outcomes that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.8%", label: "Client Satisfaction Rate" },
              { metric: "100%", label: "Compliance Record" },
              { metric: "0", label: "Major Non-Conformities" },
              { metric: "24/7", label: "Support Availability" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;
