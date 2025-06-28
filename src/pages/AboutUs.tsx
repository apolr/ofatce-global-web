import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Heart, Users, Lightbulb } from "lucide-react";
const AboutUs = () => {
  const coreValues = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technologies to drive efficient solutions"
  }, {
    icon: Shield,
    title: "Integrity",
    description: "Upholding transparency and trust in every engagement"
  }, {
    icon: Users,
    title: "Customer-Centricity",
    description: "Tailoring services to meet each client's unique needs"
  }, {
    icon: Target,
    title: "Excellence",
    description: "Consistently surpassing expectations in quality and execution"
  }];
  const leadership = [{
    name: "Ochuru Enyinnaya",
    role: "Managing Director",
    superpower: "Defence & intelligence systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
  }, {
    name: "Amina Jeffery",
    role: "Chief Technology Officer",
    superpower: "AV design & automation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
  }, {
    name: "Siyeofori George",
    role: "Chief Administration Officer",
    superpower: "Finance, logistics, talent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  }];
  const timeline = [{
    year: "2006",
    event: "Company Founded",
    description: "OFATCE GLOBAL LTD established as a technology solutions provider"
  }, {
    year: "2010",
    event: "First Major Contract",
    description: "Expanded services to banking and finance sector"
  }, {
    year: "2015",
    event: "Oil & Gas Integration",
    description: "Added specialized oil & gas services to our portfolio"
  }, {
    year: "2020",
    event: "ISO Certification",
    description: "Achieved international quality management standards"
  }, {
    year: "2025",
    event: "Industry Leadership",
    description: "Leading provider of AV, networking, and oil & gas solutions"
  }];
  return <div className="pt-20 py-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              About OFATCE Global Limited
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Established in 2006 as a leading provider of technology-driven solutions in Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" alt="OFATCE team at work" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                OFATCE GLOBAL LTD, founded in 2006, has established itself as a leading provider of technology-driven solutions in Nigeria. Originally focused on audiovisual, cabling infrastructure, and computer networking, we have grown to integrate specialized oil & gas services, reflecting our commitment to evolve and meet the diverse needs of our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With nearly two decades of experience, we've evolved from a technology-focused company to become a trusted partner for Nigeria's most demanding organizations, delivering world-class solutions that drive business success across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the most sought-after provider of advanced audiovisual, networking, and oil & gas solutions in Nigeria and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To deliver exceptional technology services that enable seamless communication, secure connectivity, and superior operational performance, maintaining the highest levels of professionalism, quality, and reliability.
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
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Innovation · Integrity · Customer-Centricity · Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <img src={leader.image} alt={leader.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-poppins font-semibold text-primary mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-accent font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Super-power: {leader.superpower}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
              {timeline.map((item, index) => <div key={index} className="relative flex items-start mb-12 animate-on-scroll">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-poppins font-bold text-lg shadow-lg z-10">
                    {item.year}
                  </div>
                  <div className="ml-8 flex-1">
                    <h4 className="text-xl font-poppins font-semibold text-primary mb-2">
                      {item.event}
                    </h4>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutUs;