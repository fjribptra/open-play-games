"use client";

import GameCard from "@/components/GameCard";
import { FilterGameContext } from "@/context/filterGameContext";

import { mockGames } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const context = useContext(FilterGameContext);

  if (!context) {
    throw new Error("FilterGameContext must be used within a FilterGameContextProvider");
  }

  const { filterGame } = context;
  return (
    <>
      <section className="bg-gradient-to-b from-fuchsia-950 via-black to-fuchsia-950">
        {/* Hero */}
        <div className="sticky h-[400px] z-0 w-screen overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/hero-bg-2.jpg')] p-5 xl:px-10 text-white py-30 flex flex-col gap-5 items-start rounded-lg">
          <div className="container mx-auto">
            <div className="bg-black top-0 right-0 left-0 w-full h-full opacity-50 absolute"></div>
            <div className="container fixed left-0 right-0 z-0 mx-auto flex flex-col gap-5 items-center p-5">
              <h1 className="text-4xl sm:text-5xl xl:text-5xl font-bold  text-center xl:w-[1000px]">Play free game in seconds. No login or sign in required just for fun</h1>
              <Link href="/game" className="bg-fuchsia-500 hover:bg-fuchsia-800 text-white font-bold py-3 px-5 rounded-full cursor-pointer">See all games</Link>
              {/* <p className="z-10 xl:text-2xl">🚀 Play free game in seconds. No login or sign in required just for fun</p> */}
            </div>
          </div>
        </div>
        <div className="sticky top-50 mx-auto px-0 xl:px-3 py-10 flex flex-col z-50 bg-gradient-to-b from-black to-fuchsia-900">
          <div className="container mx-auto">
            {/* Alpha Season 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
            <div className="px-5 md:p-10">
              <Image className="rounded-lg w-full" src={"/games-openplay-studio-landing-page.png"} alt="games openplay studio landing page" width={500} height={500} />
            </div>
            <div className="text-white px-5 md:p-10 lg:p-0 flex flex-col gap-5 justify-center">
              <h2 className="font-semibold text-4xl">Take a look back at Alpha Season 4</h2>
              <p className="text-xl">Alpha Season 4 was legendary! As we prepare for our next big event, take some time to relive the moments that made this the best Alpha Season yet. And get ready—more big things are coming soon!</p>
            </div>
          </div>
          {/* See all games */}
          <div className="flex justify-between items-center mx-5 md:mx-10">
          <h2 className="font-semibold text-3xl text-white">See all games</h2>
          <Link className="underline text-white hidden lg:block" href={"/game"}>Discover more</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row m-5 md:m-10">
            {mockGames
              .filter((game) => {
                return game.category === filterGame || filterGame === "All";
              }).slice(0, 4)
              .map(({ id, image, title, category }) => (
                <GameCard image={image} title={title} category={category} id={id} key={id} />
              ))}
          </div>
         
          </div>
        </div>
      </section>
    </>
  );
}
