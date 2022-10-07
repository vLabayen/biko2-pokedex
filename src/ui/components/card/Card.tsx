import { useEffect, useState } from "react";
import { Tag } from "../tag/Tag";
import "./card.css";
import { get_sprite_url } from "../../../api/api";

interface Props {
  pokeID: number;
  pokemonName: string;
  pokemonTypes: Array<string>;
  weight: number;
  height: number;
  description: string;
}

interface PokeData {
  pokemonId: number;
  pokemonTypes: Array<string>;
  weight: number;
  height: number;
  description: string;
  imageUrl: string;
}

export const Card = ({
  pokeID,
  pokemonName,
  pokemonTypes,
  weight,
  height,
  description,
}: Props) => {
  const [pokemon, setPokemon] = useState<PokeData>();

  useEffect(() => {
    const get_Pokemon = async () => {
      const url = await get_sprite_url(pokemonName);
      const data: PokeData = {
        pokemonId: 1,
        pokemonTypes: ["grass"],
        weight: 0.6,
        height: 1.2,
        description: "lorem ipsum",
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`,
      };
      setPokemon(data);
    };
    get_Pokemon();
  }, [pokemonName]);

  const primaryType = pokemonTypes[0];
  const pokeID_string = `#${String(pokeID).padStart(3, "0")}`;

  return (
    <div className={`card color__type--${primaryType}`}>
      <header className="card__header">
        <h2 className="card-title font-bold-large">{pokemonName}</h2>
        <h3 className="card-id font-bold-medium">{pokeID_string}</h3>
      </header>
      <picture className="card__imgHolder">
        <img
          className="card__img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.pokemonId}.png`}
          alt={pokemonName}
        />
      </picture>
      <div className="card__info">
        <div className="card__tags">
          {pokemonTypes.map((type, idx) => (
            <Tag key={idx} type={type} />
          ))}
        </div>
        <h3 className="card__about font-bold-medium"> About</h3>
        <div className="card__physical">
          <div className="card__measure">
            <div className="card__measureStats font-regular-tiny">
              <img src="icons/weight.svg" alt="" />
              <span>{`${weight} kg`}</span>
            </div>
            <div className="card__measureText font-regular-small">Weight</div>
          </div>
          <div className="card__measure">
            <div className="card__measureStats font-regular-tiny">
              <img src="icons/height.svg" alt="" />
              <span>{`${height} m`}</span>
            </div>
            <div className="card__measureText font-regular-small">Height</div>
          </div>
          <div className="card__measure">
            <div className="card__measureStats font-regular-tiny">
              <span>Levitate</span>
            </div>
            <div className="card__measureText font-regular-small">Moves</div>
          </div>
        </div>
        <p className="card__description font-regular-tiny">{description}</p>
      </div>
    </div>
  );
};
