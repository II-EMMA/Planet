import HeroIMage from "@/assets/images/hero-bg.svg";
import Header from "../header/Header";
import HeroTitle from "./HeroTitle";
import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-screen-2xl flex justify-between flex-col min-h-[950px]">
      <img
        src={HeroIMage.src}
        alt="Hero section Image Planet"
        className="
          absolute top-0 left-[50%] -translate-x-[50%] z-[-1]
          w-full
          min-w-[1536px]
          min-h-[950px]
          h-auto
        "
      />
      <Header />
      <HeroTitle />
      <HeroInfo />
    </section>
  );
}
