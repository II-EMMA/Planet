"use client";
import { useState } from "react";
import CardOne from "@/assets/images/card-one.jpg";
import CardTwo from "@/assets/images/card-two.jpg";
import CardThree from "@/assets/images/card-three.jpg";
import { FaArrowRight } from "react-icons/fa6";
import StarIcon from "@/assets/images/star-icon.svg";

export default function Cards() {
  const [active, setActive] = useState(0); // first card active by default

  const cards = [
    {
      title: "Pet Friendly Plants",
      img: CardOne.src,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.",
      tag: "Piperaceae",
    },
    {
      title: "Orchids",
      img: CardTwo.src,
      desc: "Orchids are easily everyone’s favorite flowering plant, find new orchids and orchid success items in this collection.",
      tag: "Araceae",
    },
    {
      title: "Succulents",
      img: CardThree.src,
      desc: "All succulents are cacti, but not all cacti are succulents. Both make low maintenance house plants.",
      tag: "Moraceae",
    },
  ];

  return (
    <section className="flex 2xl:flex-row flex-col items-center justify-center max-w-[1500px] mx-auto sm:px-8 px-1 mt-20 gap-3.5 2xl:flex-nowrap flex-wrap">
      {cards.map((card, index) => (
        <div
          key={card.title}
          onClick={() => setActive(index)}
          className={`relative ${
            active === index
              ? "2xl:w-1/2 w-full"
              : "2xl:w-1/4 w-9/12 grayscale-100"
          } h-[411px] rounded-[20px] bg-cover bg-center transition-all duration-500 cursor-pointer`}
          style={{ backgroundImage: `url(${card.img})` }}
        >
          {/* Content above background */}
          <div className="absolute p-10 flex flex-col justify-between text-white font-lufga w-full h-full">
            <div className="flex flex-col gap-y-9">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="font-bold text-[53px] leading-12">{card.title}</p>

                {/* Arrow only visible when active */}
                {active === index && (
                  <div className="sm:w-[55px] w-9 h-9 sm:h-[55px] flex items-center justify-center rounded-full bg-white">
                    <FaArrowRight className="text-black sm:size-5  size-3" />
                  </div>
                )}
              </div>

              <p className="text-base font-normal max-w-[573px] text-white/80">
                {card.desc}
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <span className="inline-block w-full h-px bg-[#B3B3B3]" />
              <div className="self-start flex flex-row items-center bg-white/20 backdrop-blur-[7px] border border-[#5A5A5A] rounded-full overflow-hidden">
                <div className="p-3 rounded-full bg-white/20 border-[0.5px] border-[#C7C7C773]">
                  <img src={StarIcon.src} alt="Star Icon" />
                </div>
                <p className="font-semibold text-[11px] pl-1.5 pr-4.5">
                  {card.tag}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
