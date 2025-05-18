import ServiceSection from "../components/ServiceSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialSection";
import FeatureSection from "../components/FeatureSection";
import FactSection from "../components/FactSection";
import PricingSection from "../components/PriceSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FactSection />
        <ServiceSection/>
        <FeatureSection />
        <PricingSection />  
        <TeamSection />
        <TestimonialsSection />

      </main>
      <Footer />
    </div>
  );
};

export default Home;
