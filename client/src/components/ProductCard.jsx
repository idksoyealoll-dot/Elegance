import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ProductCard({ image, name, price, id }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      data-testid={`card-product-${id}`}
    >
      <Card className="overflow-hidden border-0 bg-card hover-elevate cursor-pointer group">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-105"
            data-testid={`img-product-${id}`}
          />
        </div>
        <div className="p-4 space-y-1">
          <h3
            className="text-sm tracking-widest uppercase font-normal"
            data-testid={`text-product-name-${id}`}
          >
            {name}
          </h3>
          <p
            className="text-sm text-muted-foreground"
            data-testid={`text-product-price-${id}`}
          >
            ${price}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
