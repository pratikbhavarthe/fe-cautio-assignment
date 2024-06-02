import { useGetPokemon } from "../hooks/useGetPokemon";
import PokemonCard from "./PokemonCard";

export type TPokemonCardDataFetcherProps = {
  id: number;
  shift: () => void;
  position: number;
};

const PokemonCardDataFetcher = ({
  id,
  position,
  shift,
}: TPokemonCardDataFetcherProps) => {
  const { data, isLoading } = useGetPokemon(id);

  if (isLoading || !data) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <PokemonCard
      data={data}
      id={id}
      shift={shift}
      isPending={isLoading}
      position={position}
      key={id}
      onlyViewMode={false}
    />
  );
};

export default PokemonCardDataFetcher;
