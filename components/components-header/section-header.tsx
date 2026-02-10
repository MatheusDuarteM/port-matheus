"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/transitions";

export function SectionHeader() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="flex w-full flex-row justify-between items-center border-b border-stone-200 dark:border-stone-800 pb-6"
    >
      <h4 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">
        Matheus Duarte <span className="text-amber-700">Martins</span>
      </h4>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-stone-500">
        <motion.a
          href="#projetos"
          whileHover={{ scale: 1.05, color: "#b45309" }}
          whileTap={{ scale: 0.95 }}
          className="transition-colors cursor-pointer"
        >
          Projetos
        </motion.a>
        <motion.a
          href="#contato"
          whileHover={{ scale: 1.05, color: "#b45309" }}
          whileTap={{ scale: 0.95 }}
          className="transition-colors cursor-pointer"
        >
          Contato
        </motion.a>
      </nav>
    </motion.header>
  );
}
