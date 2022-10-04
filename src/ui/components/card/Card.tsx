import { useEffect, useState } from "react";
import { Tag } from "../tag/Tag";
import "./card.css";
import { get_sprite_url } from "../../../api/api";

interface Props {
  pokemonName: string;
  pokemonType: string;
  weight: number;
  height: number;
}

export const Card = ({ pokemonName, pokemonType, weight, height }: Props) => {
  const [sprite_url, set_sprite_url] = useState(undefined);

  useEffect(() => {
    const get_sprite = async () => {
      const url = await get_sprite_url(pokemonName);
      set_sprite_url(url);
    };

    get_sprite();
  }, [pokemonName]);

  return (
    <div className={`card color__type--${pokemonType}`}>
      <header className="card__header">
        <h2 className="card-title font-bold-large">Bulbasur</h2>
        <h3 className="card-id font-bold-medium">#001</h3>
      </header>
      <picture className="card__imgHolder">
        <img className="card__img" src={sprite_url} alt={pokemonName} />
      </picture>
      <div className="card__info">
        <div className="card__tags">
          <Tag type={pokemonType} />
          <Tag type="poison" />
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
        <p className="card__description font-regular-tiny">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
