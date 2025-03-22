export interface Game {
    id: string;
    title: string;
    slug: string;
    category: string;
    image: string;
    link: string;
    description: string;
  }

export interface GameCardProps {
    image: string;
    title: string;
    category: string;
    slug: string;
}

export interface GameFilterProps {
  filterGame: string;
  setFilterGame: (category: string) => void;
}