import React from 'react'

export const Pokecard = ({pokemon}) => {

  return (
    <div className='block min-w-36 rounded-lg bg-gray-300 p-5 m-2'>
      <img src={pokemon.img_url} alt="Pokemon Image" />
      <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800'>
        {pokemon.name }
      </h5>
      <p className='mb-2 text-base text-neutral-600'>
        Tipo: {pokemon.type}
      </p>
      <p className='mb-2 text-base text-neutral-600'>
        EXP: {pokemon.base_exp}
      </p>
    </div>
  )
}
