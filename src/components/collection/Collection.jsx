"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import CollectionCardOne from "@/assets/images/collection-1.jpg";
import CollectionCardTwo from "@/assets/images/collection-2.jpg";
import CollectionCardThree from "@/assets/images/collection-3.jpg";
import CollectionCardFour from "@/assets/images/collection-4.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function Collection() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef([]);

  useEffect(() => {
    panelRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === active) {
        const tl = gsap.timeline();
        tl.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power4.out",
        }).fromTo(
          el.querySelectorAll("p"),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        );
      } else {
        gsap.to(el, {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });
  }, [active]);

  const cards = [
    {
      title: "Philodendron",
      img: CollectionCardOne.src,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Calathea",
      img: CollectionCardTwo.src,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Air Purifying",
      img: CollectionCardThree.src,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.",
    },
    {
      title: "Low Light Tolerant",
      img: CollectionCardFour.src,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
    },
  ];

  return (
    <section className="flex flex-col font-lufga max-w-[1500px] mx-auto mt-[200px]">
      <p className="font-extrabold text-black md:text-[125px] text-[75px] self-center mb-16 xl:text-start text-center md:leading-32 sm:leading-24 leading-20">
        Indoor Collection
      </p>

      {/* Top Row */}
      <div className="flex lg:flex-row flex-col gap-x-5 items-center mb-6">
        {cards.slice(0, 2).map((card, i) => {
          const index = i;
          return (
            <div
              key={card.title}
              className={`${
                index === 0 ? "lg:w-3/5 w-full" : "lg:w-2/5 w-full"
              } relative h-[371px] rounded-[20px] bg-cover bg-center`}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="absolute flex flex-col justify-between text-white font-lufga w-full h-full border">
                <button
                  onClick={() => setActive(index)}
                  className={`self-end cursor-pointer w-16 h-16 rounded-full mt-3 mr-2 flex items-center justify-center transition-colors ${
                    active === index ? "bg-white" : "border border-white"
                  }`}
                >
                  <FaArrowRight
                    className={active === index ? "text-black" : "text-white"}
                    size={22}
                  />
                </button>

                {/* Default: only title */}
                <p
                  className={`font-bold sm:text-7xl text-[52px] leading-14 text-white mx-5 mb-[77px] ${
                    active === index ? "opacity-0" : ""
                  }`}
                >
                  {card.title}
                </p>

                {/* Active: blur panel */}
                {active === index && (
                  <div
                    ref={(el) => (panelRefs.current[index] = el)}
                    className="rounded-3xl bg-white/10 backdrop-blur-[25px] mx-2.5 mb-2.5 flex flex-col py-5 px-6 gap-y-6 opacity-0 translate-y-5 absolute bottom-0 left-0 right-0"
                  >
                    <p className="font-bold sm:text-7xl text-[52px] leading-14 text-white">
                      {card.title}
                    </p>
                    <p className="font-normal text-base text-white max-w-[717px]">
                      {card.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Row */}
      <div className="flex lg:flex-row flex-col gap-x-5 items-center">
        {cards.slice(2).map((card, i) => {
          const index = i + 2;
          return (
            <div
              key={card.title}
              className={`${
                index === 2 ? "lg:w-2/5 w-full" : "lg:w-3/5 w-full"
              } relative h-[371px] rounded-[20px] bg-cover bg-center`}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="absolute flex flex-col justify-between text-white font-lufga w-full h-full border">
                <button
                  onClick={() => setActive(index)}
                  className={`self-end cursor-pointer w-16 h-16 rounded-full mt-3 mr-2 flex items-center justify-center transition-colors ${
                    active === index ? "bg-white" : "border border-white"
                  }`}
                >
                  <FaArrowRight
                    className={active === index ? "text-black" : "text-white"}
                    size={22}
                  />
                </button>

                {/* Default: only title */}
                <p
                  className={`font-bold sm:text-7xl text-[52px] leading-14 text-white mx-5 mb-[77px] ${
                    active === index ? "opacity-0" : ""
                  }`}
                >
                  {card.title}
                </p>

                {/* Active: blur panel */}
                {active === index && (
                  <div
                    ref={(el) => (panelRefs.current[index] = el)}
                    className="rounded-3xl bg-white/10 backdrop-blur-[25px] mx-2.5 mb-2.5 flex flex-col py-5 px-6 gap-y-5.5 opacity-0 translate-y-5 absolute bottom-0 left-0 right-0"
                  >
                    <p className="font-bold sm:text-7xl text-[52px] leading-14 text-white">
                      {card.title}
                    </p>
                    <p className="font-normal text-base text-white max-w-[717px]">
                      {card.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ==>Here with the scalling hover effect

// ("use client");
// import { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import CollectionCardOne from "@/assets/images/collection-1.jpg";
// import CollectionCardTwo from "@/assets/images/collection-2.jpg";
// import CollectionCardThree from "@/assets/images/collection-3.jpg";
// import CollectionCardFour from "@/assets/images/collection-4.jpg";
// import { FaArrowRight } from "react-icons/fa6";

// export default function Collection() {
//   const [active, setActive] = useState(0);
//   const panelRefs = useRef([]);
//   const cardRefs = useRef([]); // refs for card containers

//   useEffect(() => {
//     // Animate blur panels
//     panelRefs.current.forEach((el, i) => {
//       if (!el) return;

//       if (i === active) {
//         const tl = gsap.timeline();
//         tl.to(el, {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.6,
//           ease: "power4.out",
//         }).fromTo(
//           el.querySelectorAll("p"),
//           { autoAlpha: 0, y: 20 },
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.5,
//             stagger: 0.1,
//             ease: "power3.out",
//           },
//           "-=0.3"
//         );
//       } else {
//         gsap.to(el, {
//           autoAlpha: 0,
//           y: 20,
//           duration: 0.5,
//           ease: "power2.inOut",
//         });
//       }
//     });

//     // Hover scale effect for cards
//     cardRefs.current.forEach((card) => {
//       if (!card) return;
//       const bg = card.querySelector(".bg-layer");
//       if (!bg) return;

//       card.addEventListener("mouseenter", () => {
//         gsap.to(bg, { scale: 1.1, duration: 0.6, ease: "power3.out" });
//       });
//       card.addEventListener("mouseleave", () => {
//         gsap.to(bg, { scale: 1, duration: 0.6, ease: "power3.inOut" });
//       });
//     });
//   }, [active]);

//   const cards = [
//     {
//       title: "Philodendron",
//       img: CollectionCardOne.src,
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
//     },
//     {
//       title: "Calathea",
//       img: CollectionCardTwo.src,
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
//     },
//     {
//       title: "Air Purifying",
//       img: CollectionCardThree.src,
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
//     },
//     {
//       title: "Low Light Tolerant",
//       img: CollectionCardFour.src,
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
//     },
//   ];

//   const renderCard = (card, index, sizeClass) => (
//     <div
//       key={card.title}
//       ref={(el) => (cardRefs.current[index] = el)}
//       className={`${sizeClass} relative h-[371px] rounded-[20px] overflow-hidden`}
//     >
//       {/* Background layer that scales */}
//       <div
//         className="bg-layer absolute inset-0 bg-cover bg-center will-change-transform"
//         style={{ backgroundImage: `url(${card.img})` }}
//       />

//       {/* Overlay content */}
//       <div className="absolute flex flex-col justify-between text-white font-lufga w-full h-full border">
//         <button
//           onClick={() => setActive(index)}
//           className={`self-end w-16 h-16 rounded-full mt-3 mr-2 flex items-center justify-center transition-colors ${
//             active === index ? "bg-white" : "border border-white"
//           }`}
//         >
//           <FaArrowRight
//             className={active === index ? "text-black" : "text-white"}
//             size={22}
//           />
//         </button>

//         {/* Default: only title */}
//         <p className="font-bold text-7xl text-white mx-5 mb-[77px]">
//           {card.title}
//         </p>

//         {/* Active: blur panel */}
//         {active === index && (
//           <div
//             ref={(el) => (panelRefs.current[index] = el)}
//             className="rounded-3xl bg-white/10 backdrop-blur-[25px] mx-2.5 mb-2.5 flex flex-col py-5 px-6 gap-y-6 opacity-0 translate-y-5 absolute bottom-0 left-0 right-0"
//           >
//             <p className="font-bold text-7xl text-white">{card.title}</p>
//             <p className="font-normal text-base text-white max-w-[717px]">
//               {card.desc}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <section className="flex flex-col font-lufga max-w-[1500px] mx-auto mt-[200px]">
//       <p className="font-extrabold text-black text-[125px] self-center mb-16">
//         Indoor Collection
//       </p>

//       {/* Top Row */}
//       <div className="flex gap-x-5 items-center mb-6">
//         {renderCard(cards[0], 0, "w-3/5")}
//         {renderCard(cards[1], 1, "w-2/5")}
//       </div>

//       {/* Bottom Row */}
//       <div className="flex gap-x-5 items-center">
//         {renderCard(cards[2], 2, "w-2/5")}
//         {renderCard(cards[3], 3, "w-3/5")}
//       </div>
//     </section>
//   );
// }
