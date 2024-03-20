import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teams = [
    {
      id: 1,
      image: "/people.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 2,
      image: "/edit.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 3,
      image: "/capman.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 4,
      image: "/nicehair.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 5,
      image: "/people.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 6,
      image: "/edit.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 7,
      image: "/capman.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
    {
      id: 8,
      image: "/nicehair.png",
      title: "Founder/CEO",
      desc: "Oghene Victor",
      src1: "/face.png",
      src2: "/twit.png",
      src3: "/insta.png",
    },
];

const Team = () => {

  return (
    <div className="meet-the-team md:text-start text-center my-8 px-0 md:mx-5 md:my-20 lg:px-10">
        <div className="sub-meet">
        <p className="md:mb-20 pl-0 text-xs font-medium text-[#4D5163] md:pl-5 sm:mb-32 mb-28 md:text-sm lg:pl-16">
            MEET THE TEAM BEHIND IT ALL
        </p>

        <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-5xl mx-2 py-10 md:py-20"
        >
            <div className="grid grid-cols-3 gap-x-3 gap-y-24 md:mb-0 mb-5 md:grid-cols-4 md:gap-x-10 md:gap-y-28">
            {teams.map((item) => (
                <motion.div
                whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: 1.2,
                    translateY: "",
                    transition: {
                    duration: 0.5,
                    },
                }}
                key={item.id}
                className="flex pb-18 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-[#DD9F39] bg-[#4D5163] max-w-52 h-[19vh] sm:h-[21vh] md:h-[185px] lg:h-[210px]"
                >
                <Image
                    src={item.image}
                    alt="people"
                    width={50}
                    height={50}
                    className="-mt-[6em] lg:-mt-[9.2em] xl:-mt-[9em] sm:-mt-[7.5em] sm:w-[70%] w-[79%] md:w-[75%] rounded-full border-2 border-[#DD9F39] shrink-0"
                />

                <div className="xl:mt-0 lg:mt-2 -mt-1">
                    <small className="ml-0 text-[0.3em] md:text-[0.7em] text-white md:ml-7">
                    {item.title}
                    </small>
                    <p className="text-[0.75em] -mt-1.5 md:-mt-0 font-bold text-[#DD9F39] md:text-[1.1em]">
                    {item.desc}
                    </p>
                    <div className="relative top-[2.2em] flex flex-row justify-center gap-5 md:gap-10 md:top-[3.2em]">
                    <Link href="">
                        <Image
                        src={item.src1}
                        alt="mobile hero image"
                        className="w-[0.35em] xl:w-[0.5em]"
                        width={8}
                        height={8}
                        />
                    </Link>
                    <Link href="">
                        <Image
                        src={item.src2}
                        alt="mobile hero image"
                        className="w-[0.6em] xl:w-[0.8em]"
                        width={15}
                        height={15}
                        />
                    </Link>
                    <Link href="">
                        <Image
                        src={item.src3}
                        alt="mobile hero image"
                        className="w-[0.6em] xl:w-[0.8em]"
                        width={13}
                        height={13}
                        />
                    </Link>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </div>
    </div>
  );
};

export default Team;