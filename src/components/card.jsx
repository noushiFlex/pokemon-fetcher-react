/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card({ pokemon }) {
    return (
        <div className=' h-full w-full flex justify-center items-start p-10 pt-20 overflow-scroll text-[var(--custom-dark-blue)]'>
            <div className='border rounded-lg shadow-lg h-72 w-64 p-2'>
                <div className='h-2/4'>
                    <img src={pokemon.sprites.front_default} className='m-auto object-cover w-full h-full drop-shadow-xl' />
                </div>
                <h1 className='capitalize text-4xl text-center drop-shadow-lg'>{pokemon.name.split('-')[0]}</h1>
                <div className='flex justify-between px-5'>
                    <span>Taille :   {pokemon.height}cm</span>
                    <span>Poids :   {pokemon.weight}cm</span>
                </div>
            </div>
        </div>
    )
}

export default Card