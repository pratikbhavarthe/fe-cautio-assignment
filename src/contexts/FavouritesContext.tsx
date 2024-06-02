import { Dispatch, ReactNode, SetStateAction, createContext, useState} from "react";
import { TPokemonRes } from "../hooks/useFetchPokemon";

type TFavouritesContext = {
  favourites: TPokemonRes[];
  setFavourites: Dispatch<SetStateAction<TPokemonRes[]>>;
};

export const FavouritesContext = createContext<TFavouritesContext>({
  favourites: [],
  setFavourites: () => {},
});

export const FavouritesProvider = (props: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<TPokemonRes[]>([]);

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
