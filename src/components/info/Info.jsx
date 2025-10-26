import VideoImage from "@/assets/images/planet-heart.svg";
import ImageText from "@/assets/images/text-lab-planet.svg";

export default function Info() {
  return (
    <section className="flex px-8  2xl:flex-nowrap gap-x-2 items-start gap-y-5 lg:justify-between lg:text-start text-center justify-center flex-wrap max-w-[1500px] mx-auto mt-20">
      <div className="flex flex-col gap-y-[60px] text-black font-lufga max-w-[292px]">
        <p className="font-extrabold text-[44px] leading-11">
          Plants for the People
        </p>
        <p className="text-[13px] font-normal">
          We want our Visitors to be inspire to get their hands dirty
        </p>
      </div>
      <img
        src={VideoImage.src}
        alt="Video Image"
        className="hover:grayscale-0 grayscale-100 transition-all duration-300 self-start 2xl:block hidden"
      />
      <div className="max-w-[688px] font-lufga text-black font-semibold text-4xl leading-snug lg:block hidden">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="whitespace-nowrap">Each plant is cared</span>
          <span className="shrink-0">
            <img src={ImageText.src} alt="Image Text" />
          </span>
          <span className="whitespace-nowrap">for by our</span>
        </div>
        <div>
          <span className="">
            horticultural experts, so they are as happy and healthy as they get.
          </span>
        </div>
      </div>
      <p className="max-w-[688px] font-lufga text-black font-semibold text-4xl leading-snug lg:hidden block">
        Each plant is cared Image Text for by our horticultural experts, so they
        are as happy and healthy as they get.
      </p>
    </section>
  );
}
