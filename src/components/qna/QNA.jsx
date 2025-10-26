"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa6";

export default function QNA() {
  const [active, setActive] = useState(0);
  const contentRefs = useRef([]);
  const arrowRefs = useRef([]);

  const qnaItems = [
    {
      q: "Ordering for Delivery?",
      a: "We deliver plants right to your doorstep with care and speed. Our team ensures safe packaging, timely arrival, and updates throughout the process so you can track your order with confidence.",
    },
    {
      q: "Potting Services",
      a: "We offer potting on in-store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending on what supplies are used. Our staff will help you choose the right soil, pot size, and drainage setup to ensure your plant thrives. Visit us or call us for more details.",
    },
    {
      q: "Do we Ship Plants?",
      a: "Yes, we carefully package and ship plants nationwide. Each plant is wrapped with protective materials, labeled with care instructions, and shipped with eco-friendly packaging. Delivery times vary depending on your location, but we always prioritize plant health during transit.",
    },
    {
      q: "Ordering for Pick up?",
      a: "Place your order online and pick it up in-store at your convenience. We’ll prepare your plants in advance, double-check their condition, and have them ready for you. This option is perfect if you want to save on delivery fees or need your plants the same day.",
    },
  ];

  useEffect(() => {
    qnaItems.forEach((_, i) => {
      const content = contentRefs.current[i];
      const arrow = arrowRefs.current[i];
      if (!content || !arrow) return;

      if (i === active) {
        // expand smoothly
        gsap.fromTo(
          content,
          { height: 0, autoAlpha: 0 },
          {
            height: content.scrollHeight,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            onComplete: () => {
              content.style.height = "auto"; // reset to auto after animation
            },
          }
        );
        gsap.to(arrow, { rotate: -45, duration: 0.4, ease: "power3.out" });
      } else {
        // collapse smoothly
        gsap.to(content, {
          height: 0,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(arrow, { rotate: 45, duration: 0.4, ease: "power2.inOut" });
      }
    });
  }, [active]);

  return (
    <section className="lg:mt-[182px] mt-[135px] py-14 px-12 flex flex-col gap-y-10 font-lufga text-black max-w-[1500px] mx-auto">
      {qnaItems.map((item, i) => (
        <div
          key={i}
          className="flex justify-between border-2 border-black p-10 rounded-4xl"
        >
          <div className="flex flex-col gap-y-[26px] w-full">
            <p className="font-extrabold sm:text-[46px] text-2xl sm:leading-12">
              {item.q}
            </p>
            <div
              ref={(el) => (contentRefs.current[i] = el)}
              className="overflow-hidden"
              style={{
                height: i === active ? "auto" : 0,
                opacity: i === active ? 1 : 0,
              }}
            >
              <p className="font-medium text-2xl max-w-[1095px]">{item.a}</p>
            </div>
          </div>
          <div
            onClick={() => setActive(i === active ? null : i)}
            className="shrink-0 cursor-pointer border-2 border-black w-[60px] h-[60px] rounded-full flex items-center justify-center"
          >
            <FaArrowRight
              ref={(el) => (arrowRefs.current[i] = el)}
              size={28}
              className="text-black font-extrabold"
              style={{
                transform: i === active ? "rotate(-45deg)" : "rotate(45deg)",
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
