
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
        { name: "Oil & Gas", path: "/oil-gas", theme: "oil-gas" },
        { name: "Audiovisual & Networking", path: "/audiovisual-networking", theme: "av-tech" }
      ]
    },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
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
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-card shadow-lg rounded-md border z-50 overflow-hidden">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className={`flex items-center px-4 py-3 text-sm font-roboto transition-colors ${
                              isActive(dropItem.path) 
                                ? dropItem.theme === "oil-gas" 
                                  ? "bg-oil-gas-light text-oil-gas-dark" 
                                  : "bg-av-tech-light text-av-tech-dark"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full mr-3 ${
                              dropItem.theme === "oil-gas" ? "bg-oil-gas" : "bg-av-tech"
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
                        : "text-foreground"
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
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md font-roboto font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems?.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      to={dropItem.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center ml-4 px-3 py-2 rounded-md font-roboto font-medium transition-colors text-sm ${
                        isActive(dropItem.path)
                          ? dropItem.theme === "oil-gas"
                            ? "text-oil-gas bg-oil-gas-light"
                            : "text-av-tech bg-av-tech-light"
                          : "text-muted-foreground hover:text-accent hover:bg-muted"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        dropItem.theme === "oil-gas" ? "bg-oil-gas" : "bg-av-tech"
                      }`}></span>
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
