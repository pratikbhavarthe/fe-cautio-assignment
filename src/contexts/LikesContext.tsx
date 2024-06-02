import { Dispatch, ReactNode, SetStateAction, createContext, UseState } from "react";


type TLikesContext = {
    setLikes: Dispatch<SetStateAction>;
};

export const LikesContext = createContext<TLikesContext> ({
    setLikes: () => {},
});

export const FavouritesProvider = (props: { children: ReactNode }) => {
    
}