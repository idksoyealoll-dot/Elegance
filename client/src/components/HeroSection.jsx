import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/minimal_fashion_mode_ff455698.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
          Timeless Elegance
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
          Curated collection for the modern wardrobe
        </p>
        <Button
          size="lg"
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 h-12 px-8"
          data-testid="button-shop-collection"
          onClick={() => console.log("Shop Collection clicked")}
        >
          SHOP COLLECTION
        </Button>
      </motion.div>
    </section>
  );
}
