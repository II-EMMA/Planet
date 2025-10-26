import FooterImage from "@/assets/images/footer-bg.jpg";
import ScienceLabIcon from "@/assets/images/ai-science-lab.svg";

export default function Footer() {
  return (
    <footer className="relative max-w-[1500px] mx-auto h-[775px] rounded-[20px] overflow-hidden font-lufga ">
      {/* Background layer with brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${FooterImage.src})` }}
      />

      {/* Content layer */}
      <div className="relative z-10 p-5 flex flex-col items-center text-white font-lufga w-full h-full">
        <div className="flex items-center w-full max-w-[1000px]">
          <span className="flex-1 h-px bg-linear-to-l from-white via-white/60 to-transparent" />

          <div className="flex items-center justify-center border border-white p-6 bg-white/10 rounded-full">
            <img src={ScienceLabIcon.src} alt="Science Lab icon" />
          </div>

          <span className="flex-1 h-px bg-linear-to-r from-white via-white/60 to-transparent" />
        </div>
        <p className="text-white font-bold sm:text-[95px] text-[65px] tracking-tight mt-14 text-center sm:leading-20 leading-14">
          Join the Community!
        </p>
        <p className="md:mt-[53px] md:mb-0 my-10 text-white font-light text-2xl tracking-tight max-w-[640px] text-center mx-3">
          Subscribe to The Forager to receive monthly plant tips, store updates,
          promotions & more
        </p>
        <div className=" sm:mt-[53px] rounded-4xl bg-white md:py-[53px] py-8 lg:px-[164px] flex flex-col items-center w-full pb-8">
          <div className="flex flex-row px-[60px] items-center lg:border lg:border-black rounded-full xl:flex-nowrap flex-wrap justify-center">
            <button className="rounded-full lg:py-5 py-1 border lg:px-10 px-4 border-black text-black font-medium lg:text-[26px] text-lg visited:underline hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-300">
              Instagram
            </button>
            <button className="rounded-full lg:py-5 py-1 border lg:px-10 px-4 border-black text-black font-medium lg:text-[26px] text-lg visited:underline hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-300">
              Twitter
            </button>
            <button className="rounded-full lg:py-5 py-1 border lg:px-10 px-4 border-black text-black font-medium lg:text-[26px] text-lg visited:underline hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-300">
              Linkedin
            </button>
            <button className="rounded-full lg:py-5 py-1 border lg:px-10 px-4 bg-[#26B245] border-[#26B245] text-white font-medium lg:text-[26px] text-lg visited:underline hover:bg-white hover:text-black focus:bg-white focus:text-black hover:border-black focus:border-black transition-all duration-300">
              Whatsapp
            </button>
            <button className="rounded-full lg:py-5 py-1 border lg:px-10 px-4 border-black text-black font-medium lg:text-[26px] text-lg visited:underline hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-300">
              Pintrest
            </button>
          </div>
          <span className="md:my-10 my-5 block h-px w-full bg-linear-to-r from-transparent via-black  to to-transparent" />
          <p className="md:text-2xl text-lg font-light text-black tracking-tight">
            ©2023, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
