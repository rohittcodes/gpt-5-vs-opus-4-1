import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DealsSection from "@/components/sections/DealsSection";
import CategorySection from "@/components/sections/CategorySection";
import RequestQuote from "@/components/sections/RequestQuote";
import RecommendedItems from "@/components/sections/RecommendedItems";
import ServicesSection from "@/components/sections/ServicesSection";
import SuppliersSection from "@/components/sections/SuppliersSection";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  const homeOutdoorItems = [
    { name: "Soft chairs", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Sofa & chair", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Kitchen dishes", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Smart watches", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Kitchen mixer", price: "USD 100", image: "https://placehold.co/120x120" },
    { name: "Blenders", price: "USD 39", image: "https://placehold.co/120x120" },
    { name: "Home appliance", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Coffee maker", price: "USD 10", image: "https://placehold.co/120x120" },
  ];

  const electronicsItems = [
    { name: "Smart watches", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Cameras", price: "USD 89", image: "https://placehold.co/120x120" },
    { name: "Headphones", price: "USD 10", image: "https://placehold.co/120x120" },
    { name: "Smart watches", price: "USD 90", image: "https://placehold.co/120x120" },
    { name: "Gaming set", price: "USD 35", image: "https://placehold.co/120x120" },
    { name: "Laptop & PC", price: "USD 340", image: "https://placehold.co/120x120" },
    { name: "Smartphones", price: "USD 19", image: "https://placehold.co/120x120" },
    { name: "Electric kattle", price: "USD 240", image: "https://placehold.co/120x120" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <DealsSection />
        <CategorySection
          title="Home and outdoor"
          bgColor="bg-gradient-to-br from-orange-100 to-orange-50"
          items={homeOutdoorItems}
          ctaLink="/category/home-outdoor"
        />
        <CategorySection
          title="Consumer electronics and gadgets"
          bgColor="bg-gradient-to-br from-gray-800 to-gray-900"
          items={electronicsItems}
          ctaLink="/category/electronics"
        />
        <RequestQuote />
        <RecommendedItems />
        <ServicesSection />
        <SuppliersSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
