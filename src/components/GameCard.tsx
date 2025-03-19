import { GameCardProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// import { FaPlay } from 'react-icons/fa'


const GameCard = ({image, title, category, id}: GameCardProps) => {
  return (
    <Link href={'/game/' + id} className="flex flex-col gap-5 p-5 rounded-md">
              <div className="w-full aspect-video overflow-hidden rounded-lg ">
              <Image className="w-full h-full cursor-pointer hover:scale-110  transition-all" src={image} width={200} height={200} alt={title}/>
              </div>
              <div className="flex flex-col">
              <h2 className="font-bold text-white">{title}</h2>
              <h3 className="text-gray-300">{category}</h3>
              </div>
              {/* <Link href={link} className="bg-green-500 hover:bg-black transition-all text-white p-3 rounded-md flex gap-3 items-center justify-center cursor-pointer">Play <FaPlay /></Link> */}
            </Link>
  )
}

export default GameCard
