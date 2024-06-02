import { MutableRefObject, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { generateRandomNumbers } from "../utils"; 
import PokeCardDataFetcher from "../components/PokeCardDataFetcher";

export type TSwipePokemonProps = {
  idIndexRef: MutableRefObject<number>;
};

// Generate a list of 100 random non-repeating numbers
const randomNonRepeatingNumbers = generateRandomNumbers();

const SwipePokemon = ({ idIndexRef }: TSwipePokemonProps) => {
  // Initialize state with the first three random Pokemon IDs
  const [currentPokemonIds, setCurrentPokemonIds] = useState(() => [
    randomNonRepeatingNumbers[idIndexRef.current++],
    randomNonRepeatingNumbers[idIndexRef.current++],
    randomNonRepeatingNumbers[idIndexRef.current++],
  ]);

  // Function to shift Pokemon IDs after swiping
  const shift = () => {
    setCurrentPokemonIds((current) => {
      const [, ...rest] = current; // Remove the first element from currentPokemonIds
      // Add a new random Pokemon ID to the end of the array
      return [...rest, randomNonRepeatingNumbers[idIndexRef.current++]];
    });
  };

  return (
    <div className="h-full grid place-content-center">
      <div className="grid place-content-center">
        <img src="/pokeswipe.png" className="w-48 h-auto object-contain" alt="Pokémon Swipe Logo" />
      </div>
      <div className="relative h-[min(90vh,500px)] flex place-content-center">
        <AnimatePresence>
          {currentPokemonIds.map((id, index) => (
            <PokeCardDataFetcher
              key={id}
              id={id}
              shift={shift}
              position={index + 1} // Position starts from 1
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SwipePokemon;