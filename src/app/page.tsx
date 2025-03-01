import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";
import { mockGames } from "@/data/mockData";

export default function Home() {
  return (
    <>
      <Header/>
      <section>
        <div className="container mx-auto p-4">
          {/* Hero */}
          <div className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center  px-10 text-white py-30 flex flex-col gap-5 items-start rounded-lg">
            <div className="bg-black top-0 left-0 w-full h-full opacity-50 absolute"></div>
            <h1 className="text-4xl lg:text-5xl font-bold z-10">Play Free Games in Seconds</h1>
            <p className="z-10">Play free game in seconds. No login or sign in required just for fun</p>
          </div>
          {/* Category Navigation */}
          <div className="flex gap-5 p-5 overflow-scroll">
              <div className="px-5 py-2 border rounded-md bg-black text-white cursor-pointer">
                All
              </div>
              <div className="px-5 py-2 border rounded-md cursor-pointer">
                Action
              </div>
              <div className="px-5 py-2 border rounded-md cursor-pointer">
                Arcade
              </div>
              <div className="px-5 py-2 border rounded-md cursor-pointer">
                Puzzle
              </div>
              <div className="px-5 py-2 border rounded-md cursor-pointer">
                Adventure
              </div>
          </div>
          {/* Game List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mockGames.map(({id, image, title, category, link}) => (
              <GameCard image={image} title={title} category={category} link={link} key={id}/>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
