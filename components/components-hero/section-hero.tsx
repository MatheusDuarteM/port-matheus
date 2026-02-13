"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Download, Code } from "lucide-react";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/transitions";

interface SectionHeroProps {
  span1: string;
  tituloh1: string;
  span2: string;
  paragrafop: string;
  btn1: string;
  btn2: string;
  paragrafop2: string;
  paragrafop3: string;
}

export function SectionHero(props: SectionHeroProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
    >
      {/* Texto e Conteúdo Principal */}
      <motion.div
        variants={fadeInLeft}
        className="flex-1 text-center lg:text-left order-2 lg:order-1"
      >
        {/* Selo Disponível para Contratação */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-700/10 text-amber-700 font-medium text-sm mb-6 border border-amber-700/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-700"></span>
          </span>
          {props.span1}
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 dark:text-white mb-6 leading-tight">
          {props.tituloh1}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-700 to-amber-900">
            {props.span2}
          </span>
        </h1>

        <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          {props.paragrafop}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {/* Botão de Download CV */}
          <a
            href="/curriculo-Matheus-Duarte.pdf"
            download="Matheus_Duarte.pdf"
            className="w-full sm:w-auto"
          >
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-700/25">
              <Download size={18} /> {props.btn1}
            </button>
          </a>

          {/* Botão do GitHub */}
          <a
            href="https://github.com/MatheusDuarteM"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-transparent text-stone-800 dark:text-white border-2 border-stone-200 dark:border-stone-800 rounded-lg font-semibold hover:border-amber-700 hover:text-amber-700 transition-all">
              <Github size={18} /> {props.btn2}
            </button>
          </a>
        </div>
      </motion.div>

      {/* Imagem de Perfil com Badges */}
      <motion.div
        variants={fadeInRight}
        className="relative order-1 lg:order-2 group"
      >
        <div className="absolute -inset-4 bg-amber-700/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full border-8 border-white dark:border-stone-900 shadow-2xl overflow-hidden">
          <Image
            src="/foto-perfil.png"
            alt="Matheus Duarte Martins"
            fill
            className="object-cover"
          />
        </div>

        {/* Badge de Experiência flutuante */}
        <div
          className="absolute bottom-4 right-0 lg:bottom-10 lg:right-4 bg-white dark:bg-stone-900 p-4 rounded-xl shadow-lg border border-amber-700/10 flex items-center gap-3 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <div className="bg-amber-700/20 p-2 rounded-lg text-amber-700">
            <Code size={20} />
          </div>
          <div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {props.paragrafop2}
            </p>
            <p className="font-bold text-stone-800 dark:text-white">
              {props.paragrafop3}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default SectionHero;
