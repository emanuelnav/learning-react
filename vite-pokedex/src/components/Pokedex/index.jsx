import { Pokecard } from '../Pokecard';

export const Pokedex = () => {
  const pokemons = [
    {id: 1, name: 'Bullbasaur', type: 'Planta', base_exp: 45, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {id: 4, name: 'Charmander', type: 'Fuego', base_exp: 62, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {id: 7, name: 'Squirtle', type: 'Agua', base_exp: 65, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
    {id: 11, name: 'Metapod', type: 'Bicho', base_exp: 55, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'},
    {id: 25, name: 'Pikachu', type: 'Electrico', base_exp: 60, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
    {id: 133, name: 'Eevee', type: 'Normal', base_exp: 56, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'},
  ];

  return (
    <>
      {pokemons.map( (pokemon, index) => (
        <Pokecard key= {index} pokemon= {pokemon}/>
      ))}
    </>
  )
}
