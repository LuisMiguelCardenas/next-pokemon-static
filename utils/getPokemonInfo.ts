import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async ( arg: string) => {


    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${arg}`);
  
    return { 
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
}
