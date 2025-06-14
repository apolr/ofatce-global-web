
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      gdprConsent: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Privacy Consent Required",
        description: "Please accept our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would integrate with SendGrid API
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        gdprConsent: false
      });
      
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to discuss your project? Get in touch with our engineering experts and discover how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-roboto font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-sm font-roboto font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-roboto font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-roboto font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="gdpr"
                        checked={formData.gdprConsent}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <Label htmlFor="gdpr" className="text-sm text-gray-600 leading-relaxed">
                        I consent to the processing of my personal data in accordance with the privacy policy. 
                        Ofatce Global Limited will use this information to respond to my inquiry and may contact me 
                        about related services. *
                      </Label>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-roboto font-medium py-3"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="animate-on-scroll">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-poppins font-bold text-primary mb-6">
                      Get in Touch
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-roboto font-medium text-gray-800 mb-1">Office Address</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            #60 Slaughter Rd., Off Peter-Odili Rd.,<br />
                            Port Harcourt, Rivers State, Nigeria
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-roboto font-medium text-gray-800 mb-1">Phone Numbers</h4>
                          <div className="text-gray-600 text-sm space-y-1">
                            <p>+234 802 863 6198</p>
                            <p>+234 805 349 4883</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Mail className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-roboto font-medium text-gray-800 mb-1">Email Address</h4>
                          <p className="text-gray-600 text-sm">info@ofatceglobal.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Clock className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-roboto font-medium text-gray-800 mb-1">Office Hours</h4>
                          <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="animate-on-scroll">
                <Card className="bg-white shadow-lg border-0 overflow-hidden">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4!2d7.0!3d4.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnMDAuMCJOIDfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ofatce Global Limited Office Location"
                    ></iframe>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600 text-center">
                      Click on the map to get directions to our office
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-2xl font-poppins font-bold mb-4">
            24/7 Emergency Support
          </h2>
          <p className="text-lg mb-6 text-gray-100">
            For urgent technical support or emergency situations, our team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348028636198" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-roboto font-medium">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </Button>
            </a>
            <a href="https://wa.me/2348028636198" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent font-roboto font-medium">
                WhatsApp Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
