import { useContext } from "react";
import { LikesContext } from "../contexts/LikesContext";

// Custom hook to access the LikesContext
export const useLikesContext = () => {
  const context = useContext(LikesContext);
  
  if (context === undefined) {
    throw new Error("Ensure you use `useLikesContext` within a `LikesProvider`");
  }

  return context;
};
