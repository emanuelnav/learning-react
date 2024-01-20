import React from 'react'

export const Pokecard = ({pokemon}) => {

  return (
    <>
      <div className='flex-row'>
        <img src={pokemon.img_url} alt="Pokemon Image" />
        <p>{pokemon.name }</p>
        <p>Tipo: {pokemon.type}</p>
        <p>EXP: {pokemon.base_exp}</p>
      </div>
    </>
  )
}
