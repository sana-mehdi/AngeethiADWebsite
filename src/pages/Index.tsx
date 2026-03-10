import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import DeliveryPlatforms from "@/components/DeliveryPlatforms";
import Catering from "@/components/Catering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <div id="about" className="scroll-mt-28">
          <About />
        </div>

        {/* <Menu /> */}

        <DeliveryPlatforms />

        <div id="catering" className="scroll-mt-28">
          <Catering />
        </div>

        <div id="contact" className="scroll-mt-28">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;