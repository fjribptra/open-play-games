export interface Game {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  }

export interface GameCardProps {
    image: string;
    title: string;
    category: string;
    link: string;
}

export interface GameFilterProps {
  filterGame: string;
  setFilterGame: (category: string) => void;
}