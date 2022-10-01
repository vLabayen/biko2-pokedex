import "./card.css";

interface Props {
  pokemonType: string;
}

export const Card = ({ pokemonType }: Props) => {
  return (
    <div className={`card card__type--${pokemonType}`}>
      <header className="card__header">
        <h2 className="card-title font-bold-large">Bulbasur</h2>
        <h3 className="card-id font-bold-medium">#001</h3>
      </header>
      <picture>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
        />
      </picture>
      <div className="card__info">
        <div className="card__tags">tag1 tag2</div>
        <h3 className="card__about font-bold-medium"> About</h3>
        <div className="card__physical">
          <div className="card__physical--weight">Peso</div>
          <div className="card__physical--height">Altura</div>
        </div>
        <p className="card__description font-regular-tiny">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
