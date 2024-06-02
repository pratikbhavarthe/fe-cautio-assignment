import { useFetchPokemon } from "../hooks/useFetchPokemon";
import PokemonCard from "./PokemonCard";

export type TPokemonCardDataAccessProps = {
  id: number;
  position: number;
  shift: () => void;
};

const PokemonCardDataAccess = ({
  id,
  position,
  shift,
}: TPokemonCardDataAccessProps) => {
  const { data, isPending } = useFetchPokemon(id); // Fetch Pokemon data and pending state

  // Render PokemonCard with fetched data and props
  return (
    <PokemonCard data={data} id={id} shift={shift} isPending={isPending} position={position}
      key={id} // Ensure each card has a unique key
      onlyViewMode={false} // Enable all card functionalities
    />
  );
};

export default PokemonCardDataAccess;