import { Bike } from "lucide-react";
import uberEatsLogo from "@/assets/uber-eats-logo.png";
import skipLogo from "@/assets/skip-logo.png";
import doordashLogo from "@/assets/doordash-logo.png";

const DeliveryPlatforms = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
            <Bike size={32} className="text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-primary mb-6">
            Order Online for Delivery
          </h2>
        </div>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Enjoy our dishes from the comfort of your home. We're available on your favorite delivery platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Uber Eats */}
          <a
            href="https://www.ubereats.com/ca/store/angeethi-asli-dhaba/mlK1LBZ-Vmmq5GMtluCWaA?srsltid=AfmBOorvLY_27yt5QKD6iBXO3Oqhu6kRXbAYfyxCtlNlY0vJ9UKZQeEg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group animate-fade-in transition-transform duration-300 hover:scale-105"
          >
            <img
              src={uberEatsLogo}
              alt="Uber Eats logo"
              className="w-36 h-36 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold">Uber Eats</h3>
          </a>

          {/* Skip the Dishes */}
          <a
            href="https://www.skipthedishes.com/angeethi-asli-dhaba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group animate-fade-in transition-transform duration-300 hover:scale-105 [animation-delay:100ms]"
          >
            <img
              src={skipLogo}
              alt="Skip the Dishes logo"
              className="w-36 h-36 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold">Skip the Dishes</h3>
          </a>

          {/* DoorDash */}
          <a
            href="https://www.doordash.com/en-CA/store/angeethi-asli-dhaba-brampton-443223/584025/?srsltid=AfmBOopNMH_6LPsl9tYTYmNYqlQ0h4dX3EYVwwS9fchFItWdq-CIfdAl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group animate-fade-in transition-transform duration-300 hover:scale-105 [animation-delay:200ms]"
          >
            <img
              src={doordashLogo}
              alt="DoorDash logo"
              className="w-36 h-36 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold">DoorDash</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPlatforms;
