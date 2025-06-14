
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Heart, Users, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const coreValues = [
    { icon: Shield, title: "Integrity", description: "Upholding the highest ethical standards in all our operations" },
    { icon: Shield, title: "Safety", description: "Prioritizing safety in every project and workplace environment" },
    { icon: Lightbulb, title: "Innovation", description: "Embracing cutting-edge technologies and solutions" },
    { icon: Target, title: "Excellence", description: "Delivering superior quality in all our services" },
    { icon: Users, title: "Local Empowerment", description: "Supporting Nigerian talent and local content development" }
  ];

  const timeline = [
    { year: "2011", event: "Company Incorporation", description: "Ofatce Global Limited was established as an indigenous Nigerian engineering firm" },
    { year: "2016", event: "AV Division Launch", description: "Expanded services to include comprehensive audiovisual integration solutions" },
    { year: "2020", event: "ISO-9001 Certification", description: "Achieved international quality management certification" },
    { year: "2025", event: "Regional Expansion", description: "Strategic expansion across West African markets" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              About Ofatce Global Limited
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Founded in 2011, we are an indigenous Nigerian firm delivering multidisciplinary engineering support across audiovisual, networking, and oil & gas sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Engineering services" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
                Engineering Excellence Since 2011
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ofatce Global Limited stands as a beacon of engineering excellence in Nigeria, providing comprehensive solutions that bridge traditional engineering with modern technology. Our multidisciplinary approach enables us to deliver integrated solutions across diverse industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience, we have built a reputation for reliability, innovation, and safety-centric solutions that consistently exceed client expectations while contributing to Nigeria's industrial development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "Deliver reliable, innovative and safety-centric engineering solutions that exceed client expectations while fostering sustainable growth and local empowerment."
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "To be West Africa's preferred partner in AV, ICT and energy infrastructure, recognized for excellence, innovation, and positive community impact."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-on-scroll">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-poppins font-bold text-lg shadow-lg z-10">
                    {item.year}
                  </div>
                  <div className="ml-8 flex-1">
                    <h4 className="text-xl font-poppins font-semibold text-primary mb-2">
                      {item.event}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-8">
              Quality & Safety Commitment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our HSE goal is zero lost-time incidents; every project is executed under a certified Quality Management System. We maintain rigorous standards that ensure the safety of our personnel, protection of the environment, and delivery of superior quality outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">0</div>
                <p className="text-gray-600">Lost Time Incidents Goal</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">ISO</div>
                <p className="text-gray-600">9001 Certified QMS</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">100%</div>
                <p className="text-gray-600">Compliance Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
