import Image from "next/image";
import { mockGames } from "@/data/mockData";
import Link from "next/link";
import { FaPlay, FaStar } from "react-icons/fa";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const game = mockGames.find((game) => game.slug === slug);
  
  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.',
    };
  }

  return {
    title: `${game.title} - Open Play Games`,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      images: [
        {
          url: game.image || '/fallback-image.jpg',
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: game.title,
      description: game.description,
      images: [game.image || '/fallback-image.jpg'],
    },
  };
}

// Define the params type separately
// type GamePageParams = {
//   id: string;
// };

// Define the props type using the Next.js expected format
// type Props = {
//   params: GamePageParams;
// };

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // console.log(await params)
  const slug = (await params).slug;
  const filteredGameData = mockGames.find((game) => game.slug === slug);

  // Rest of your component remains the same
  if (!filteredGameData) {
    return (
      <section className="bg-gradient-to-b from-black to-purple-900 text-white flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Game not found</h1>
      </section>
    );
  }

  return (
      <section className="bg-gradient-to-b from-black to-purple-900">
      <div className="w-screen h-[300px] overflow-hidden bg-black relative">
        <div className="bg-black w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-50 flex items-center justify-center">
          <h1 className="font-bold text-5xl z-50 opacity-100 text-white text-center p-5">{filteredGameData?.title}</h1>
        </div>
        <Image className="w-screen" src={filteredGameData.image || "/fallback-image.jpg"} width={500} height={500} alt={filteredGameData.title} />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-5 xl:grid-cols-3 p-5 md:p-10 text-white">
        <div className="xl:col-span-2 flex flex-col gap-5">
          <h3 className="text-xl border border-purple-500 px-3 py-2 rounded-lg w-fit text-purple-500">{filteredGameData.category}</h3>
          <h2 className="font-bold text-4xl">{filteredGameData.title}</h2>
          <p>{filteredGameData.description}</p>
          <Image className="w-full aspect-video rounded-lg" src={filteredGameData.image || "/fallback-image.jpg"} width={500} height={500} alt={filteredGameData.title} />
        </div>
        <div className="flex flex-col gap-3">
          <Link href={filteredGameData.link || "#"} className="bg-green-500 hover:bg-green-800 transition-all text-white p-3 rounded-md flex gap-3 items-center justify-center cursor-pointer">
            <FaPlay /> Play
          </Link>
          <div className="bg-black rounded-lg p-3 flex flex-col gap-5">
            <div className="flex gap-3">
              <Image className="rounded-full w-[50px]" src={"/pajri.jpeg"} alt="@pajribp developer" width={100} height={100} />
              <div className="flex flex-col">
                <p className="text-white font-semibold">Pajri</p>
                <Link className="text-blue-500" href="#">
                  @pajribp
                </Link>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <p className="font-semibold uppercase">release</p>
                <p>Mar 2, 2025</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold uppercase">last update</p>
                <p>Mar 20, 2025</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold uppercase">platform</p>
                <p>Web</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold uppercase">category</p>
                <p>{filteredGameData.category}</p>
              </div>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold uppercase">rating</p>
                <div className="text-yellow-400 flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold uppercase">comments</p>
                <div className="bg-slate-900 flex p-5 rounded-lg">
                  <p>No comments</p>
                </div>
              </div>
            {/* <p>View in game</p>
            <Image
              className="w-full aspect-video rounded-lg"
              src={filteredGameData.image || "/fallback-image.jpg"}
              width={500}
              height={500}
              alt={filteredGameData.title}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
