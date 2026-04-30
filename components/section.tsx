"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<typeof motion.section>;

export function Section({ children, ...props }: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
