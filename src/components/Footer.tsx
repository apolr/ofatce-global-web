import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/83ac60f5-dae5-4126-90cc-4e8bc6dc14e9.png" 
              alt="Ofatce Global Limited" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Modern solutions for Audiovisual, Networking & Oil-and-Gas industries. 
              Delivering end-to-end engineering services since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Quality Policy", path: "/quality-policy" },
                { name: "Certification", path: "/certification" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Audiovisual Integration</li>
              <li>Enterprise Networking</li>
              <li>Fabrication & EPC</li>
              <li>Project Management</li>
              <li>Procurement & Logistics</li>
              <li>Industrial Painting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  #60 Slaughter Rd., Off Peter-Odili Rd.,<br />
                  Port Harcourt, Rivers State, Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+234 802 863 6198</p>
                  <p>+234 805 349 4883</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@ofatceglobal.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Ofatce Global Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>ISO 9001 Certified</span>
              <span>Nigerian Local Content</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
