import { Link } from "react-router-dom";
import PokemonCard, { TPokemonCardProps } from "../components/PokemonCard"; // Import PokemonCard component and its props type
import { useLikesContext } from "../hooks/useLikesContext"; // Custom hook to access favourites context
import { paths } from "../constatnts" // Constants for route paths

const LikedPokemons = () => {
  const { likes } = useLikesContext(); // Retrieve favourites array from context

  return (
    <div>
      {/* Back link to navigate to swipe page */}
      <Link className="ml-14 mt-1 mb-0 inline-block" to={paths.swipe}>
        Back
      </Link>
      {/* Display favourite Pokemon cards in a flex container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {likes.map((pokemon, index) => (
          // Render PokemonCard component in view mode only
          <PokemonCardWrapper key={index} data={pokemon} onlyViewMode={false} />
        ))}
      </div>
    </div>
  );
};

// Wrapper component for PokemonCard to ensure consistent props passing
const PokemonCardWrapper = ({ data }: TPokemonCardProps) => {
  return <PokemonCard data={data} onlyViewMode />;
};

export default LikedPokemons;
