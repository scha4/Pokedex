import React from "react";
import { useContext } from "react";
import { searchbarContext } from "../context";

import PokemonList from "./PokemonList";
function Body() {
  const { pokemonData } = useContext(searchbarContext);

  return (
    <>
      <div className="flex flex-col items-center">
        <PokemonList />
        {/* <p>Name: {pokemonData?.name}</p>
        <p>ID: {pokemonData?.id}</p>
        <p>Type: {pokemonData?.types[0].type.name}</p> */}
        {/* <img
          src={pokemonData?.sprites.other["official-artwork"].front_default}
        /> */}
      </div>
    </>
  );
}

export default Body;
