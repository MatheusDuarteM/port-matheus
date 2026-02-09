import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Mail, Phone, Github, FileText } from "lucide-react"; // Sugestão: adicione lucide-react

const languages = [
  { name: "JavaScript", level: "Avançado" },
  { name: "TypeScript", level: "Intermediário" },
  { name: "React / Next.js", level: "Avançado" },
  { name: "Node.js", level: "Intermediário" },
  { name: "Python", level: "Básico" },
  { name: "Tailwind CSS", level: "Avançado" },
  { name: "PostgreSQL", level: "Intermediário" },
];

export default function Home() {
  return (
    // Fundo em creme/off-white suave ou preto profundo
    <div className="flex min-h-screen justify-center bg-[#FDFCFB] font-sans dark:bg-[#0F0D0C]">
      <main className="flex w-full max-w-6xl flex-col items-center py-12 px-8 md:px-16 gap-24">
        {/* Header / Navegação Superior */}
        <header className="flex w-full flex-row justify-between items-center border-b border-stone-200 dark:border-stone-800 pb-6">
          <h4 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">
            M. <span className="text-amber-700">Duarte</span>
          </h4>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-stone-500">
            <a
              href="#projetos"
              className="hover:text-amber-700 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="hover:text-amber-700 transition-colors"
            >
              Contato
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex w-full flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start gap-6 flex-1">
            <span className="text-amber-700 font-medium tracking-[0.2em] uppercase text-xs">
              Desenvolvedor Full Stack
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 dark:text-stone-50 leading-[1.1]">
              Meu nome é <br />
              <span className="italic text-stone-700 dark:text-stone-400">
                Matheus Duarte Martins
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-stone-900 dark:bg-stone-100 dark:text-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-amber-800 dark:hover:bg-stone-300 transition-all">
                <Github size={18} /> GitHub
              </button>
              <button className="border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all">
                <FileText size={18} /> Currículo
              </button>
            </div>
          </div>

          <div className="relative group flex-direction-column items-center">
            <div className="absolute -inset-4 border border-amber-700/20 rounded-full group-hover:scale-105 transition-transform duration-500"></div>
            <Image
              src="/profile.jpg"
              alt="Matheus Duarte"
              width={220}
              height={220}
              className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 object-cover border-4 border-white dark:border-stone-950 shadow-2xl"
            />
          </div>
        </section>

        {/* Skills Carousel */}
        <section className="w-full text-center">
          <h3 className="text-stone-400 uppercase tracking-[0.3em] text-[10px] mb-10 font-bold">
            Tech Stack
          </h3>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {languages.map((lang, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="group p-6 bg-white dark:bg-[#161412] border border-stone-100 dark:border-stone-900 rounded-2xl hover:border-amber-700/50 transition-all duration-300 shadow-sm">
                    <p className="text-stone-900 dark:text-stone-100 font-bold mb-1 group-hover:text-amber-700 transition-colors">
                      {lang.name}
                    </p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-tighter">
                      {lang.level}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-stone-200 dark:border-stone-800" />
              <CarouselNext className="static translate-y-0 border-stone-200 dark:border-stone-800" />
            </div>
          </Carousel>
        </section>

        {/* Projetos */}
        {/* Seção de Projetos - Grid de 3 Colunas */}
        <section id="projetos" className="w-full space-y-8">
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-serif text-stone-900 dark:text-stone-100">
              Projetos em Destaque
            </h3>
          </div>

          {/* Container Grid: 1 coluna no mobile, 3 colunas no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Projeto 1 */}
            <div className="group flex flex-col bg-white dark:bg-[#161412] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/projects.jpg"
                  alt="Projeto 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-amber-700 text-[10px] uppercase tracking-widest font-bold mb-2">
                  Full Stack
                </span>
                <h4 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-3">
                  E-commerce App
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                  Plataforma completa com checkout, integração de pagamentos e
                  painel administrativo.
                </p>
                <div className="mt-auto flex gap-3">
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    Next.js
                  </span>
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    Stripe
                  </span>
                </div>
              </div>
            </div>

            {/* Card Projeto 2 */}
            <div className="group flex flex-col bg-white dark:bg-[#161412] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/projects.jpg" // Substitua pela imagem do projeto 2
                  alt="Projeto 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-amber-700 text-[10px] uppercase tracking-widest font-bold mb-2">
                  Web Design
                </span>
                <h4 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-3">
                  Landing Page Premium
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                  Interface focada em conversão para agências de marketing
                  digital.
                </p>
                <div className="mt-auto flex gap-3">
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    Tailwind
                  </span>
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    GSAP
                  </span>
                </div>
              </div>
            </div>

            {/* Card Projeto 3 */}
            <div className="group flex flex-col bg-white dark:bg-[#161412] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/projects.jpg" // Substitua pela imagem do projeto 3
                  alt="Projeto 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-amber-700 text-[10px] uppercase tracking-widest font-bold mb-2">
                  Backend
                </span>
                <h4 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-3">
                  API Restful Social
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                  Sistema de gerenciamento de usuários e posts com autenticação
                  JWT.
                </p>
                <div className="mt-auto flex gap-3">
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    Node.js
                  </span>
                  <span className="text-[10px] bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded text-stone-500">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contato */}
        <footer id="contato" className="w-full  pt-16 pb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-4 text-stone-900 dark:text-stone-100">
                Vamos conversar?
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                Estou sempre aberto a novos projetos e oportunidades de
                colaboração.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-stone-800 dark:text-stone-200">
              <a
                href="mailto:matheusduartemartins2@gmail.com"
                className="flex items-center gap-3 hover:text-amber-700 transition-colors"
              >
                <div className="p-3 bg-stone-100 dark:bg-stone-900 rounded-full">
                  <Mail size={20} />
                </div>
                matheusduartemartins2@gmail.com
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 hover:text-amber-700 transition-colors"
              >
                <div className="p-3 bg-stone-100 dark:bg-stone-900 rounded-full">
                  <Phone size={20} />
                </div>
                +55 27 99281-2662
              </a>
            </div>
          </div>
          <p className="mt-20 text-center text-xs text-stone-400 tracking-widest">
            © {new Date().getFullYear()} MATHEUS DUARTE. DESENVOLVIDO COM FOCO
            EM PERFORMANCE.
          </p>
        </footer>
      </main>
    </div>
  );
}
