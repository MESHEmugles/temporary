import Link from "next/link";
import footerLogo from "../../public/footer_logo.png";
import Image from "next/image";
import logo from "../app/icon.png";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 mx-0 border-t-2 bg-[#D8D8D882] shadow-none xl:mx-[8em] xl:shadow-lg 2xl:mx-[35em] 2xl:shadow-xl">
      <div className="mx-auto max-w-[1440px] px-[24.94px] lg:px-[75px]">
        <div className="flex flex-col items-center justify-between pt-[10px] lg:flex-row lg:items-start lg:pt-[50px]">
          <div className="mb-[14.67px] flex flex-col items-start lg:mb-0 lg:flex-row lg:gap-[247px]">
            <Image
              src={footerLogo}
              alt="Inspiraspace logo"
              className="mb-[13px] hidden lg:mb-0 lg:block"
            />

            <Image
              src={logo}
              alt="Inspiraspace logo"
              className="mb-[13px] lg:mb-0 lg:hidden"
            />

            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-sm font-bold uppercase leading-8 tracking-[1px]">
                Menu
              </h2>

              <div className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="text-xs leading-[21px] md:text-base md:leading-8"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-xs leading-[21px] md:text-base md:leading-8"
                >
                  How it Works
                </Link>
                <Link
                  href="#"
                  className="text-xs leading-[21px] md:text-base md:leading-8"
                >
                  Post
                </Link>
                <Link
                  href="#"
                  className="text-xs leading-[21px] md:text-base md:leading-8"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* socials */}
          <div className="flex items-center gap-2">
            <div className="flex size-[48px] cursor-pointer items-center justify-center rounded-full bg-[#4D5163]">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex size-[48px] cursor-pointer items-center justify-center rounded-full bg-[#4D5163]">
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex size-[48px] cursor-pointer items-center justify-center rounded-full bg-[#4D5163]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8 1.44267C10.136 1.44267 10.3893 1.45067 11.2333 1.48933C13.4027 1.588 14.4133 2.616 14.5133 4.768C14.5507 5.612 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.5133 11.232C14.4133 13.3827 13.404 14.4133 11.2333 14.512C10.3893 14.5493 10.1373 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.768 14.512C2.59467 14.412 1.588 13.38 1.488 11.232C1.45067 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.45067 5.61067 1.488 4.768C1.58667 2.61467 2.59733 1.58667 4.768 1.488C5.61067 1.44933 5.864 1.44267 8 1.44267ZM3.892 8C3.892 5.73067 5.732 3.892 8 3.892C10.268 3.892 12.108 5.732 12.108 8C12.108 10.2693 10.268 12.108 8 12.108C5.732 12.108 3.892 10.2693 3.892 8ZM8 10.6667C6.52667 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.528 6.52667 5.33333 8 5.33333C9.472 5.33333 10.668 6.52667 10.668 8C10.668 9.47333 9.472 10.6667 8 10.6667ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* border bottom */}

        <div className="mb-[1.43px] mt-[9.18px] h-[1px] w-full bg-[#D8D8D882] lg:mb-[43px] lg:mt-[68px]"></div>

        <div className="mb-[52px] flex flex-col items-center justify-between lg:flex-row">
          <p className="leading-8 text-[#16363680]">
            Copyright © 2023. InspiraSpace All Rights Reserved.
          </p>

          <div className="flex w-full items-center justify-between lg:w-auto lg:justify-center lg:gap-4">
            <Link href="#" className="leading-8">
              Terms of Use
            </Link>

            <Link href="#" className="leading-8">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
