"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/transitions";
import { contactInfo } from "@/lib/valuesPage";

interface SectionFooterProps {
  tituloh3: string;
  span: string;
  paragrafop: string;
  botao1: string;
  paragrafop2: string;
  paragrafop3: string;
}

export function SectionFooter(props: SectionFooterProps) {
  return (
    <motion.footer
      id="contato"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full pt-12 md:pt-24 pb-12 scroll-mt-24 px-4 md:px-8"
    >
      {/* Container Principal: Ajustado arredondamento para mobile */}
      <div className="bg-[#1c1917] rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 text-white overflow-hidden relative border border-stone-800">
        {/* Brilho de fundo: menor no mobile */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-amber-700/10 blur-[60px] md:blur-[100px] rounded-full -mr-16 -mt-16 md:-mr-32 md:-mt-32" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          {/* LADO ESQUERDO: Textos e Contatos */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            {/* Título: Ajustado tamanho da fonte para mobile */}
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              {props.tituloh3}
              <br className="block md:hidden" /> {/* Quebra linha no mobile */}
              <span className="text-amber-600 italic"> {props.span}</span>
            </h3>

            <p className="text-stone-400 text-base md:text-lg mb-8 md:mb-10 max-w-full md:max-w-sm">
              {props.paragrafop}
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* Contato: Ajustado para não quebrar layout com textos longos */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 md:gap-4 group break-all md:break-normal"
              >
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Mail
                    size={18}
                    className="text-stone-300 group-hover:text-white"
                  />
                </div>
                <span className="text-stone-300 group-hover:text-white transition-colors text-sm md:text-lg">
                  {contactInfo.email}
                </span>
              </a>

              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Phone
                    size={18}
                    className="text-stone-300 group-hover:text-white"
                  />
                </div>
                <span className="text-stone-300 group-hover:text-white transition-colors text-sm md:text-lg">
                  {contactInfo.phone}
                </span>
              </a>
            </div>

            {/* Redes Sociais: Centralizadas no mobile para melhor UX */}
            <div className="flex gap-6 mt-10 justify-start">
              <a
                href="https://github.com/MatheusDuarteM"
                target="_blank"
                className="text-stone-400 hover:text-white transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/matheusduartem/"
                target="_blank"
                className="text-stone-400 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* LADO DIREITO: Formulário - Padding menor no mobile */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-stone-400 ml-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-stone-400 ml-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-stone-400 ml-1">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-600 outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-amber-900/20 active:scale-95">
                {props.botao1} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer inferior: Ajustado empilhamento no mobile */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-stone-200 dark:border-stone-800 pt-8 text-center md:text-left">
        <p className="text-stone-500 text-xs md:text-sm">
          © {new Date().getFullYear()} {props.paragrafop2}
        </p>
        <p className="text-stone-500 text-xs md:text-sm italic">
          {props.paragrafop3}
        </p>
      </div>
    </motion.footer>
  );
}

export default SectionFooter;
