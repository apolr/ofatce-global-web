
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Globe, Lightbulb, MessageSquare, CheckCircle } from "lucide-react";

const WhyOfatce = () => {
  const differentiators = [
    {
      icon: CheckCircle,
      title: "Single-Throat Accountability",
      description: "Design, deploy, maintain—all from one trusted partner. No finger-pointing, no gaps in service.",
      benefit: "Streamlined project management and clear responsibility"
    },
    {
      icon: Shield,
      title: "Vendor-Agnostic Solutions",
      description: "Cisco, Zoom, Poly, Logitech or open source—we choose what fits your needs, not our margins.",
      benefit: "Best-of-breed technology tailored to your requirements"
    },
    {
      icon: Globe,
      title: "Local Agility, Global Standards",
      description: "Nigerian boots-on-ground with ISO processes and international best practices.",
      benefit: "Responsive local service with world-class quality"
    },
    {
      icon: Lightbulb,
      title: "Cross-Sector Insight",
      description: "We transfer innovations between industries—bringing energy sector reliability to banking, defense precision to hospitality.",
      benefit: "Cutting-edge solutions from diverse industry experience"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Named executive sponsor on every project. You know exactly who to call, day or night.",
      benefit: "Direct access to decision-makers and accountability"
    }
  ];

  const comparisonPoints = [
    {
      category: "Project Approach",
      ofatce: "End-to-end ownership from design to maintenance",
      others: "Fragmented vendors requiring coordination"
    },
    {
      category: "Technology Selection",
      ofatce: "Best-fit solutions regardless of vendor relationships",
      others: "Limited to preferred vendor partnerships"
    },
    {
      category: "Quality Standards",
      ofatce: "ISO-aligned processes with international standards",
      others: "Varying quality levels and processes"
    },
    {
      category: "Local Presence",
      ofatce: "18+ years in Nigeria with deep market knowledge",
      others: "International firms with limited local understanding"
    },
    {
      category: "Cross-Industry Experience",
      ofatce: "Banking, energy, defense, retail, telecom expertise",
      others: "Single-sector specialization"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Why Choose OFATCE?
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              The differentiators that make us the preferred technology partner for Nigeria's most demanding organizations
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five key reasons why procurement and technical teams choose OFATCE over the competition
            </p>
          </div>

          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="lg:col-span-10">
                      <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <p className="text-green-800 font-medium">
                          <strong>Your benefit:</strong> {item.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              OFATCE vs. Traditional Vendors
            </h2>
            <p className="text-lg text-gray-600">
              See the difference in approach and outcomes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-accent text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Comparison Point</th>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">OFATCE Approach</th>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Traditional Vendors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonPoints.map((point, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-roboto font-semibold text-primary">
                            {point.category}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{point.ofatce}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {point.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
              Built on Trust & Performance
            </h2>
            <p className="text-lg text-gray-600">
              The metrics that matter to procurement and technical teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "18+", label: "Years Established", description: "Proven track record" },
              { number: "250+", label: "Projects Completed", description: "Extensive experience" },
              { number: "99.99%", label: "System Uptime", description: "Reliable performance" },
              { number: "100%", label: "Client Retention", description: "Long-term partnerships" }
            ].map((metric, index) => (
              <Card key={index} className="card-hover animate-on-scroll bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-poppins font-bold text-accent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-lg font-roboto font-semibold text-primary mb-1">
                    {metric.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
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
            Experience the OFATCE Difference
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join Nigeria's most demanding organizations who trust OFATCE for their critical technology infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                Book Your Discovery Call
              </button>
            </a>
            <a href="/portfolio" className="inline-block">
              <button className="border border-white text-white hover:bg-white hover:text-primary font-roboto font-medium px-8 py-3 text-lg rounded-md transition-colors">
                View Success Stories
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyOfatce;
