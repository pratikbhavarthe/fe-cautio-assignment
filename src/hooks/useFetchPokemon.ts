import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the TPokemonRes type, accounting for possible undefined values
export type TPokemonRes = {
    abilities: Record<"ability", Record<"name", string>>[];
    name: string;
    sprites: Record<"other", Record<"dream_world", Record<"front_default", string>>>;
} | undefined;

const fetchPokemon = async (id: number) => {
    const response = await axios.get<TPokemonRes>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
};

export const useFetchPokemon = (id: number) => {
    return useQuery({
        queryFn: () => fetchPokemon(id),
        queryKey: ['pokemon', id]
    });
};
