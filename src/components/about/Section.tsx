import Image from "next/image";
import sidepics from "../../../public/about.png";
import rightside from "../../../public/righty.png";

const Section = () => {

  return (
    <div>
        <div className="flex flex-col md:items-center md:items-start md:justify-between gap-10 overflow-x-hidden py-5 md:flex-row">
            <div
            >
              <Image
                src={sidepics}
                alt="side pics"
                className="float-left w-[80%] sm:w-[50%] md:w-[45vw]"
              />
            </div>
            <div
              className="relative text-center md:text-start left-4 w-[100%] md:left-10 md:w-[48.9%]"
            >
              <p className="mr-12 sm:mr-14 md:mr-0 pb-3 text-xs font-medium text-[#4D5163] md:text-sm lg:text-base">
                WHO ARE WE
              </p>
              <p className="w-[85%] text-[1.1111em] font-bold leading-[20px] md:w-[63%] md:text-[1.7em] md:leading-[40px] lg:text-4xl lg:leading-[48px]">
                <span className="text-[#DD9F39]">InspiraSpace</span> is a
                creator&lsquo;s one-stop shop to craft masterpieces and coexist
                with <br className="hidden md:block" /> creative{" "}
                <br className="hidden md:block" />
                geniuses
              </p>
            </div>
        </div>
          <div className="relative flex flex-col items-end justify-end gap-10 overflow-x-hidden md:h-full h-[40em] py-10 md:flex-row md:items-center md:justify-between md:gap-0 md:py-20">
              <div
                className="md:relative absolute bottom-16 md:bottom-0 left-0 text-center md:text-start w-full flex-initial md:left-16 md:w-1/2 lg:left-28"
              >
                <p className="pb-3 text-xs font-medium text-[#4D5163] md:text-base md:text-sm">
                  WHAT WE DO FOR YOU
                </p>
                <p className="mx-auto md:mx-0 w-[78%] text-[1.1111em] font-bold leading-[20px] md:w-[80.3333%] md:text-[1.8em] md:leading-[40px] lg:text-4xl lg:leading-[48px]">
                  We immerse you into the sunken place&lsquo; of
                  <span className="text-[#DD9F39]"> artistic</span> inspiration.
                  Innovated to connect{" "}
                  <span className="text-[#DD9F39]">talents</span>,{" "}
                  <span className="text-[#DD9F39]">co-sign collabs</span>,
                  <span className="text-[#DD9F39]"> network</span>, and distribute{" "}
                  <span className="text-[#DD9F39]">digital content</span>.
                </p>
              </div>

              <div
                className="md:relative absolute top-1 md:overflow-x-none overflow-x-hidden md:shrink-0"
              >
                <Image
                  src={rightside}
                  alt="side pics"
                  className="ml-2 md:ml-0 md:w-[43vw] lg:w-[40vw] float-right"
                />
              </div>
          </div>
    </div>
  );
};

export default Section;