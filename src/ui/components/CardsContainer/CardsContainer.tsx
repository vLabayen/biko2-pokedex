import React from "react";
import { Card } from "../card/Card";
import "./cardsContainer.css";

export const CardsContainer = () => {
  return (
    <div className="cardsContainer">
      <Card
        pokeID={3}
        pokemonName="bulbasaur"
        pokemonTypes={["grass", "poison"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        pokeID={1}
        pokemonName="charmander"
        pokemonTypes={["fire"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        pokeID={9}
        pokemonName="squirtle"
        pokemonTypes={["water"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        pokeID={3}
        pokemonName="bulbasaur"
        pokemonTypes={["grass", "poison"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        pokeID={1}
        pokemonName="charmander"
        pokemonTypes={["fire"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        pokeID={9}
        pokemonName="squirtle"
        pokemonTypes={["water"]}
        weight={6.9}
        height={0.7}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};
