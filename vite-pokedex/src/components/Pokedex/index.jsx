import { Pokecard } from '../Pokecard';

export const Pokedex = ({ pokemons, totExp, isWinner }) => {
  return (
    <div className='flex-col'>
      <h2>Experiencia Total: {totExp}</h2>
      <h2 className='uppercase font-bold'>{ isWinner ? 'Ganaste!' : 'Perdiste!'}</h2>
      <div className='flex'>
        {pokemons.map( pokemon => (
          <Pokecard key= {pokemon.id} pokemon= {pokemon}/>
        ))}
      </div>
    </div>
  )
}
