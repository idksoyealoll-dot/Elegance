import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

import product1 from "@assets/stock_images/elegant_minimal_dres_318cf44a.jpg";
import product2 from "@assets/stock_images/elegant_minimal_dres_25890139.jpg";
import product3 from "@assets/stock_images/elegant_minimal_dres_bacb9e87.jpg";
import product4 from "@assets/stock_images/elegant_minimal_dres_4e6c8bce.jpg";
import product5 from "@assets/stock_images/elegant_minimal_dres_f9db2713.jpg";
import product6 from "@assets/stock_images/elegant_minimal_dres_aa11afc5.jpg";

export default function Shop() {
  const products = [
    { id: 1, name: "Minimal Dress", price: "120", image: product1 },
    { id: 2, name: "Classic Coat", price: "280", image: product2 },
    { id: 3, name: "Essential Shirt", price: "95", image: product3 },
    { id: 4, name: "Tailored Blazer", price: "240", image: product4 },
    { id: 5, name: "Silk Blouse", price: "150", image: product5 },
    { id: 6, name: "Linen Pants", price: "110", image: product6 },
    { id: 7, name: "Cashmere Sweater", price: "180", image: product1 },
    { id: 8, name: "Wool Trousers", price: "160", image: product2 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
              New Collection
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore our latest pieces, designed with attention to detail and crafted for longevity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
