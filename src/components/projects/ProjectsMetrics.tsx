
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, MapPin } from "lucide-react";

const ProjectsMetrics = () => {
  const metrics = [
    { icon: TrendingUp, metric: "4×", label: "Average Performance Improvement" },
    { icon: Users, metric: "60%", label: "Increase in Operational Efficiency" },
    { icon: Zap, metric: "99.9%", label: "System Reliability" },
    { icon: MapPin, metric: "100%", label: "On-Time Delivery Rate" }
  ];

  return (
    <section className="py-20 bg-light-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-responsive-3xl font-poppins font-bold text-primary mb-4">
            Measurable Outcomes Across Both Business Lines
          </h2>
          <p className="text-lg text-gray-600">
            Real business impact and measurable results across all our project deliveries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((stat, index) => (
            <Card key={index} className="animate-on-scroll bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-poppins font-bold text-accent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMetrics;
