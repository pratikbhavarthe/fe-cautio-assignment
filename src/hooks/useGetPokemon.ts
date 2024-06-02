import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type TPokemonRes = {
    abilities: { ability: { name: string } }[];
    name: string;
    sprites: { other: { dream_world: { front_default: string } } };
};

const fetchPokemon = async (id: number) => {
    const response = await axios.get<TPokemonRes>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
};

export const useGetPokemon = (id: number) => {
    return useQuery<TPokemonRes>({
        queryFn: () => fetchPokemon(id),
        queryKey: ['pokemon', id]
    });
};
