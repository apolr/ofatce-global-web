
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { 
      name: "Our Businesses", 
      path: "/our-businesses",
      hasDropdown: true,
      dropdownItems: [
        { name: "Audiovisual & Networking", path: "/audiovisual-networking" },
        { name: "Oil & Gas", path: "/oil-gas" }
      ]
    },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/83ac60f5-dae5-4126-90cc-4e8bc6dc14e9.png" 
              alt="OFATCE Global Limited" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`font-roboto font-medium transition-colors hover:text-accent text-sm flex items-center ${
                        isActive(item.path) || item.dropdownItems?.some(dropItem => isActive(dropItem.path))
                          ? "text-accent border-b-2 border-accent pb-1"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg rounded-md border z-50 overflow-hidden">
                        {item.dropdownItems?.map((dropItem, idx) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className={`flex items-center px-4 py-3 text-sm font-roboto transition-colors ${
                              isActive(dropItem.path) 
                                ? idx === 0 ? "bg-orange-50 text-orange-700" : "bg-blue-50 text-blue-700"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full mr-3 ${
                              idx === 0 ? "bg-orange-500" : "bg-blue-500"
                            }`}></span>
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-roboto font-medium transition-colors hover:text-accent text-sm ${
                      isActive(item.path)
                        ? "text-accent border-b-2 border-accent pb-1"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-roboto font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-accent bg-accent/10"
                        : "text-gray-700 hover:text-accent hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems?.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      to={dropItem.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`ml-4 px-3 py-2 rounded-md font-roboto font-medium transition-colors text-sm ${
                        isActive(dropItem.path)
                          ? "text-accent bg-accent/10"
                          : "text-gray-600 hover:text-accent hover:bg-gray-50"
                      }`}
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
