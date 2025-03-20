"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

// Define the type for the context value
interface FilterGameContextType {
  filterGame: string;
  setFilterGame: Dispatch<SetStateAction<string>>;
}

// Create the context with a proper default value
const FilterGameContext = createContext<FilterGameContextType | undefined>(undefined);

const FilterGameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterGame, setFilterGame] = useState<string>("All");

  return (
    <FilterGameContext.Provider value={{ filterGame, setFilterGame }}>
      {children}
    </FilterGameContext.Provider>
  );
};

export { FilterGameContext, FilterGameContextProvider };