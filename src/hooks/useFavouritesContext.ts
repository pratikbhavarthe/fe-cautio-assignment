import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";

// Custom hook to access the LikesContext
export const useFavouritesContext = () => {
  const context = useContext(FavouritesContext);
  
  if (context === undefined) {
    throw new Error("Ensure you use `useLikesContext` within a `LikesProvider`");
  }

  return context;
};