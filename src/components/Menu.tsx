import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bbq from "@/assets/bbq.jpg";
import curry from "@/assets/menu3.png";
import rice from "@/assets/menu2.jpg";
import { Link } from "lucide-react";
import { Link as RouterLink} from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      category: "BBQ",
      image: bbq,
      alt: "barbeque",
      dishes: [
        {
          name: "Behari Kabab",
          description: "Strips of beef marinated in spices and cooked on the charcoal grill",
          price: "$16.99"
        },
        {
          name: "Chicken Seekh Kabab",
          description: "Ground chicken marinated in spices and cooked on the charcoal grill.",
          price: "$5.49"
        },
        {
          name: "Chicken Tikkah Boti",
          description: "Tender boneless chicken boti pieces marinated in spices and cooked on the charcoal grill. Varieties include Malai, Tikkah, and Behari.",
          price: "$12.99"
        }
      ]
    },
    {
      category: "Curry",
      image: curry,
      alt: "Curry",
      dishes: [
        {
          name: "Butter Chicken",
          description: "Tender pieces of boneless chicken marinated with garlic, fenugreek leaves, coriander, ground spices, cooked in a mild cream-based sauce.",
          price: "$11.70"
        },
        {
          name: "Nihari",
          description: "Chunks of beef simmered with coarsely ground spices and aromatic herbs, garnished with fresh ginger coriander and green chili.",
          price: "$13"
        },
        {
          name: "Mutton Paya",
          description: "Goat trotter, cooked in garlic, and traditional spices.",
          price: "$13.49"
        }
      ]
    },
    {
      category: "Rice",
      image: rice,
      alt: "rice",
      dishes: [
        {
          name: "Chicken Biryani",
          description: "Chicken steamed cooked in layers of aromatic rice.",
          price: "$7.49"
        },
        {
          name: "Veal Biryani",
          description: "Veal steamed cooked in layers of aromatic rice. Basmati rice mixed in with beef pieces and masala.",
          price: "$10.49"
        },
        {
          name: "Mutton Biryani",
          description: "Mutton pieces steamed cooked in layers of aromatic rice.",
          price: "$10.99"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-primary mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the best of Pakistani cuisine with Angeethi Asli Dhaba.
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((category, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                <Card className="overflow-hidden elegant-shadow">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <h3 className="text-3xl font-elegant font-bold text-primary mb-8">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <Card key={dishIndex} className="p-6 warm-shadow hover:elegant-shadow transition-smooth">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-foreground">
                            {dish.name}
                          </h4>
                          <span className="text-xl font-bold text-secondary">
                            {dish.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {dish.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <RouterLink
          key={"View Full Menu"}
          to={"/menu"}
          className="text-foreground hover:text-primary transition-smooth font-medium">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4">
              View Full Menu
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

export default Menu;