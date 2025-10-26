// ==> Version 1
// "use client";
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import CardOne from "@/assets/images/card-new-planet-1.svg";
// import CardTwo from "@/assets/images/card-new-planet-2.svg";
// import CardThree from "@/assets/images/card-new-planet-3.svg";
// import { FaRegHeart } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";

// export default function NewPlanets() {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       if (!card) return;

//       const img = card.querySelector("img");
//       const heart = card.querySelector(".heart");
//       const arrow = card.querySelector(".arrow");
//       const texts = card.querySelectorAll(".stag");

//       // Create timeline for hover
//       const tl = gsap.timeline({ paused: true });
//       tl.to(card, {
//         scale: 1.03,
//         boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//         duration: 0.4,
//         ease: "power3.out",
//       })
//         .to(img, { scale: 1.1, duration: 0.6, ease: "power3.out" }, 0)
//         .fromTo(
//           heart,
//           { autoAlpha: 0, y: -10 },
//           { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" },
//           0.1
//         )
//         .fromTo(
//           arrow,
//           { autoAlpha: 0, x: 10 },
//           { autoAlpha: 1, x: 0, duration: 0.4, ease: "power3.out" },
//           0.2
//         )
//         .fromTo(
//           texts,
//           { autoAlpha: 0, y: 15 },
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.08,
//             ease: "power3.out",
//           },
//           0.15
//         );

//       card.addEventListener("mouseenter", () => tl.play());
//       card.addEventListener("mouseleave", () => tl.reverse());
//     });
//   }, []);

//   const cards = [
//     {
//       img: CardOne.src,
//       title: "Peperomia Plants",
//       subtitle: "Moist but well-drained",
//       price: "₹122,056",
//     },
//     {
//       img: CardTwo.src,
//       title: "Fiddle-Leaf Fig",
//       subtitle: "Moist but well-drained",
//       price: "₹162,056",
//     },
//     {
//       img: CardThree.src,
//       title: "Calathea Orbifolia",
//       subtitle: "Moist but well-drained",
//       price: "₹102,056",
//     },
//   ];

//   return (
//     <section className="flex flex-col gap-y-10 font-lufga max-w-[1500px] mx-auto mt-32 px-8">
//       <div className="flex flex-row items-center justify-between text-black">
//         <h3 className="font-extrabold text-9xl text-black">New Plants</h3>
//         <p className="max-w-[619px] font-semibold text-lg ">
//           Bring nature insider and shop our big selections of fresh indoor
//           plants including Instagram-worthy houseplants, pet-friendly plants,
//           orchids and one-of-a-kind rare plants.
//         </p>
//       </div>

//       <div className="flex flex-row items-center justify-between gap-x-6">
//         {cards.map((card, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardRefs.current[i] = el)}
//             className="flex flex-col gap-y-3.5 shadow-xl p-4 rounded-3xl bg-white cursor-pointer transform-gpu"
//           >
//             <div className="relative w-[414px] h-[316px] overflow-hidden rounded-2xl">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="absolute w-full h-full inset-0 object-cover"
//               />
//               <div className="heart absolute top-4 left-2.5 w-16 h-16 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-[15px] opacity-0">
//                 <FaRegHeart size={23} className="text-white" />
//               </div>
//             </div>
//             <div className="flex flex-row justify-between items-end">
//               <div className="flex flex-col">
//                 <p className="stag font-medium text-black text-[32px]">
//                   {card.title}
//                 </p>
//                 <p className="stag font-normal text-lg text-[#959595] -mt-1">
//                   {card.subtitle}
//                 </p>
//                 <p className="stag mt-3.5 text-black font-bold text-lg">
//                   {card.price}
//                 </p>
//               </div>
//               <div className="arrow self-end w-16 h-16 rounded-full flex items-center justify-center bg-[#151515] opacity-0">
//                 <FaArrowRight className="text-white" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// ==> version 2

// "use client";
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import CardOne from "@/assets/images/card-new-planet-1.svg";
// import CardTwo from "@/assets/images/card-new-planet-2.svg";
// import CardThree from "@/assets/images/card-new-planet-3.svg";
// import { FaRegHeart } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";

// export default function NewPlanets() {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       if (!card) return;

//       const img = card.querySelector("img");
//       const heart = card.querySelector(".heart");
//       const arrow = card.querySelector(".arrow");
//       const texts = card.querySelectorAll(".stag");

//       // Create timeline for hover
//       const tl = gsap.timeline({ paused: true });
//       tl.to(card, {
//         scale: 1.03,
//         boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//         filter: "brightness(1)", // brighten on hover
//         duration: 0.4,
//         ease: "power3.out",
//       })
//         .to(img, { scale: 1.1, duration: 0.6, ease: "power3.out" }, 0)
//         .fromTo(
//           heart,
//           { autoAlpha: 0, y: -10 },
//           { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" },
//           0.1
//         )
//         .fromTo(
//           arrow,
//           { autoAlpha: 0, x: 10 },
//           { autoAlpha: 1, x: 0, duration: 0.4, ease: "power3.out" },
//           0.2
//         )
//         .fromTo(
//           texts,
//           { autoAlpha: 0.7, y: 15 }, // slightly dimmed text by default
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.08,
//             ease: "power3.out",
//           },
//           0.15
//         );

