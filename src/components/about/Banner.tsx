import background from "../../../public/backgroud.png";
import Image from "next/image";
import { motion } from "framer-motion";
import NextSection from "../nextsection";

const Banner = () => {

  return (
    <div className="banner pb-20 relative">
      <div className="sub-banner overflow-x-hidden md:bg-none md:h-[100%] bg-[url('/backgroud.png')] md:brightness-100 h-[100vh] bg-center bg-no-repeat brightness-[0.9] bg-cover overflow-y-hidden">
        <Image
            src={background}
            alt="about image"
            style={{
            objectFit: 'cover'
            }}
            className="image max-h-[90vh] w-screen md:block sm:hidden hidden"
        />

        <div className="relative text-center md:text-justify md:absolute left-0 top-52 z-[50] md:left-10 sm:top-32 md:top-20 lg:left-28 lg:top-20">
            <motion.h3
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-[2.5em] font-bold leading-[40px] lg:text-[3.5em] md:text-[2.6em] lg:leading-[56px] md:leading-[38px]"
            >
            About <br />
            <span className="text-[#DD9F39]">InspiraSpace</span>
            </motion.h3>
            <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="mt-4 text-[0.9em] md:text-[1.1555em] font-semibold"
            >
            Get to know us
            </motion.p>
        </div>
        <NextSection />
      </div>
    </div>
  );
};

export default Banner;