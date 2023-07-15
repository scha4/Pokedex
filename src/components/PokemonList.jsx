import React from "react";
import PokeCard from "./Card";

function PokemonList() {
  const cardData = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },
  ];

  return (
    <>
      <div>
        {cardData.map((card, index) => (
          <PokeCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
