import { GameFilterProps } from '@/types'
import React from 'react'

const GameFilter = ({filterGame, setFilterGame}: GameFilterProps) => {
  return (
    <div className="flex gap-5 p-5 overflow-scroll">
              <button className={`px-5 py-2 border rounded-md cursor-pointer transition-all hover:bg-black hover:text-white ${filterGame === "All" ? 'bg-black text-white' : null}`} onClick={() => setFilterGame("All")}>
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
              </button>
          </div>
  )
}

export default GameFilter
