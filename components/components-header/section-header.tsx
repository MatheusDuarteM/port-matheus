/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/transitions";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function SectionHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Importante: evita erro de hidratação (quando o servidor renderiza algo diferente do cliente)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="flex w-full flex-row justify-between items-center border-b border-stone-200 dark:border-stone-800 pb-6 opacity-0">
        <h4 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">
          Matheus Duarte <span className="text-amber-700">Martins</span>
        </h4>
      </header>
    );
  }

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

      <div className="flex items-center gap-8">
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

        {/* Botão de Dark Mode */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all text-stone-600 dark:text-stone-400"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.header>
  );
}
