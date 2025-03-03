"use client";

import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import GameFilter from "@/components/GameFilter";
import Header from "@/components/Header";
import { mockGames } from "@/data/mockData";
import { useState } from "react";

export default function Home() {
  const [filterGame, setFilterGame] = useState<string>("All");
  return (
    <>
      <Header />
      <section>
        {/* Hero */}
        <div className="relative w-screen bg-[url('/hero-bg.webp')] bg-cover bg-center  p-5 xl:px-10 text-white py-30 flex flex-col gap-5 items-start rounded-lg">
          <div className="container mx-auto">
            <div className="bg-black top-0 left-0 w-full h-full opacity-50 absolute"></div>
            <div className="container mx-auto flex flex-col gap-5 items-start">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold z-10">Play Free Games in Seconds</h1>
              <p className="z-10 xl:text-2xl">🚀 Play free game in seconds. No login or sign in required just for fun</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-0 xl:p-3">
          {/* Category Navigation */}
          <GameFilter filterGame={filterGame} setFilterGame={setFilterGame} />
          {/* Game List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {mockGames
              .filter((game) => {
                return game.category === filterGame || filterGame === "All";
              })
              .map(({ id, image, title, category, link }) => (
                <GameCard image={image} title={title} category={category} link={link} key={id} />
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
