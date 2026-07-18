"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function AnimatedCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      className={className}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.article>
  );
}
