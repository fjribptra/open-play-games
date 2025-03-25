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
        <div className="sticky h-[500px] z-0 w-screen overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/hero-bg-3.jpg')] p-5 xl:px-10 text-white py-30 flex flex-col gap-5 items-start rounded-lg">
          <div className="container mx-auto flex flex-col items-center">
            <div className="bg-black top-0 right-0 left-0 w-full h-full opacity-50 absolute"></div>
            <div className="container fixed left-0 top-50 right-0 z-0 mx-auto flex flex-col gap-5 items-center p-5">
              <h1 className="text-4xl sm:text-5xl xl:text-5xl font-bold  text-center xl:w-[1000px]">Play free game in seconds. No login or sign in required just for fun</h1>
              <Link href="/game" className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 px-5 rounded-full cursor-pointer">See all games</Link>
              {/* <p className="z-10 xl:text-2xl">🚀 Play free game in seconds. No login or sign in required just for fun</p> */}
            </div>
          </div>
        </div>
        <div className="sticky border-t-4 border-slate-400 top-50 mx-auto px-0 xl:px-3 py-10 flex flex-col z-50 bg-gradient-to-b from-purple-900 via-black to-purple-900">
          <div className="container mx-auto">
            {/* Alpha Season 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
            <div className="px-5 md:p-10">
              <Image className="rounded-lg w-full" src={"/games-openplay-studio-landing-page.png"} alt="games openplay studio landing page" width={500} height={500} />
            </div>
            <div className="text-white px-5 md:p-10 lg:p-0 flex flex-col gap-5 justify-center">
              <h2 className="font-semibold text-4xl">Welcome to Open Play Games</h2>
              <p className="text-xl">Open Play Games is a free gaming platform where you can instantly play fun web games without any login required. We offer a variety of casual games that you can enjoy right in your browser. Our mission is to make gaming accessible and enjoyable for everyone.</p>
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
              .map(({ id, image, title, category, slug }) => (
                <GameCard image={image} title={title} category={category} slug={slug} key={id} />
              ))}
          </div>
          <Link className="mx-5 md:mx-10 underline text-white lg:hidden" href={"/game"}>Discover more</Link>
          </div>
          <div className="bg-[url('/squares-pattern.jpg')] mt-10 px-5 py-20 bg-cover bg-center bg-no-repeat flex flex-col gap-5 items-center text-center">
              <h2 className="text-white xl:text-4xl text-2xl font-bold">Ready to explore the world of games?</h2> 
              <p className="text-white xl:text-xl text-sm">Join our community and discover the best games for your enjoyment</p>
              <Link className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 px-5 rounded-full cursor-pointer" href={"/game"}>See all games</Link>
          </div>
        </div>
      </section>
    </>
  );
}
