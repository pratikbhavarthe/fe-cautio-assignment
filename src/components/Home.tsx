import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid place-content-center h-full">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="w-[min(90vw,380px)] h-[min(90vh,300px)] bg-red-200 px-8 bg-opacity-95 shadow-lg flex flex-col justify-evenly items-center rounded-3xl">

                <div className="grid place-content-center mt-3">
                    <img src="/pokeswipelogo.png" alt="PokéSwipe Logo" className="w-40 h-auto object-contain"/>
                </div>

                <div className="w-full text-center">
                    <h4 className="my-1 text-xl">Here's how to play PokéSwipe</h4>
                    <p className="text-sm">Pokémon show up one by one</p>
                    <p className="text-sm">Swipe or tap the "Like" or "Dislike" Button.</p>
                    <p className="text-sm">Create your dream team</p>
                </div>

                <Link to="/swipe" className="w-full px-2 py-3 text-center block cursor-pointer rounded-xl mx-14 bg-[#12EB90] text-white hover:bg-[#32FCA7]">
                    Let's Start
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;
