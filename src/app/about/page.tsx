'use client'
import Aboutanime from "@/utils/animationeffects/aboutanime";
import Banner from "@/components/about/Banner";
import Section from "@/components/about/Section";
import Team from "@/components/about/TheTeam";

export default function About() {
  return (
    <div className="sm:bg-[#d3d9d9] md:bg-[#EBEBEB] pb-20">
      <Aboutanime delay={0.3}>
        <Banner />

        <Section />

        <Team />
      </Aboutanime>
    </div>
  );
}
