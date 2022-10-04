import React from "react";
import { get_sprite_url } from "../api/api";
import { Card } from "./components/card/Card";

function Pokedex() {
  return (
    <div style={{ margin: "30px" }}>
      <Card
        pokemonName="bulbasaur"
        pokemonType="grass"
        weight={6.9}
        height={0.7}
      />
    </div>
  );
}

export default Pokedex;
