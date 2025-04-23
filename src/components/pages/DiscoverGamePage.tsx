"use client"

import { useContext } from "react";
import GameCard from "../GameCard";
import GameFilter from "../GameFilter";
import { FilterGameContext } from "@/context/filterGameContext";
import { mockGames } from "@/data/mockData";

const DiscoverGamePage = () => {
    const context = useContext(FilterGameContext);

  if (!context) {
    throw new Error("FilterGameContext must be used within a FilterGameContextProvider");
  }

  const { filterGame, setFilterGame } = context;
    return (
        <section className="bg-gradient-to-b from-black to-purple-900">
          <div className="container mx-auto flex flex-col gap-10 px-5 py-10 md:px-10">
          <h2 className="text-5xl text-white font-semibold">Discover All Games</h2>
         {/* Category Navigation */}
         <GameFilter filterGame={filterGame} setFilterGame={setFilterGame} />
          {/* Game List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockGames
              .filter((game) => {
                return game.category === filterGame || filterGame === "All";
              })
              .map(({ id, image, title, category, slug }) => (
                <GameCard image={image} title={title} category={category} slug={slug} key={id} />
              ))}
          </div>
          </div>
        </section>
    );
}

export default DiscoverGamePage