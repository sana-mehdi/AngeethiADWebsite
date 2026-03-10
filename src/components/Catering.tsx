import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState<null | any>(null);

  const cateringPackages = [
    {
      name: "Package 1",
      serves: "Minimum 30 people",
      totalItems: "8 Items",
      categories: [
        {
          category: "Meat Curry",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Karahi"},
            { name: "Chicken/Veal Korma"},
            { name: "Achari Chicken"}
          ]
        },
        {
          category: "Vegetable Curry",
          note: "Select one below",
          items: [
            { name: "Channa Masala"},
            { name: "Mixed Vegetable"},
            { name: "Bagaray Baingan"}
          ]
        },
        {
          category: "Rice",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Biryani"},
            { name: "Chicken/Veal Pulao"},
            { name: "Vegetable Biryani"},
            { name: "Plain Rice"},
            { name: "Muttar Pulao"},
          ]
        },
        {
          category: "Dessert",
          note: "Select one below",
          items: [
            { name: "Kheer"},
            { name: "Gulab Jamun"},
            { name: "Zarda"},
          ]
        },
        {
          category: "Dip & Salad",
          items: [
            { name: "Salad"},
            { name: "Raita"},
            { name: "Chutney"},
          ]
        },
        {
          category: "Bread",
          items: [
            { name: "Tandoori Naan"},
          ]
        }]
    },
    {
      name: "Package 2",
      serves: "Minimum 30 people",
      totalItems: "9 Items",
      categories: [
        {
          category: "Meat Curry",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Karahi"},
            { name: "Chicken/Veal Korma"},
            { name: "Achari Chicken"}
          ]
        },
        {
          category: "Vegetable Curry",
          note: "Select one below",
          items: [
            { name: "Channa Masala"},
            { name: "Mixed Vegetable"},
            { name: "Bagaray Baingan"},
            { name: "Palak Paneer"}
          ]
        },
        {
          category: "BBQ",
          note: "Select one below",
          items: [
            { name: "Tandoori Chicken"},
            { name: "Seekh Kebab"}
          ]
        },
        {
          category: "Rice",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Biryani"},
            { name: "Chicken/Veal Pulao"},
            { name: "Vegetable Biryani"},
            { name: "Plain Rice"},
            { name: "Muttar Pulao"},
          ]
        },
        {
          category: "Dessert",
          note: "Select one below",
          items: [
            { name: "Kheer"},
            { name: "Gulab Jamun"},
            { name: "Mango Delight"},
            { name: "Rasmalai"},
            { name: "Zarda"},
          ]
        },
        {
          category: "Dip & Salad",
          items: [
            { name: "Salad"},
            { name: "Raita"},
            { name: "Chutney"},
          ]
        },
        {
          category: "Bread",
          items: [
            { name: "Tandoori Naan"},
          ]
        }]
    },
    {
      name: "Package 3",
      serves: "Minimum 40 people",
      totalItems: "11 Items",
      categories: [
        {
          category: "Appetizer",
          note: "Select one below",
          items: [
            { name: "Spring Roll"},
            { name: "Lollipop Chicken"},
            { name: "Cocktail Samosa"},
            { name: "Channa Chaat"},
            { name: "Fish Fry"}
          ]
        },
        {
          category: "Meat Curry",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Karahi"},
            { name: "Chicken/Veal Korma"},
            { name: "Achari Chicken"}
          ]
        },
        {
          category: "Vegetable Curry",
          note: "Select one below",
          items: [
            { name: "Channa Masala"},
            { name: "Mixed Vegetable"},
            { name: "Bagaray Baingan"},
            { name: "Palak Paneer"}
          ]
        },
        {
          category: "BBQ",
          note: "Select two below",
          items: [
            { name: "Tandoori Chicken"},
            { name: "Seekh Kebab"},
            { name: "Reshmi Kebab"},
            { name: "Malai Boti"},
            { name: "Chicken Tikka Boti"},
          ]
        },
        {
          category: "Rice",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Biryani"},
            { name: "Chicken/Veal Pulao"},
            { name: "Vegetable Biryani"},
            { name: "Plain Rice"},
            { name: "Muttar Pulao"},
          ]
        },
        {
          category: "Dessert",
          note: "Select one below",
          items: [
            { name: "Kheer"},
            { name: "Gulab Jamun"},
            { name: "Mango Delight"},
            { name: "Rasmalai"},
            { name: "Zarda"},
          ]
        },
        {
          category: "Dip & Salad",
          items: [
            { name: "Salad"},
            { name: "Raita"},
            { name: "Chutney"},
          ]
        },
        {
          category: "Bread",
          items: [
            { name: "Tandoori Naan"},
          ]
        }]
    },
    {
      name: "BBQ Package",
      serves: "Minimum 40 people",
      totalItems: "10 Items",
      categories: [
        {
          category: "BBQ",
          note: "Select three below",
          items: [
            { name: "Seekh Kebab"},
            { name: "Behari Kebab"},
            { name: "Chicken Tikka Boti"},
            { name: "Chicken Tikka Leg"},
            { name: "Malai Boti"}
            
          ]
        },
        {
          category: "Vegetable Curry",
          note: "Select one below",
          items: [
            { name: "Channa Masala"},
            { name: "Aloo Tarkari"}
          ]
        },
        {
          category: "Rice",
          note: "Select one below",
          items: [
            { name: "Chicken/Veal Biryani"},
            { name: "Chicken/Veal Pulao"},
            { name: "Vegetable Biryani"},
            { name: "Plain Rice"},
            { name: "Muttar Pulao"},
          ]
        },
        {
          category: "Dessert",
          note: "Select one below",
          items: [
            { name: "Kheer"},
            { name: "Gulab Jamun"},
            { name: "Zarda"},
            { name: "Mango Delight"},
            { name: "Sooji Ka Halwa"},
          ]
        },
        {
          category: "Dip & Salad",
          items: [
            { name: "Salad"},
            { name: "Raita"},
            { name: "Chutney"},
          ]
        },
        {
          category: "Bread",
          items: [
            { name: "Puri Paratha"},
          ]
        }]
    }
  ];

  return (
    <section id="catering" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-primary mb-6">
            Catering Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bring the Angeethi AD experience to your next event with our exceptional catering services
          </p>
        </div>

        {/* Packages */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cateringPackages.map((pkg, index) => (
            <Card
              key={index}
              className="relative overflow-hidden p-6 warm-shadow hover:elegant-shadow transition-all duration-500 flex flex-col cursor-pointer"
            >
              <CardContent className="p-0 flex-grow flex flex-col relative z-10">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-elegant font-bold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-2">
                    {pkg.serves}
                  </p>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div> */}

                {/* More Info Button */}
                {/* <div className="mt-4 text-center">
                  <Button
                    variant="default"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    More Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Packages */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
  {cateringPackages.map((pkg, index) => (
    <Card
    key={index}
    onClick={() => setSelectedPackage(pkg)}
    className="relative overflow-hidden p-8 rounded-2xl border-0 bg-primary hover:bg-primary/50 warm-shadow hover:elegant-shadow transition-all duration-500 flex flex-col cursor-pointer"
  >
      <CardContent className="p-0 flex-grow flex flex-col items-center justify-center text-center relative z-10 min-h-[250px]">
        <div className="mb-8">
          <h3 className="text-3xl font-elegant font-bold text-white mb-3">
            {pkg.name}
          </h3>
          <p className="text-lg text-white font-semibold">
            {pkg.serves}
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPackage(pkg);
          }}
          className="px-8 py-6 text-base"
        >
          More Info
        </Button>
      </CardContent>
    </Card>
  ))}
</div>

{/* Selected Package Modal */}
{selectedPackage && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 md:p-8 overflow-y-auto"
    onClick={() => setSelectedPackage(null)}
  >
    <div
      className="relative bg-background rounded-3xl shadow-2xl max-w-5xl w-full p-6 md:p-8 animate-in fade-in-0"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition"
        onClick={() => setSelectedPackage(null)}
      >
        <X className="w-6 h-6" />
      </button>

      <div className="text-center mb-8 pr-8">
        <h2 className="text-3xl md:text-4xl font-elegant font-bold text-primary mb-2">
          {selectedPackage.name}
        </h2>
        <p className="text-base md:text-lg text-foreground font-semibold">
          {selectedPackage.serves}
        </p>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          {selectedPackage.totalItems}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {selectedPackage.categories?.map((category: any, index: number) => (
          <div
          key={index}
          className="rounded-2xl border border-border bg-card p-5"
        >
          <div className="mb-4 text-left">
            <h3 className="text-xl md:text-2xl font-elegant font-bold text-primary">
              {category.category}
            </h3>
        
            {category.note && (
              <p className="text-sm text-muted-foreground mt-1">
                ({category.note})
              </p>
            )}
          </div>
        
          <div className="space-y-0">
            {category.items.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="py-3 border-b border-border last:border-b-0"
              >
                <p className="text-base md:text-lg font-semibold text-foreground text-left">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
)}




        {/* CTA */}
        {/* <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 hero-gradient text-white elegant-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-elegant font-bold mb-4">
                Plan Your Event
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact our catering team to discuss your event needs and create a customized menu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Call (416) 509-6234
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Catering;
