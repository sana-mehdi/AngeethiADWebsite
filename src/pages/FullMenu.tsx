import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bbq from "@/assets/bbq.jpg";
import curry from "@/assets/menu3.png";
import rice from "@/assets/menu2.jpg";
import halwapuri from "@/assets/halwa-puri.jpg";
import combo from "@/assets/combo.png"

const FullMenu = () => {
  const menuCategories = [
    {
      category: "All Day Breakfast",
      image: halwapuri,
      alt: "breakfast",
      dishes: [
        {
          name: "Halwa Puri",
          description: "Two Puri with Channa Masala, Aloo Tarkari, Sooji Ka Halwa, and pickle.",
          price: "$7.99"
        },
        {
          name: "Anda Paratha & Chai",
          description: "Egg omelette with crispy paratha and a cup of chai.",
          price: "$7.99"
        },
        {
          name: "Chai Paratha",
          description: "Crispy paratha with a cup of chai.",
          price: "$5.99"
        }
      ]
    },
    {
      category: "BBQ",
      image: bbq,
      alt: "bbq",
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
          name: "Beef Seekh Kabab",
          description: "Ground beef marinated in spices and cooked on the charcoal grill.",
          price: "$5.49"
        },
        {
          name: "Mutton Seekh Kabab",
          description: "Ground mutton marinated in spices and cooked on the charcoal grill.",
          price: "$6.49"
        },
        {
          name: "Chicken Tikkah Boti",
          description: "Tender boneless chicken boti pieces marinated in spices and cooked on the charcoal grill.",
          price: "$12.99"
        },
        {
          name: "Malai Boti",
          description: "Creamy chicken boneless marinated with spices and cooked on the charcoal grill.",
          price: "$11.99"
        },
        {
          name: "Chicken Shami Kebab",
          description: "Ground chicken and lentil pattie mixed with traditional spices and pan fried.",
          price: "$3.99"
        },
        {
          name: "Beef Shami Kebab",
          description: "Ground beef and lentil pattie mixed with traditional spices and pan fried.",
          price: "$3.99"
        },
        {
          name: "Chicken Tandoori Leg",
          description: "1/4 chicken tandoori leg, marinated in chicken tikka masala cooked on the grill to perfection",
          price: "$6.99"
        },
        {
          name: "Lollipop Chicken",
          description: "Chicken wings marinated in spices and deep fried until crispy",
          price: "$9.99"
        },
        {
          name: "Whole Chicken Chargha",
          description: "Whole chicken marinated in Angeethi's special tikkah masala cooked on the grill with fries.",
          price: "$27.99"
        },
        {
          name: "Fish & Chips",
          description: "Crispy battered fish served with golden fries.",
          price: "$9.99"
        }
      ]
    },
    {
      category: "Wraps & Combos",
      image: combo,
      alt: "combo",
      dishes: [
        {
          name: "Behari Kebab Wrap",
          description: "Behari kabab with salad and sauces wrapped in naan, puri paratha or tawa paratha.",
          price: "$10.99"
        },
        {
          name: "Chicken Boti Wrap",
          description: "Chicken boti with salad and sauces wrapped in naan, puri paratha or tawa paratha.",
          price: "$8.99"
        },
        {
          name: "Seekh Kebab Wrap",
          description: "Chicken or Beef Seekh Kebab with salad and sauces wrapped in naan, puri paratha or tawa paratha.",
          price: "$8.99"
        },
        {
          name: "Behari Kebab Combo",
          description: "Behari Kebab with rice and salad.",
          price: "$17.99"
        },
        {
          name: "Chicken Tandoori Leg Combo",
          description: "1/4 Chicken Tandoori Leg with rice and salad.",
          price: "$12.99"
        },
        {
          name: "Chicken Seekh Kebab Combo",
          description: "2 piece Chicken Seekh Kebab with rice and salad.",
          price: "$14.99"
        },
        {
          name: "Beef Seekh Kebab Combo",
          description: "2 piece Beef Seekh Kebab with rice and salad.",
          price: "$14.99"
        },
        {
          name: "Chicken Tikka Boti Combo",
          description: "Chicken Tikka Boti with rice and salad.",
          price: "$14.99"
        }
      ]
    },
    {
      category: "Curry",
      image: curry,
      alt: "curry",
      dishes: [
        {
          name: "Butter Chicken",
          description: "Tender pieces of boneless chicken marinated with garlic, fenugreek leaves, coriander, ground spices, cooked in a mild cream-based sauce.",
          price: "$9.99"
        },
        {
          name: "Chicken Korma",
          description: "Chicken pieces cooked ginger, garlic, onion gravy, and blend ground spices.",
          price: "$9.99"
        },
        {
          name: "Mutton Korma",
          description: "Mutton pieces cooked ginger, garlic, onion gravy, and blend ground spices.",
          price: "$11.99"
        },
        {
          name: "Veal Korma",
          description: "Veal pieces cooked ginger, garlic, onion gravy, and blend ground spices.",
          price: "$10.99"
        },
        {
          name: "Chicken Karahi",
          description: "Chicken pieces cooked with tomatoes, green chili, ginger, and a blend of coarsely ground spices.",
          price: "$9.99"
        },
        {
          name: "Mutton Karahi",
          description: "Mutton pieces cooked with tomatoes, green chili, ginger, and a blend of coarsely ground spices.",
          price: "$11.99"
        },
        {
          name: "Veal Karahi",
          description: "Veal pieces cooked with tomatoes, green chili, ginger, and a blend of coarsely ground spices.",
          price: "$10.99"
        },
        {
          name: "Beef Nihari",
          description: "Chunks of beef simmered with coarsely ground spices and aromatic herbs, garnished with fresh ginger coriander and green chili.",
          price: "$10.99"
        },
        {
          name: "Mutton Nihari",
          description: "Chunks of mutton simmered with coarsely ground spices and aromatic herbs, garnished with fresh ginger coriander and green chili.",
          price: "$11.99"
        },
        {
          name: "Beef Paya",
          description: "Beef trotter, cooked in garlic, and traditional spices.",
          price: "$10.99"
        },
        {
          name: "Mutton Paya",
          description: "Mutton trotter, cooked in garlic, and traditional spices.",
          price: "$11.99"
        },
        {
          name: "Beef Haleem",
          description: "Mixed lentils cooked with beef and spices. Garnish with fried onion and green masala.",
          price: "$9.99"
        },
        {
          name: "Chicken Haleem",
          description: "Mixed lentils cooked with chicken and spices. Garnish with fried onion and green masala.",
          price: "$9.99"
        }
      ]
    },
    {
      category: "Veg Curry",
      dishes: [
        {
          name: "Palak Paneer",
          description: "Paneer mixed with creamy spinach, with spices.",
          price: "$7.99"
        },
        {
          name: "Shahi Paneer",
          description: "Paneer cooked in an aromatic cream-based tomato sauce.",
          price: "$7.99"
        },
        {
          name: "Daal Makhani",
          description: "Whole black lentils, cooked with cream and butter.",
          price: "$7.99"
        },
        {
          name: "Maash Ki Daal",
          description: "White lentils cooked with traditional spices and herbs.",
          price: "$7.99"
        },
        {
          name: "Channa Masala",
          description: "Chickpeas cooked in spices, Lahori style.",
          price: "$5.99"
        },
        {
          name: "Aloo Tarkari",
          description: "Potatoes cooked with the exotic taste of achari masala.",
          price: "$5.99"
        },
        {
          name: "Channa Daal",
          description: "Chickpea lentils, fried in tomato sauce.",
          price: "$6.99"
        },
        {
          name: "Mixed Vegetables",
          description: "Variety of vegetables mixed (cauliflower, peas, potato and carrots) in tomato and onion based curry.",
          price: "$8.99"
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
          description: "Chicken steamed in layers of aromatic rice.",
          price: "$7.49"
        },
        {
          name: "Veal Biryani",
          description: "Veal steamed in layers of aromatic rice.",
          price: "$10.99"
        },
        {
          name: "Mutton Biryani",
          description: "Mutton pieces steamed in layers of aromatic rice.",
          price: "$11.99"
        },
        {
          name: "Veg Biryani",
          description: "Vegetables steamed in layers of aromatic rice.",
          price: "$8.99"
        }
      ]
    },
    {
      category: "Bread",
      dishes: [
        {
          name: "Plain Naan",
          description: "Fresh and warm tandoor baked naan.",
          price: "$2.25"
        },
        {
          name: "Butter Naan",
          description: "Fresh and warm tandoor baked naan with butter spread.",
          price: "$2.49"
        },
        {
          name: "Garlic Naan",
          description: "Fresh and warm tandoor baked naan with garlic spread.",
          price: "$2.99"
        },
        {
          name: "Sesame Naan",
          description: "Fresh and warm tandoor baked naan with sesame seeds.",
          price: "$2.75"
        },
        {
          name: "Tawa Paratha",
          description: "Bread cooked on Tawa in oil. Crispy parantha made on tawa with ghee and oil.",
          price: "$2.99"
        },
        {
          name: "Puri Paratha",
          description: "Bread made of wheat flour fried in oil. Traditional karachi style puri parantha.",
          price: "$5.49"
        }
      ]
    },
    {
      category: "Dessert",
      dishes: [
        {
          name: "Khoya Kheer",
          description: "White rice pudding with cream.",
          price: "$5.99"
        },
        {
          name: "Gulab Jamun",
          description: "Soft fried milk dumplings served in sweet syrup.",
          price: "$5.99"
        },
        {
          name: "Sooji Ka Halwa",
          description: "Semolina cooked in sugar water.",
          price: "$5.99"
        },
        {
          name: "Zarda",
          description: "Multi colour Sella rice cook with sugar syrup garnish with mawa and raisin.",
          price: "$5.99"
        }
      ]
    },
    {
      category: "Drinks",
      dishes: [
        {
          name: "Pop",
          description: "Chilled carbonated soft drink.",
          price: "$1.99"
        },
        {
          name: "Kashmiri Chai",
          description: "Traditional pink tea.",
          price: "$2.75"
        },
        {
          name: "Karak Chai",
          description: "Traditional tea.",
          price: "$2.50"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-elegant font-bold text-primary mb-6">
              Our Complete Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our full selection of chef-crafted dishes, each prepared with the finest ingredients and available for takeout
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-elegant font-bold text-primary mb-8 text-center">
                  {category.category}
                </h2>

                {category.image && (
                  <Card className="overflow-hidden elegant-shadow mb-8 max-w-2xl mx-auto">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {category.dishes.map((dish, dishIndex) => (
                    <Card key={dishIndex} className="p-6 warm-shadow hover:elegant-shadow transition-smooth">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {dish.name}
                          </h3>
                          <span className="text-xl font-bold text-primary ml-4 flex-shrink-0">
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
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 hero-gradient text-white elegant-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-elegant font-bold mb-4">
                  Ready to Order?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Call us or order online
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
      </main>
      <Footer />
    </div>
  );
};

export default FullMenu;
