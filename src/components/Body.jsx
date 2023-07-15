import React from "react";
import { useContext } from "react";
import { searchbarContext } from "../context";
import PokeCard from "./Card";
import PokemonList from "./PokemonList";
function Body() {
  const { pokemonData } = useContext(searchbarContext);
  // {
  //   PokeCard.map(PokeCard, (Poke) => <div className="Row">{Poke}</div>);
  // }
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <PokeCard /> */}
        <PokemonList />
        <p>Name: {pokemonData?.name}</p>
        <p>ID: {pokemonData?.id}</p>
        <p>Type: {pokemonData?.types[0].type.name}</p>
        <img
          src={pokemonData?.sprites.other["official-artwork"].front_default}
        />
      </div>
    </>
  );
}

export default Body;
