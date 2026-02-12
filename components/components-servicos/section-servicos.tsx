"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/transitions";
import { languages } from "@/lib/valuesPage";
import { School, Code } from "lucide-react";

interface SectionServicosProps {
  // Você pode adicionar props aqui se necessário
  paragrafop1: string;
  tituloh2: string;
  tituloh3: string;
  tituloh4_1: string;
  tituloh4_2: string;
  paragrafop2: string;
  paragrafop3: string;
  span: string;
  paragrafop4: string;
  paragrafop5: string;
  span2: string;
}

export function SectionServicos(props: SectionServicosProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-full"
    >
      {/* --- Tech Stack Strip (Igual à referência) --- */}
      <div className="border-y border-stone-200/50 bg-white/50 dark:bg-stone-900/50 dark:border-stone-800 mb-24">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <p className="text-center text-sm font-semibold text-stone-500 mb-6 uppercase tracking-wider">
            {props.paragrafop1}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="text-xl font-bold text-stone-400 hover:text-amber-700 transition-colors cursor-default"
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- Education Section (My Journey) --- */}
      <div className="max-w-4xl mx-auto px-4 py-12" id="education">
        <div className="text-center mb-16">
          <h2 className="text-amber-700 font-semibold tracking-wider uppercase mb-2 text-sm">
            {props.tituloh2}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-white font-serif">
            {props.tituloh3}
          </h3>
        </div>

        <div className="relative">
          {/* Linha Vertical Central */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-700/20 -translate-x-1/2" />

          {/* Item 1 - Graduação */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
            <div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-stone-800 dark:text-white group-hover:text-amber-700 transition-colors">
                {props.tituloh4_1}
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-medium">
                {props.paragrafop2}
              </p>
              <p className="text-sm text-stone-400 mt-2">{props.paragrafop3}</p>
            </div>
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-amber-700 border-4 border-white dark:border-stone-900 z-10 -translate-x-1/2 flex items-center justify-center shadow-lg">
              <School size={14} className="text-white" />
            </div>
            <div className="md:w-1/2 md:pl-12 pl-12">
              <span className="inline-block px-3 py-1 bg-amber-700/10 text-amber-700 rounded-full text-sm font-semibold">
                {props.span}
              </span>
            </div>
          </div>

          {/* Item 2 - Curso/Bootcamp */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-12 group">
            <div className="md:w-1/2 md:pl-12 pl-12 mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-stone-800 dark:text-white group-hover:text-amber-700 transition-colors">
                {props.tituloh4_2}
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-medium">
                {props.paragrafop4}
              </p>
              <p className="text-sm text-stone-400 mt-2">{props.paragrafop5}</p>
            </div>
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-stone-900 border-4 border-amber-700 z-10 -translate-x-1/2 flex items-center justify-center shadow-lg">
              <Code size={14} className="text-amber-700" />
            </div>
            <div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
              <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300 rounded-full text-sm font-semibold">
                {props.span2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SectionServicos;
