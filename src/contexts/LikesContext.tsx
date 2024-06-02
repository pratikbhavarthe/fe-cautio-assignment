import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TPokemonRes } from "../hooks/useFetchPokemon";

// Define the shape of the context value using an interface
interface LikesContextType {
  likes: TPokemonRes[];
  setLikes: Dispatch<SetStateAction<TPokemonRes[]>>;
}

// Create a context for managing liked Pokémon data
export const LikesContext = createContext<LikesContextType>({
  likes: [],
  setLikes: () => {}, // Default empty setter function
});

// Provider component that manages the state of liked Pokémon
export const LikesProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the list of liked Pokémon
  const [likes, setLikes] = useState<TPokemonRes[]>([]);

  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      {children} {/* Render the child components wrapped by the provider */}
    </LikesContext.Provider>
  );
};
