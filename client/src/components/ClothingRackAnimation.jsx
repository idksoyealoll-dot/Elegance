import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ClothingRackAnimation({ onComplete }) {
  const clothingItems = [
    { id: 1, color: "#E8DDD3", height: 120 },
    { id: 2, color: "#D4C5B9", height: 140 },
    { id: 3, color: "#C4B5AA", height: 130 },
    { id: 4, color: "#B8A99C", height: 150 },
    { id: 5, color: "#A89A8D", height: 135 },
    { id: 6, color: "#988A7D", height: 145 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[hsl(0,0%,5%)] flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-[90vw] max-w-2xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-white/20 w-full mb-8 origin-center"
          />

          <div className="flex justify-around items-end h-48">
            {clothingItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  rotate: index % 2 === 0 ? -15 : 15,
                  x: index % 2 === 0 ? -100 : 100,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.3 + index * 0.15,
                }}
                className="flex flex-col items-center"
              >
                <div className="w-1 h-8 bg-white/30 mb-1" />
                <div
                  className="w-12 sm:w-16 rounded-sm shadow-lg"
                  style={{
                    height: `${item.height}px`,
                    backgroundColor: item.color,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-white/90 mt-16 tracking-wide"
        >
          ATELIER
        </motion.h1>
      </motion.div>
    </div>
  );
}
