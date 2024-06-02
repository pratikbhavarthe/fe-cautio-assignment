import { useState, useEffect } from "react";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { useFavouritesContext } from "../hooks/useFavouritesContext";
import Label from "./Label";


export type TPokemonRes = {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: { ability: { name: string } }[];
};

export type TPokemonCardProps = {
  data: TPokemonRes;
  isPending?: boolean;
  position?: number;
  id?: number;
  shift?: () => void;
  onlyViewMode: boolean;
};

const PokemonCard = ({
  data,
  isPending,
  position,
  id,
  shift,
  onlyViewMode,
}: TPokemonCardProps) => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [scope, animate] = useAnimate();
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(rotateValue, [-200, 0, 200], [0, 1, 0]);
  const translateValue = useTransform(rotateValue, [-10, 0, 10], [-100, 0, 100]);
  const { favourites, setFavourites } = useFavouritesContext();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const onLikeOrDislike = (isLike: boolean, shiftImmediately?: boolean) => {
    if (isLike)
      setFavourites((currentFavourites) => [...currentFavourites, data]);

    animate(scope.current, { x: isLike ? 100 : -100 });
    setTimeout(() => shift?.(), shiftImmediately ? 0 : 140);
  };

  useEffect(() => {
    if (scope.current) {
      animate(scope.current, {
        translateY: position === 1 ? 0 : position === 2 ? 30 : 60,
        scaleX: position === 1 ? 1 : position === 2 ? 0.95 : 0.85,
      });
    }
  }, [animate, position, scope]);

  useEffect(() => {
    if (scope.current && favourites.length === 0 && position === 1 && !isPending) {
      setTimeout(() => {
        animate(scope.current, {
          x: [0, 10, 0, -10, 0],
          duration: 3,
        });
      }, 1000);
    }
  }, [animate, favourites.length, position, scope, isPending]);

  return (
    <motion.div
      drag={position === 1 && !isPending && !onlyViewMode ? "x" : false}
      ref={scope}
      key={id}
      className={`${
        onlyViewMode ? "static" : "absolute flex-grow"
      } w-[min(90vw,400px)] h-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-purple-100"
      } px-8 pt-5 pb-2 shadow-lg flex-grow max-w-[min(100vw,500px)] items-center rounded-3xl`}
      style={{
        x: motionValue,
        rotate: rotateValue,
        translateX: translateValue,
        opacity: opacityValue,
        zIndex: position === 1 ? 3 : position === 3 ? 1 : 2,
      }}
      dragConstraints={{ right: 1, left: 1 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 90) {
          onLikeOrDislike(true, true);
        } else if (info.offset.x < -90) {
          onLikeOrDislike(false, true);
        }
      }}
    >
      {isPending ? (
        <div className="grid place-content-center h-full">
          <motion.img
            key="loading"
            initial={{ rotate: 0 }}
            animate={{ rotate: [-360, 0] }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1 }}
            src="/pokeball.svg"
            className="w-14 h-14 object-contain"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center h-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            draggable={false}
            className="w-60 object-contain h-60 my-2 mx-auto"
            src={data?.sprites.other.dream_world.front_default}
          />
          <h4 className="text-2xl capitalize">{data?.name}</h4>
          <div className="flex flex-wrap gap-2 mt-3 mb-2">
            {data?.abilities.map(({ ability }) => (
              <Label key={ability.name} text={ability.name} />
            ))}
          </div>
          {!onlyViewMode && (
            <div className="flex justify-center mt-10 mb-10 w-full self-baseline">
              <button
                className="bg-red-400 px-4 py-2 rounded-lg mr-4 hover:bg-red-500 w-full"
                onClick={() => onLikeOrDislike(false)}
              >
                Dislike
              </button>
              <button
                className="px-4 py-2 bg-green-400 rounded-lg ml-4 w-full hover:bg-green-500"
                onClick={() => onLikeOrDislike(true)}
              >
                Like
              </button>
            </div>
          )}
        </div>
      )}
      {/* Example of using the toggleDarkMode function */}
      <button
        className="absolute top-4 right-4 bg-blue-500 hover:bg-cyan-600 px-3 py-1 rounded"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </motion.div>
  );
};

export default PokemonCard;
