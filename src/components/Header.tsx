import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/#about", isRoute: false },
    { name: "Menu", href: "/menu", isRoute: true },
    { name: "Catering", href: "/#catering", isRoute: false },
    { name: "Contact", href: "/#contact", isRoute: false },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/65 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Angeethi Asli Dhaba"
              className="max-h-56 w-auto object-contain mx-auto"
            />
          </Link>

          <div className="hidden md:block">
            <div className="-ml-20 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="https://www.ubereats.com/ca/store/angeethi-asli-dhaba/mlK1LBZ-Vmmq5GMtluCWaA?srsltid=AfmBOorY2VxsRMSw5arHaccyHf96pu6IvzaVaKsBWuJ0ieXT6wfcdeio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Order Now
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 warm-shadow">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2">
                <a
                  href="https://www.ubereats.com/ca/store/angeethi-asli-dhaba/mlK1LBZ-Vmmq5GMtluCWaA?srsltid=AfmBOorY2VxsRMSw5arHaccyHf96pu6IvzaVaKsBWuJ0ieXT6wfcdeio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" className="w-full">
                    Order Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;