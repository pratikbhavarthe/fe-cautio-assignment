import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import SwipePokemon from "../routes/SwipePokemon";
import FavouritePokemons from "../routes/LikedPokemons";
import { paths } from "../constants";
import { useFavouritesContext } from "../hooks/useFavouritesContext";
import { motion } from "framer-motion";
import { useRef } from "react";

const App = () => {
  const { pathname } = useLocation();
  const isSwipeRoute = pathname === paths.swipe;
  const { favourites } = useFavouritesContext();
  const idIndexRef = useRef(0);

  return (
    <div
      className="h-screen overflow-auto relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg.jpg)' }}
    >
      <div className="absolute right-5 top-4">
        {isSwipeRoute && (
          <div className="grid place-content-center">
            <Link
              to={paths.favourites}
              className="relative flex justify-center items-center"
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: [0.5, 1] }}
                key={favourites.length}
                src="/heart.svg"
                className=" w-14 h-auto object-contain"
              />
              <div className="absolute top-[14px]  text-violet-300 text-lg">
                {favourites.length}
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="h-full">
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route
            path={paths.swipe}
            element={<SwipePokemon idIndexRef={idIndexRef} />}
          />
          <Route path={paths.favourites} element={<FavouritePokemons />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;