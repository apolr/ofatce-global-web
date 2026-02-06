
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lovable-uploads/c8ae3d42-cb6b-4177-b497-e1f1ac934c2c.png" alt="OFATCE Global Limited" className="h-12 w-auto object-contain" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Two specialized business lines under one trusted brand. Delivering excellence in Oil & Gas solutions and Audiovisual & Networking services since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Our Businesses", path: "/our-businesses" },
                { name: "Oil & Gas", path: "/oil-gas" },
                { name: "Audiovisual & Networking", path: "/audiovisual-networking" },
                { name: "Projects", path: "/projects" }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Lines */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Our Business Lines</h4>
            <div className="space-y-4">
              <Link to="/oil-gas" className="block group">
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  <h5 className="text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">Oil & Gas Solutions</h5>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-4">
                  <li>Exploration & Production Support</li>
                  <li>Infrastructure & Project Management</li>
                  <li>Maintenance & Operational Safety</li>
                </ul>
              </Link>
              <Link to="/audiovisual-networking" className="block group">
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <h5 className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">Audiovisual & Networking</h5>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-4">
                  <li>Audio-Visual Systems</li>
                  <li>Computer Networking & Cabling</li>
                  <li>Video Conferencing</li>
                  <li>Security Operations Center</li>
                </ul>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  #37 Etitinwo Street, off Elekahia Road<br />
                  Port Harcourt, Rivers State, Nigeria<br />
                  <br />
                  105, Igi Olugbin Street Palmgrove, Lagos, Nigeria
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
                <div className="text-gray-300 text-sm">
                  <p>info@ofatceglobal.com</p>
                  <p>ofatceglobal@yahoo.co.uk</p>
                </div>
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
            <p className="text-gray-300 text-sm">© 2025 OFATCE Global Limited. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>19+ Years Experience</span>
              <span>Two Specialized Business Lines</span>
              <span>Nigerian Local Content</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
