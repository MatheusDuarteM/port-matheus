"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/transitions";

export function SectionHero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="flex w-full flex-col md:flex-row items-center justify-between gap-12"
    >
      <motion.div
        variants={fadeInLeft}
        className="flex flex-col items-start gap-6 flex-1"
      >
        <span className="text-amber-700 font-medium tracking-[0.2em] uppercase text-xs">
          Desenvolvedor Full Stack
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 dark:text-stone-50 leading-[1.1]">
          Meu nome é <br />
          <span className="italic text-stone-700 dark:text-stone-400">
            Matheus Duarte Martins
          </span>
        </h1>

        <div className="flex flex-row gap-4 mt-4">
          <button className="bg-stone-900 dark:bg-stone-100 dark:text-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-amber-800 dark:hover:bg-stone-300 transition-all">
            <a href="https://github.com/MatheusDuarteM" target="_blank">
              <Github size={18} />
            </a>
            <a href="https://github.com/MatheusDuarteM" target="_blank">
              GitHub
            </a>
          </button>
          <a href="/curriculo-Matheus-Duarte.pdf" download="Meu_Curriculo.pdf">
            <button className="border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all">
              <FileText size={18} /> Currículo
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInRight}
        className="relative group flex-direction-column items-center"
      >
        <div className="absolute -inset-4 border border-amber-700/20 rounded-full group-hover:scale-105 transition-transform duration-500"></div>
        <Image
          src="/foto-perfil.png"
          alt="Matheus Duarte Martins"
          width={220}
          height={220}
          className="rounded-full transition-all duration-700 object-cover border-4 border-white dark:border-stone-950 shadow-2xl"
        />
      </motion.div>
    </motion.section>
  );
}
