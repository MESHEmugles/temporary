"use client";
import Image from "next/image";
import background from "../../../public/backgroud.png";
import sidepics from "../../../public/about.png";
import rightside from "../../../public/righty.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Aboutanime from "@/utils/animationeffects/aboutanime";

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

export default function About() {
  return (
    <div className="mx-0 bg-[#EBEBEB] pb-20 shadow-none xl:mx-[8em] xl:shadow-xl">
      <Aboutanime delay={0.3}>
        <div className="">
          <div className="banner pb-20">
            <div className="relative">
              <Image
                src={background}
                alt="about image"
                className="max-h-[88vh] w-screen"
              />

              <div className="absolute left-5 top-20 z-[50] md:left-10 md:top-32 lg:left-28 lg:top-48">
                <motion.h3
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="text-2xl font-bold leading-[25px] md:text-5xl lg:text-6xl lg:leading-[60px]"
                >
                  About <br />
                  <span className="text-[#DD9F39]">InspiraSpace</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="mt-2 text-[0.6em] md:text-[1.2em] lg:text-[1.6em]"
                >
                  Get to know us
                </motion.p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-10 overflow-x-hidden py-5 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="flex-initial"
            >
              <Image
                src={sidepics}
                alt="side pics"
                className="mr-24 w-[80%] md:mr-0 md:w-[45vw]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="relative left-5 w-[100%] md:left-16 md:w-[48.9%]"
            >
              <p className="pb-3 text-xs font-medium text-[#4D5163] md:text-sm lg:text-base">
                WHO ARE WE
              </p>
              <p className="w-[85%] text-2xl font-bold leading-[30px] md:w-[60%] md:text-3xl md:leading-[40px] lg:text-4xl lg:leading-[48px]">
                <span className="text-[#DD9F39]">InspiraSpace</span> is a
                creator&lsquo;s one-stop shop to craft masterpieces and coexist
                with <br className="hidden md:block" /> creative{" "}
                <br className="hidden md:block" />
                geniuses
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-end justify-end gap-10 overflow-x-hidden py-10 md:flex-row md:items-center md:justify-between md:gap-0 md:py-20">
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="relative left-5 w-full flex-initial md:left-20 md:w-1/2 lg:left-28"
            >
              <p className="pb-3 text-xs font-medium text-[#4D5163] md:text-base md:text-sm">
                WHAT WE DO FOR YOU
              </p>
              <p className="w-[90%] text-2xl font-bold leading-[30px] md:w-[75%] md:text-3xl md:leading-[40px] lg:text-4xl lg:leading-[48px]">
                We immerse you into the sunken place&lsquo; of
                <span className="text-[#DD9F39]"> artistic</span> inspiration.
                Innovated to connect{" "}
                <span className="text-[#DD9F39]">talents</span>,{" "}
                <span className="text-[#DD9F39]">co-sign collabs</span>,
                <span className="text-[#DD9F39]"> network</span>, and distribute{" "}
                <span className="text-[#DD9F39]">digital content</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="md:overflow-x-none overflow-x-hidden"
            >
              <Image
                src={rightside}
                alt="side pics"
                className="ml-16 w-[80%] md:ml-0 md:w-[38vw] lg:w-[34vw]"
              />
            </motion.div>
          </div>

          <div className="meet-the-team mx-0 my-8 px-0 md:mx-5 md:my-20 lg:px-10">
            <div className="sub-meet">
              <p className="mb-20 pl-5 text-xs font-medium text-[#4D5163] md:pl-9 md:text-sm lg:pl-16">
                MEET THE TEAM BEHIND IT ALL
              </p>

              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="box px-5 lg:px-16"
              >
                <div className="grid grid-cols-2 gap-x-5 gap-y-20 md:grid-cols-4 md:gap-x-10 md:gap-y-24">
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
                      className="flex h-48 max-w-44 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-[#DD9F39] bg-[#4D5163] md:h-[13em]"
                    >
                      <Image
                        src={item.image}
                        alt="people"
                        width={50}
                        height={50}
                        className="-mt-[8em] w-[70%] rounded-full border-2 border-[#DD9F39]"
                      />

                      <div className="">
                        <small className="ml-6 text-[0.55em] text-white md:ml-8">
                          {item.title}
                        </small>
                        <p className="text-[0.96em] font-bold text-[#DD9F39] md:text-[1.1em]">
                          {item.desc}
                        </p>
                        <div className="relative top-[3.1em] flex flex-row justify-center gap-7 lg:top-14">
                          <Link href="">
                            <Image
                              src={item.src1}
                              alt="mobile hero image"
                              className=""
                              width={8}
                              height={8}
                            />
                          </Link>
                          <Link href="">
                            <Image
                              src={item.src2}
                              alt="mobile hero image"
                              className=""
                              width={15}
                              height={15}
                            />
                          </Link>
                          <Link href="">
                            <Image
                              src={item.src3}
                              alt="mobile hero image"
                              className=""
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
        </div>
      </Aboutanime>
    </div>
  );
}
