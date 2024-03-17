'use client'
import Aboutanime from "@/utils/animationeffects/aboutanime";
import Banner from "@/components/about/Banner";
import Section from "@/components/about/Section";
import Team from "@/components/about/TheTeam";

export default function About() {
  return (
    <div className="sm:bg-[#d3d9d9] mx-0 md:bg-[#EBEBEB] pb-20 shadow-none xl:mx-[8em] xl:shadow-lg 2xl:mx-[35em] 2xl:shadow-xl">
      <Aboutanime delay={0.3}>
        <Banner />

        <Section />

        <Team />
      </Aboutanime>
    </div>
  );
}
