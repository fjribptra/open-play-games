import { GameFilterProps } from '@/types'
import React from 'react'

interface GameFilterButtonProps {
  filterGame: string
  setFilterGame: (category: string) => void
  gameCategory: string
}

const GameFilterButton = ({filterGame, setFilterGame, gameCategory}: GameFilterButtonProps) => {
  return (
    <button className={`px-5 py-2 border border-fuchsia-500 text-fuchsia-500 rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === gameCategory ? 'bg-white text-black' : null}`} onClick={() => setFilterGame(gameCategory)}>
    {gameCategory}
  </button>
  )
}

const GameFilter = ({filterGame, setFilterGame}: GameFilterProps) => {
  return (
    <div className="flex gap-5 p-5 overflow-scroll">
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="All" />
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="Action" />
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="Arcade" />
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="Puzzle" />
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="Adventure" />
              <GameFilterButton setFilterGame={setFilterGame} filterGame={filterGame} gameCategory="Education" />
              {/* <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "All" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("All")}>
                All
              </button>
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "Action" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("Action")}>
                Action
              </button>
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "Arcade" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("Arcade")}>
                Arcade
              </button>
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "Puzzle" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("Puzzle")}>
                Puzzle
              </button>
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "Adventure" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("Adventure")}>
                Adventure
              </button>
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "Education" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("Education")}>
                Education
              </button> */}
          </div>
  )
}

export default GameFilter
