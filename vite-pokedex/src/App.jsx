/* eslint-disable react/prop-types */
import './App.css';
import { Pokedex } from './components/Pokedex';


function App() {
  const pokemons = [
    {id: 1, name: 'Bullbasaur', type: 'Planta', base_exp: 45, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {id: 4, name: 'Charmander', type: 'Fuego', base_exp: 62, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {id: 7, name: 'Squirtle', type: 'Agua', base_exp: 65, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
    {id: 11, name: 'Metapod', type: 'Bicho', base_exp: 55, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'},
    {id: 25, name: 'Pikachu', type: 'Electrico', base_exp: 60, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
    {id: 133, name: 'Eevee', type: 'Normal', base_exp: 56, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'},
    {id: 17, name: 'Pidgeotto', type: 'Normal', base_exp: 43, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'},
    {id: 66, name: 'Machop', type: 'Lucha', base_exp: 58, img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png'},
  ];

  let pokedex1 = [];
  let pokedex2 = [...pokemons];
  while (pokedex1.length < pokedex2.length) {
    let randIdx = Math.floor(Math.random() * pokedex2.length);
    let randPokemon = pokedex2.splice(randIdx, 1)[0];
    pokedex1.push(randPokemon);
  }
  let exp1 = pokedex1.reduce( (exp, pokemon) => exp + pokemon.base_exp, 0)
  let exp2 = pokedex2.reduce( (exp, pokemon) => exp + pokemon.base_exp, 0)

  return (
    <>
      <Pokedex pokemons= {pokedex1} totExp= {exp1} isWinner= {exp1 > exp2}/>
      <Pokedex pokemons= {pokedex2} totExp= {exp2} isWinner= {exp2 > exp1}/>
    </>
  )
}

export default App
