import React from "react";
import { get_sprite_url } from "../api/api";
import { Card } from "./components/Card";

function Pokedex() {
  get_sprite_url("charmander");
  return (
    <div style={{ margin: "30px" }}>
      <Card pokemonType="grass" />
    </div>
  );
}

export default Pokedex;
