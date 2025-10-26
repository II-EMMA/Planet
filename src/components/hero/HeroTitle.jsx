import LeaveText from "@/assets/images/leave.svg";

export default function HeroTitle() {
  return (
    <div className="flex justify-center gap-x-0">
      <div className="relative text-white font-lufga font-extrabold flex flex-col">
        <p className="lg:self-start md:text-start text-center self-center font-lufga font-semibold text-white md:text-4xl text-7xl mb-4 lg:-mb-20 md:-mb-12">
          Plantique
          <span className="md:hidden block"> Growth</span>
        </p>
        <div className="self-center md:flex items-center xl:text-[300px] lg:text-[270px] text-[180px] hidden">
          <span className="relative z-30 inline-block bottom-7">grow</span>

          <img
            src={LeaveText.src}
            alt="Leave"
            className="relative z-20 inline-block lg:mx-[-135px] mx-[-100px] lg:h-[329px] h-[180px] lg:w-[318px] w-[200px] rotate-20 lg:top-10 top-6"
          />
          <span className="relative z-10 inline-block ">th</span>
        </div>
        <p className="lg:self-end self-center lg:text-start text-center lg:mr-28 lg:-mt-24 md:-mt-10 lg:max-w-[760px] md:mx-0 mx-3 font-lufga font-medium text-white/80 text-xl">
          We're your online houseplant destination. We offer a wide range of
          houseplants and accessories shipped directly from our (greenhouse to
          yours!
        </p>
      </div>
    </div>
  );
}
