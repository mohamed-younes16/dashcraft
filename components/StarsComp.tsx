"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";

function StarsComp() {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((e, i) => (
        <motion.div
          initial={{ scale: 0, rotate: 180, x: -20 }}
          whileInView={{ rotate: 0, scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.2,
          }}
        >
          <Star className=" fill-main text-main h-6 w-6" />
        </motion.div>
      ))}
    </div>
  );
}

export default StarsComp;
