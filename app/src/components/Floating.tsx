"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Movimiento suave tipo "flotando en el agua": desplazamiento chico,
// lento, sin aceleración brusca (nada de rebote ni vueltas).
export default function Floating({
  children,
  delay = 0,
  distance = 10,
  duration = 4.5,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
