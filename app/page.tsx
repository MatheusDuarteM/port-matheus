"use client";

import { SectionHeader } from "@/components/components-header/section-header";
import { SectionHero } from "@/components/components-hero/section-hero";
import { SectionServicos } from "@/components/components-servicos/section-servicos";
import { SectionProjetos } from "@/components/components-abordagem/section-abordagem";
import { SectionFooter } from "@/components/components-footer/section-footer";
import {
  sectionFooterData,
  sectionHeaderData,
  sectionHeroData,
  sectionProjetosData,
  sectionServicosData,
} from "@/lib/valuesPage";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#FDFCFB] font-sans dark:bg-[#0F0D0C] overflow-x-hidden">
      <main className="flex w-full max-w-6xl flex-col items-center py-12 px-8 md:px-16 gap-24">
        <SectionHeader {...sectionHeaderData} />

        <SectionHero {...sectionHeroData} />

        <SectionServicos
          paragrafop1={""}
          tituloh2={""}
          tituloh3={""}
          {...sectionServicosData}
        />

        <SectionProjetos {...sectionProjetosData} />

        <SectionFooter {...sectionFooterData} />
      </main>
    </div>
  );
}
