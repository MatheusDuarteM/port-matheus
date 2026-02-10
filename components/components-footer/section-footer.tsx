"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { fadeInUp } from "@/lib/transitions";
import { contactInfo } from "@/lib/valuesPage";

export function SectionFooter() {
  return (
    <motion.footer
      id="contato"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full pt-16 pb-8 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-serif mb-4 text-stone-900 dark:text-stone-100">
            Vamos conversar?
          </h3>
          <p className="text-stone-600 dark:text-stone-400">
            Estou sempre aberto a novos projetos e colaborações.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-stone-800 dark:text-stone-200">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 hover:text-amber-700 transition-colors group"
          >
            <div className="p-3 bg-stone-100 dark:bg-stone-900 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
              <Mail size={20} />
            </div>
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="flex items-center gap-3 hover:text-amber-700 transition-colors group"
          >
            <div className="p-3 bg-stone-100 dark:bg-stone-900 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
              <Phone size={20} />
            </div>
            {contactInfo.phone}
          </a>
        </div>
      </div>
      <p className="mt-20 text-center text-xs text-stone-400 tracking-widest uppercase">
        © {new Date().getFullYear()} Matheus Duarte Martins.
      </p>
    </motion.footer>
  );
}
