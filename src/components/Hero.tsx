import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroDish from "@/assets/hero1.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDish}
          alt="Gourmet dish showcasing fine dining excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant font-bold text-white mb-6 leading-tight">
          Angeethi
          <span className="block text-secondary"> Asli</span>
          Dhaba
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the heart of Pakistani cooking
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
            href="https://www.ubereats.com/ca/store/angeethi-asli-dhaba/mlK1LBZ-Vmmq5GMtluCWaA?srsltid=AfmBOorY2VxsRMSw5arHaccyHf96pu6IvzaVaKsBWuJ0ieXT6wfcdeio"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Order Takeout
          </Button>
        </a>
        <Link
          key={"View Menu"}
          to={"/menu"}
          className="text-foreground hover:text-primary transition-smooth font-medium"
        >
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
            View Menu
          </Button>
        </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;