"use client";
import { FaArrowDown } from "react-icons/fa6";
import CircleOne from "@/assets/images/circle-one.svg";
import CircleTwo from "@/assets/images/circle-two.svg";
import CircleThree from "@/assets/images/circle-three.svg";

export default function HeroInfo() {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-between sm:px-8 px-3">
      <div className="flex items-center">
        <div className="self-stretch p-5 border border-[#979797] bg-white/20 backdrop-blur-[14px] rounded-4xl flex flex-col gap-y-2 font-lufga text-white font-medium min-w-[272px]">
          <p className="text-[38px]">100+ Plants</p>
          <p className="text-base max-w-[202px]">
            We want our visitors to be inspire to get their hands dirty
          </p>
        </div>
        <div className="hidden p-5 border border-[#979797] bg-white/20 backdrop-blur-[14px] rounded-4xl sm:flex flex-col">
          <img src={CircleOne.src} alt="Circle One" />
          <img src={CircleTwo.src} alt="Circle Two" className="-mt-8 z-50" />
          <img src={CircleThree.src} alt="Circle Three" className="-mt-8" />
        </div>
      </div>
      <div className="flex 2xl:flex-col flex-row-reverse 2xl:gap-y-16 gap-x-4 self-start">
        <button
          onClick={handleScroll}
          className="cursor-pointer self-end p-3 bg-transparent border border-white flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          <FaArrowDown
            size={32}
            className="text-white hover:text-black transition-all duration-300"
          />
        </button>
        <button className="hidden font-lufga font-semibold 2xl:text-[#151515] text-white 2xl:flex items-center justify-center px-14 py-4 text-2xl rounded-3xl border 2xl:border-black 2xl:hover:bg-black 2xl:hover:text-white border-white hover:bg-white hover:text-black transition-all duration-300">
          Shop Tropical Plants
        </button>
      </div>
    </div>
  );
}
