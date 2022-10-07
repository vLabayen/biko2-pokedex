import React from "react";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./pokedex.css";

function Pokedex() {
  return (
    <>
      <header className="pokeHeader">
        <div></div>
      </header>
      <main className="pokeMain">
        <SearchBar />
        <CardsContainer />
      </main>
      <footer className="pokeFooter"></footer>
    </>
  );
}

export default Pokedex;
