import Collection from "@/components/collection/Collection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import NewPlanets from "@/components/new-planets/NewPlanets";
import Cards from "@/components/planet-cards/Cards";
import QNA from "@/components/qna/QNA";
import RowBtns from "@/components/row-btns/RowBtns";
import Soil from "@/components/soil-quality/Soil";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Info />
      <RowBtns />
      <Cards />
      <NewPlanets />
      <Collection />
      <Soil />
      <QNA />
      <Footer />
    </main>
  );
}
