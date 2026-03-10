import { Card } from "@/components/ui/card";
import hero2 from "@/assets/hero2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-primary mb-6">
            We pride ourselves on making real food from the best ingredients.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
              We offer a wide range of halal dishes, blending traditional Pakistani cuisine with our own personal touch. We are oriented to providing the best quality ingredients in our dishes to the Greater Toronto Area.
              </p>
              <p>
              We are proud to provide takeout and catering services for all occasions both indoor or outdoor as well as LIVE BBQ events. We guarantee it would be a great memory in your guest’s hearts.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden elegant-shadow">
              <img
                src={hero2}
                alt="Elegant restaurant interior with sophisticated burgundy and gold design"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10", label: "Years of Excellence" },
            { number: "50+", label: "Signature Dishes" },
            { number: "100%", label: "Halal" },
            { number: "1000+", label: "Orders Monthly" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-elegant font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;