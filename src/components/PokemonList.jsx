import React from "react";
import PokeCard from "./Card";
import { useContext } from "react";
import { searchbarContext } from "../context";

function PokemonList() {
  const { pokemonData } = useContext(searchbarContext);
  console.log(pokemonData);
  return (
    <>
      <div>
        {/* {cardData.map((card, index) => (
          <PokeCard key={index} title={card.title} content={card.content} />
        ))} */}
        {pokemonData?.map((pokemon) => (
          <div>{pokemon.name}</div>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
