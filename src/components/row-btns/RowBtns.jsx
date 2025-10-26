export default function RowBtns() {
  return (
    <section className="max-w-[1500px] mx-auto flex lg:justify-between justify-center lg:flex-nowrap flex-wrap items-center font=lufga font-medium text-[26px] tracking-tighter mt-16">
      <div className="flex items-center md:flex-nowrap flex-wrap justify-center">
        <button className="py-3 px-10 capitalizes bg-white text-black border border-[#0D0D0D]/70 focus:bg-black focus:text-white hover:bg-black hover:text-white transition-all duration-300 rounded-full">
          Outdoor Plant
        </button>
        <button className="py-3 px-10 capitalizes bg-white text-black border border-[#0D0D0D]/70 focus:bg-black focus:text-white hover:bg-black hover:text-white transition-all duration-300 rounded-full">
          Indoor Plant
        </button>
        <button className="py-3 px-10 capitalizes bg-white text-black border border-[#0D0D0D]/70 focus:bg-black focus:text-white hover:bg-black hover:text-white transition-all duration-300 rounded-full">
          Flower Pot
        </button>
        <button className="py-3 px-10 capitalizes bg-white text-black border border-[#0D0D0D]/70 focus:bg-black focus:text-white hover:bg-black hover:text-white transition-all duration-300 rounded-full">
          Potted Plant
        </button>
      </div>
      <button className="py-3 px-10 capitalizes bg-white text-black border border-[#0D0D0D]/70 focus:bg-black focus:text-white hover:bg-black hover:text-white transition-all duration-300 rounded-full">
        See All
      </button>
    </section>
  );
}
