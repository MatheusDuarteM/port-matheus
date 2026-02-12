"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/transitions";
import { projects } from "@/lib/valuesPage";
import { ExternalLink, Github } from "lucide-react";

interface SectionProjetosProps {
  // Adicione aqui as props que você deseja passar para o componente
  span: string;
  tituloh3: string;
  paragrafop: string;
  paragrafop2: string;
}

export function SectionProjetos(props: SectionProjetosProps) {
  return (
    <motion.section
      id="projetos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full py-24 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <motion.span
            variants={fadeInUp}
            className="text-amber-700 font-semibold tracking-wider uppercase text-sm mb-2 block"
          >
            {props.span}
          </motion.span>
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white font-serif"
          >
            {props.tituloh3}
          </motion.h3>
        </div>
        <motion.p
          variants={fadeInUp}
          className="text-stone-500 dark:text-stone-400 max-w-md"
        >
          {props.paragrafop}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="group relative flex flex-col bg-white dark:bg-[#1c1917] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-2xl hover:shadow-amber-700/5 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Container da Imagem */}
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Links flutuantes no Hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <a
                  href="#"
                  className="p-3 bg-white text-stone-900 rounded-full hover:bg-amber-700 hover:text-white transition-colors shadow-lg"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white text-stone-900 rounded-full hover:bg-amber-700 hover:text-white transition-colors shadow-lg"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-8 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-amber-700 text-xs uppercase tracking-widest font-bold">
                  {proj.tag}
                </span>
              </div>

              <h4 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-amber-700 transition-colors">
                {proj.title}
              </h4>

              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
                {props.paragrafop2}
              </p>

              <div className="mt-auto pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-2">
                {proj.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-[11px] font-medium bg-stone-50 dark:bg-stone-900/50 px-3 py-1 rounded-full text-stone-600 dark:text-stone-400 border border-stone-200/50 dark:border-stone-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default SectionProjetos;
