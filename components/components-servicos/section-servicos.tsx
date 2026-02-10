"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/transitions";
import { languages } from "@/lib/valuesPage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SectionServicos() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="w-full text-center"
    >
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
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </motion.section>
  );
}