//       card.addEventListener("mouseenter", () => tl.play());
//       card.addEventListener("mouseleave", () => tl.reverse());
//     });
//   }, []);

//   const cards = [
//     {
//       img: CardOne.src,
//       title: "Peperomia Plants",
//       subtitle: "Moist but well-drained",
//       price: "₹122,056",
//     },
//     {
//       img: CardTwo.src,
//       title: "Fiddle-Leaf Fig",
//       subtitle: "Moist but well-drained",
//       price: "₹162,056",
//     },
//     {
//       img: CardThree.src,
//       title: "Calathea Orbifolia",
//       subtitle: "Moist but well-drained",
//       price: "₹102,056",
//     },
//   ];

//   return (
//     <section className="flex flex-col gap-y-10 font-lufga max-w-[1500px] mx-auto mt-32 px-8">
//       <div className="flex flex-row items-center justify-between text-black">
//         <h3 className="font-extrabold text-9xl text-black">New Plants</h3>
//         <p className="max-w-[619px] font-semibold text-lg ">
//           Bring nature insider and shop our big selections of fresh indoor
//           plants including Instagram-worthy houseplants, pet-friendly plants,
//           orchids and one-of-a-kind rare plants.
//         </p>
//       </div>

//       <div className="flex flex-row items-center justify-between gap-x-6">
//         {cards.map((card, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardRefs.current[i] = el)}
//             className="flex flex-col gap-y-3.5 shadow-xl p-4 rounded-3xl bg-white cursor-pointer transform-gpu"
//             style={{ filter: "brightness(1)" }} // default dimmed look
//           >
//             <div className="relative w-[414px] h-[316px] overflow-hidden rounded-2xl">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="absolute w-full h-full inset-0 object-cover"
//               />
//               <div className="heart absolute top-4 left-2.5 w-16 h-16 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-[15px] opacity-0">
//                 <FaRegHeart size={23} className="text-white" />
//               </div>
//             </div>
//             <div className="flex flex-row justify-between items-end">
//               <div className="flex flex-col">
//                 <p className="stag font-medium text-black text-[32px]">
//                   {card.title}
//                 </p>
//                 <p className="stag font-normal text-lg text-[#959595] -mt-1">
//                   {card.subtitle}
//                 </p>
//                 <p className="stag mt-3.5 text-black font-bold text-lg">
//                   {card.price}
//                 </p>
//               </div>
//               <div className="arrow self-end w-16 h-16 rounded-full flex items-center justify-center bg-[#151515] opacity-0">
//                 <FaArrowRight className="text-white" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// ==> version 3

"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import CardOne from "@/assets/images/card-new-planet-1.svg";
import CardTwo from "@/assets/images/card-new-planet-2.svg";
import CardThree from "@/assets/images/card-new-planet-3.svg";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function NewPlanets() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const img = card.querySelector("img");

      // Timeline for hover (only zoom effect)
      const tl = gsap.timeline({ paused: true });
      tl.to(img, {
        scale: 1.08,
        duration: 0.8,
        ease: "expo.out",
      });

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  const cards = [
    {
      img: CardOne.src,
      title: "Peperomia Plants",
      subtitle: "Moist but well-drained",
      price: "₹122,056",
    },
    {
      img: CardTwo.src,
      title: "Fiddle-Leaf Fig",
      subtitle: "Moist but well-drained",
      price: "₹162,056",
    },
    {
      img: CardThree.src,
      title: "Calathea Orbifolia",
      subtitle: "Moist but well-drained",
      price: "₹102,056",
    },
  ];

  return (
    <section className="flex flex-col gap-y-10 font-lufga max-w-[1500px] mx-auto mt-32 px-8">
      <div className="flex 2xl:flex-row flex-col gap-y-5 2xl:gap-y-0 items-center justify-between text-black">
        <h3 className="font-extrabold text-9xl text-black">New Plants</h3>
        <p className="max-w-[619px] font-semibold text-lg 2xl:text-start text-center">
          Bring nature insider and shop our big selections of fresh indoor
          plants including Instagram-worthy houseplants, pet-friendly plants,
          orchids and one-of-a-kind rare plants.
        </p>
      </div>

      <div className="flex flex-row items-center 2xl:justify-between gap-5 justify-center gap-x-6 2xl:flex-nowrap flex-wrap">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex flex-col gap-y-3.5 shadow-xl p-4 rounded-3xl bg-white cursor-pointer transform-gpu"
          >
            <div className="relative w-[414px] h-[316px] overflow-hidden rounded-2xl">
              <img
                src={card.img}
                alt={card.title}
                className="absolute w-full h-full inset-0 object-cover"
              />
              <div className="heart absolute top-4 left-2.5 w-16 h-16 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-[15px]">
                <FaRegHeart size={23} className="text-white" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="flex flex-col">
                <p className="stag font-medium text-black text-[32px]">
                  {card.title}
                </p>
                <p className="stag font-normal text-lg text-[#959595] -mt-1">
                  {card.subtitle}
                </p>
                <p className="stag mt-3.5 text-black font-bold text-lg">
                  {card.price}
                </p>
              </div>
              <div className="arrow self-end w-16 h-16 rounded-full flex items-center justify-center bg-[#151515]">
                <FaArrowRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
