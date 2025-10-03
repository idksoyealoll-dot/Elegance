import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import aboutImg1 from "@assets/stock_images/modern_clothing_bout_34860ce5.jpg";
import aboutImg2 from "@assets/stock_images/fashion_designer_wor_511ff78d.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                ATELIER was founded on the belief that fashion should be timeless, 
                sustainable, and effortlessly elegant.
              </p>
            </motion.div>

            <div className="space-y-20">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={aboutImg1}
                    alt="Our atelier"
                    className="w-full h-[400px] object-cover rounded-md"
                    data-testid="img-atelier"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="font-serif text-2xl md:text-3xl font-light">
                    Crafted with Care
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every piece in our collection is thoughtfully designed and 
                    crafted with attention to detail. We believe in quality over 
                    quantity, creating garments that stand the test of time.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to sustainability means we use only the finest 
                    natural materials and work with ethical manufacturers who share 
                    our values.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4 md:order-2"
                >
                  <h2 className="font-serif text-2xl md:text-3xl font-light">
                    Timeless Design
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We design for the modern individual who values simplicity and 
                    authenticity. Our aesthetic is clean, minimal, and effortlessly 
                    sophisticated.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Each collection is curated to build a versatile wardrobe that 
                    transcends seasons and trends, allowing you to express your 
                    personal style with confidence.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:order-1"
                >
                  <img
                    src={aboutImg2}
                    alt="Design process"
                    className="w-full h-[400px] object-cover rounded-md"
                    data-testid="img-design-process"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
