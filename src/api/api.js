export const get_sprite_url = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const json = await response.json();
  console.log(json.sprites.front_default);
  return json.sprites.other["official-artwork"].front_default;
};
