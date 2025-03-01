import { GameCardProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaPlay } from 'react-icons/fa'


const GameCard = ({image, title, category, link}: GameCardProps) => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-md">
              <Image className="w-full h-[250px]" src={image} width={200} height={200} alt={title}/>
              <div className="flex flex-col">
              <h2 className="font-bold">{title}</h2>
              <h3 className="text-gray-500">{category}</h3>
              </div>
              <Link href={link} className="bg-green-500 text-white p-3 rounded-md flex gap-3 items-center justify-center cursor-pointer" target="_blank">Play <FaPlay /></Link>
            </div>
  )
}

export default GameCard
