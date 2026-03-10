import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["51 Mcmurchy Ave S Unit 2", "Brampton, ON L6Y 1Y5"]
    },
    {
      icon: Phone,
      title: "Order Now",
      details: ["(905) 457-8999", "Call to place your order", "Online ordering available"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon: Closed", "Tues - Fri: 4:00 PM - 9:00 PM", "Sat - Sun: 11:00 AM - 9:00 PM"]
    },
    {
      icon: Mail,
      title: "Contact",
      details: ["Call (905) 457-8999", "Call (416) 509-6234","Follow us @angeethiaslidhaba"]
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-primary mb-6">
            Order & Pickup
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience restaurant-quality cuisine from the comfort of your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center p-6 warm-shadow hover:elegant-shadow transition-smooth">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reservation CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 hero-gradient text-white elegant-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-elegant font-bold mb-4">
                Ready to Order?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Place your order today and discover why Angeethi AD is the destination for Pakistani cuisine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  Call (905) 457-8999
                </Button>
                <a
            href="https://www.ubereats.com/ca/store/angeethi-asli-dhaba/mlK1LBZ-Vmmq5GMtluCWaA?srsltid=AfmBOorY2VxsRMSw5arHaccyHf96pu6IvzaVaKsBWuJ0ieXT6wfcdeio"
            target="_blank"
            rel="noopener noreferrer"
          >
                <Button variant="secondary" size="lg">
                  Order Online
                </Button>
              </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;