
import { Card, CardContent } from "@/components/ui/card";
import { Building, Zap, Radio, Shield, ShoppingBag } from "lucide-react";

const Industries = () => {
  const sectors = [
    {
      icon: Building,
      name: "Banking & FinTech",
      example: "Tier-3 data-centre network backbone",
      importance: "Meets penetration-test standards",
      description: "Mission-critical network infrastructure for financial institutions requiring the highest security and reliability standards."
    },
    {
      icon: Zap,
      name: "Energy & Utilities",
      example: "Hazard-zone AV rigs offshore",
      importance: "Intrinsically safe, ATEX compliant",
      description: "Specialized solutions for hazardous environments with explosion-proof equipment and safety certifications."
    },
    {
      icon: Radio,
      name: "Telecoms",
      example: "Carrier-grade fibre backbone",
      importance: "Five-nines availability",
      description: "Ultra-reliable network infrastructure supporting telecommunications providers with 99.999% uptime requirements."
    },
    {
      icon: Shield,
      name: "Government & Defence",
      example: "Secure war-room conferencing",
      importance: "End-to-end encryption, air-gapped fail-over",
      description: "High-security communications systems for sensitive government and defence applications with classified information handling."
    },
    {
      icon: ShoppingBag,
      name: "Retail & Hospitality",
      example: "Digital signage & ambient audio",
      importance: "Increases foot traffic & dwell time",
      description: "Customer experience enhancement through strategic audiovisual deployment that drives business metrics."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Industry Expertise & Vertical Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Specialized knowledge and proven success across critical sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep vertical expertise with social proof and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <sector.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                        {sector.name}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="font-roboto font-semibold text-accent mb-1">Example Win:</h4>
                          <p className="text-gray-600">{sector.example}</p>
                        </div>
                        <div>
                          <h4 className="font-roboto font-semibold text-green-600 mb-1">Why It Matters:</h4>
                          <p className="text-gray-600">{sector.importance}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Cross-Sector Impact
            </h2>
            <p className="text-lg text-gray-600">
              Transferring innovations between industries for maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5", label: "Key Sectors", description: "Deep vertical expertise" },
              { number: "99.99%", label: "Uptime", description: "Across all sectors" },
              { number: "18+", label: "Years", description: "Industry experience" },
              { number: "100%", label: "Compliance", description: "Regulatory standards" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-roboto font-semibold text-primary mb-1">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
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
            Your Industry, Our Expertise
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover how our vertical knowledge can drive outcomes for your sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Discuss Your Sector
              </button>
            </a>
            <a href="/portfolio" className="inline-block">
              <button className="border border-white text-white hover:bg-white hover:text-primary font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                View Case Studies
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
