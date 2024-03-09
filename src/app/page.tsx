import Image from "next/image";
import mobileHero from "../../public/mobile_hero_Img.png";
import desktopHero from "../../public/desktop_hero_img.png";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-[1440px] px-[24.94px] lg:px-[75px]">
        <Image
          src={mobileHero}
          alt="mobile hero image"
          className="absolute right-0 top-0 -z-[50] md:hidden"
        />

        <Image
          src={desktopHero}
          alt="mobile hero image"
          className="absolute right-0 top-0 -z-[50] hidden md:block"
        />
      </div>
    </main>
  );
}
