import { AboutSection } from "./components/AboutSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { HeroCinematic } from "./components/HeroCinematic.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProductsSection } from "./components/ProductsSection.jsx";
import { RepairsSection } from "./components/RepairsSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCinematic />
        <ProductsSection />
        <ServicesSection />
        <RepairsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
