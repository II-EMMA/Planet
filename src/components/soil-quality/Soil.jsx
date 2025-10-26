import SoilImage from "@/assets/images/soil.svg";

export default function Soil() {
  return (
    <section className="flex flex-col mt-[182px] max-w-[1500px] mx-auto font-lufga items-center">
      <p className="font-extrabold text-black md:text-[115px] text-[90px] w-full text-center md:leading-[110px] leading-[80px] mb-5">
        Quality Plants and Curated Goods
      </p>
      <p className="max-w-[920px] font-medium text-lg text-[#131313] text-center mx-2.5">
        We offer a carefully curated selection of indoor and outdoor plants,
        hand crafted home goods that put quality ahead of quantity, and living
        art made right here in the shop: terrariums, landscapes, arrangements,
        vessels, and holders.
      </p>
      <img
        src={SoilImage.src}
        alt="Soil Image"
        className="max-w-[807px] max-h-[470px] mt-[73px] lg:block hidden"
      />
      <div></div>
    </section>
  );
}
