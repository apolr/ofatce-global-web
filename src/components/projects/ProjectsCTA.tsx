
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProjectsCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center animate-on-scroll">
        <h2 className="text-responsive-3xl font-poppins font-bold mb-6">
          Ready to Create Your Success Story?
        </h2>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Let's discuss how we can deliver similar outcomes for your organization across our two specialized business lines
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-roboto font-medium px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </Link>
          <Link to="/our-businesses">
            <Button size="lg" variant="outline" className="border-white hover:bg-white font-roboto font-medium px-8 py-3 text-lg text-blue-950">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
