import React from "react";
import Hero from "@/components/Blocks/Hero/Hero";
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import BoldTitle from "@/components/UI/Cards/BoldTitle/BoldTitle";
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <BoldTitle />
      <SkillSet />
      <SelectedWorks />
      <ExperienceBlock />
    </>
  );
}
