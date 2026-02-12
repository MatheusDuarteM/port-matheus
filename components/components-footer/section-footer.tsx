"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/transitions";
import { contactInfo } from "@/lib/valuesPage";

interface SectionFooterProps {
  // Adicione aqui as props que você deseja passar para o componente
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
      className="w-full pt-24 pb-12 scroll-mt-24 px-4 md:px-8"
    >
      {/* Container Principal com bordas arredondadas e fundo escuro */}
      <div className="bg-[#1c1917] rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative border border-stone-800">
        {/* Efeito de brilho sutil no fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/10 blur-[100px] rounded-full -mr-32 -mt-32" />

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          {/* LADO ESQUERDO: Textos e Contatos */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              {props.tituloh3}
              <span className="text-amber-600 italic">{props.span}</span>
            </h3>
            <p className="text-stone-400 text-lg mb-10 max-w-sm">
              {props.paragrafop}
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Mail
                    size={20}
                    className="text-stone-300 group-hover:text-white"
                  />
                </div>
                <span className="text-stone-300 group-hover:text-white transition-colors text-lg">
                  {contactInfo.email}
                </span>
              </a>

              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Phone
                    size={20}
                    className="text-stone-300 group-hover:text-white"
                  />
                </div>
                <span className="text-stone-300 group-hover:text-white transition-colors text-lg">
                  {contactInfo.phone}
                </span>
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* LADO DIREITO: Formulário */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-stone-400 ml-1">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-stone-400 ml-1">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-stone-400 ml-1">Mensagem</label>
                <textarea
                  placeholder="Como posso ajudar?"
                  rows={4}
                  className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-amber-900/20">
                {props.botao1} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-stone-200 dark:border-stone-800 pt-8">
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} {props.paragrafop2}
        </p>
        <p className="text-stone-500 text-sm italic">{props.paragrafop3}</p>
      </div>
    </motion.footer>
  );
}

export default SectionFooter;
