import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye, Award, Calendar, CheckCircle, Shield } from "lucide-react";

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Quality Management System",
      issuer: "International Organization for Standardization",
      issueDate: "2020",
      expiryDate: "2023",
      status: "Active",
      category: "Quality Management",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      description: "This certification demonstrates our commitment to quality management systems that consistently provide products and services that meet customer and regulatory requirements.",
      scope: "Engineering services including welding, sand-blasting, painting, project supervision, and procurement services.",
      benefits: [
        "Consistent quality delivery",
        "Enhanced customer satisfaction", 
        "Continuous improvement processes",
        "International recognition"
      ]
    },
    {
      id: 2,
      title: "Nigerian Oil and Gas Industry Content Development (NOGICD) Certificate",
      issuer: "Nigerian Content Development and Monitoring Board",
      issueDate: "2019",
      expiryDate: "2024",
      status: "Active",
      category: "Local Content",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Certification demonstrating compliance with Nigerian local content requirements for oil and gas operations.",
      scope: "All engineering and fabrication services for oil and gas industry operations in Nigeria.",
      benefits: [
        "Nigerian local content compliance",
        "Enhanced market access",
        "Regulatory compliance",
        "Industry recognition"
      ]
    },
    {
      id: 3,
      title: "Welding Procedure Qualification",
      issuer: "American Welding Society (AWS)",
      issueDate: "2021",
      expiryDate: "2026",
      status: "Active",
      category: "Technical Qualification",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Qualified welding procedures for structural and pressure vessel applications meeting international standards.",
      scope: "Structural welding, pipe welding, and pressure vessel fabrication services.",
      benefits: [
        "International welding standards",
        "Quality assurance",
        "Technical competence",
        "Safety compliance"
      ]
    },
    {
      id: 4,
      title: "Health, Safety & Environment (HSE) Certification",
      issuer: "NEBOSH (National Examination Board in Occupational Safety and Health)",
      issueDate: "2020",
      expiryDate: "2025",
      status: "Active",
      category: "Safety Management",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      description: "Comprehensive health, safety, and environmental management system certification ensuring workplace safety.",
      scope: "All engineering operations, fabrication facilities, and project sites.",
      benefits: [
        "Zero incident target",
        "Environmental protection",
        "Worker safety",
        "Risk management"
      ]
    }
  ];

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsDialogOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Our Certifications
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Demonstrating our commitment to quality, safety, and excellence through internationally recognized certifications and qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications validate our technical competence, quality management systems, and commitment to industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <Card key={certificate.id} className="card-hover animate-on-scroll bg-white shadow-lg border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      certificate.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                    } text-white`}>
                      {certificate.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {certificate.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-poppins font-semibold text-primary mb-3 line-clamp-2">
                    {certificate.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-accent" />
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>Valid: {certificate.issueDate} - {certificate.expiryDate}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {certificate.description}
                  </p>

                  <Button 
                    onClick={() => handleViewCertificate(certificate)}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-roboto"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-poppins font-bold text-primary">
                  {selectedCertificate.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">Issuing Authority</h4>
                    <p className="text-gray-600">{selectedCertificate.issuer}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">Validity Period</h4>
                    <p className="text-gray-600">{selectedCertificate.issueDate} - {selectedCertificate.expiryDate}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">Status</h4>
                    <Badge className={`${
                      selectedCertificate.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                    } text-white`}>
                      {selectedCertificate.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedCertificate.description}</p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">Scope of Certification</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedCertificate.scope}</p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedCertificate.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Certification Benefits */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Why Our Certifications Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications provide assurance of quality, safety, and professional competence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Quality Assurance", 
                description: "Certified processes ensure consistent quality delivery",
                icon: Award
              },
              { 
                title: "Safety Standards", 
                description: "International safety protocols protect all stakeholders",
                icon: Shield
              },
              { 
                title: "Technical Competence", 
                description: "Validated expertise in specialized engineering disciplines",
                icon: CheckCircle
              },
              { 
                title: "Regulatory Compliance", 
                description: "Full compliance with industry and government requirements",
                icon: Award
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We continuously invest in maintaining and upgrading our certifications to ensure we deliver the highest standards of engineering services. Our certifications are not just credentials – they represent our unwavering commitment to quality, safety, and professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quality-policy" className="inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium">
                View Quality Policy
              </Button>
            </a>
            <a href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-roboto font-medium">
                Discuss Your Project
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
