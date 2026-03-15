import { motion } from "framer-motion";

import React from "react";

export function AnimatedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}
