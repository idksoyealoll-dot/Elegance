import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import ClothingRackAnimation from "@/components/ClothingRackAnimation";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [isExiting, setIsExiting] = useState(false);

  const handleAnimationComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      setLocation("/shop");
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.95 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <ClothingRackAnimation onComplete={handleAnimationComplete} />
    </motion.div>
  );
}
