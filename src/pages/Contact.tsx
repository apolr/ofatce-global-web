import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
const Contact = () => {
  return <div className="pt-20 py-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-responsive-4xl font-poppins font-bold mb-6">
              Let's Partner to Achieve Your Goals
            </h1>
            <p className="text-xl text-white leading-relaxed">
              We're eager to help bring your audiovisual, networking, or oil & gas projects to life. Contact us to discuss your specific needs and explore tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Ready to discuss your next project? Our team is here to help you with both audiovisual & networking solutions and oil & gas services. Contact us through any of the methods below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-roboto font-semibold text-gray-800 mb-2">Office Address</h3>
                        <p className="text-gray-700 leading-relaxed">
                          #37 Etitinwo Street, off Elekahia Road<br />
                          Port Harcourt, Rivers State, Nigeria<br /><br />
                          
                          105, Igi Olugbin Street Palmgrove, Lagos, Nigeria<br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-roboto font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                        <div className="text-gray-700 space-y-1">
                          <p>
                            <a href="tel:+2348028636198" className="hover:text-accent transition-colors">
                              +234 802 863 6198
                            </a>
                          </p>
                          <p>
                            <a href="tel:+2348053494883" className="hover:text-accent transition-colors">
                              +234 805 349 4883
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-roboto font-semibold text-gray-800 mb-2">Email Addresses</h3>
                        <div className="text-gray-700 space-y-1">
                          <p>
                            <a href="mailto:info@ofatceglobal.com" className="hover:text-accent transition-colors">
                              info@ofatceglobal.com
                            </a>
                          </p>
                          <p>
                            <a href="mailto:ofatceglobal@yahoo.co.uk" className="hover:text-accent transition-colors">
                              ofatceglobal@yahoo.co.uk
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Lines Contact */}
              <div className="animate-on-scroll">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                  Business Line Inquiries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4">
                      <h4 className="font-roboto font-semibold text-orange-800 mb-2">
                        Oil & Gas Solutions
                      </h4>
                      <p className="text-sm text-orange-700">
                        For oil & gas services and infrastructure projects
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-roboto font-semibold text-blue-800 mb-2">
                        Audiovisual & Networking
                      </h4>
                      <p className="text-sm text-blue-700">
                        For AV systems, networking, and technology solutions
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="animate-on-scroll">
                <Card className="bg-white shadow-lg border-0 overflow-hidden">
                  <div className="h-80 bg-gray-200 relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4!2d7.0!3d4.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnMDAuMCJOIDfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890" width="100%" height="100%" style={{
                    border: 0
                  }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="OFATCE Global Limited Office Location"></iframe>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-700 text-center">
                      Click on the map to get directions to our office
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="animate-on-scroll">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-roboto font-semibold text-gray-800 mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <a href="tel:+2348028636198" className="block">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-white font-roboto">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                      <a href="mailto:info@ofatceglobal.com" className="block">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-roboto">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </Button>
                      </a>
                      <a href="https://wa.me/2348028636198" target="_blank" rel="noopener noreferrer" className="block">
                        <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-roboto">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you need oil & gas solutions or audiovisual & networking services, our experienced team is ready to help you achieve your goals. Contact us today to discuss your project requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-poppins font-semibold text-primary mb-3">
                    Oil & Gas Projects
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Exploration, production, infrastructure, and specialized industry services
                  </p>
                  <a href="/oil-gas">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white font-roboto">
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-poppins font-semibold text-primary mb-3">
                    Audiovisual & Networking Projects
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Technology solutions, AV systems, enterprise networking, and automation
                  </p>
                  <a href="/audiovisual-networking">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-roboto">
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;