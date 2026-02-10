"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/transitions";
import { projects } from "@/lib/valuesPage";

export function SectionProjetos() {
  return (
    <motion.section
      id="projetos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full space-y-8 scroll-mt-24"
    >
      <motion.h3
        variants={fadeInUp}
        className="text-3xl font-serif text-stone-900 dark:text-stone-100"
      >
        Projetos em Destaque
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="group flex flex-col bg-white dark:bg-[#161412] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 flex flex-col grow">
              <span className="text-amber-700 text-[10px] uppercase tracking-widest font-bold mb-2">
                {proj.tag}
              </span>
              <h4 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-3">
                {proj.title}
              </h4>
              <div className="mt-auto flex flex-wrap gap-2">
                {proj.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500 border border-stone-200/50 dark:border-stone-800"
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
