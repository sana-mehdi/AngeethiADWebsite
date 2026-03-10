import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-elegant font-bold mb-4">Angeethi Asli Dhaba</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Authentic Pakistani cuisine, made with premium halal ingredients and served fresh to the GTA. Tradition, quality, and flavor in every bite.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>51 McMurchy Ave S</p>
              <p>Brampton, ON L6Y 1Y5</p>
              <p>(905) 457-8999</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Tuesday - Friday</p>
              <p className="ml-4">4:00 PM - 9:00 PM</p>
              <p>Saturday - Sunday</p>
              <p className="ml-4">11:00 AM - 9:00 PM</p>
              <p>Monday: Closed</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/AngeethiAD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/angeethiaslidhaba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="text-center text-primary-foreground/60">
          <p>&copy; 2026 Angeethi Asli Dhaba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;