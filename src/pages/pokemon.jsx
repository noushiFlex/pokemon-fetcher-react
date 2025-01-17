/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import Card from '../components/card'
import { data, Link, useParams } from 'react-router-dom'

function Pokemon() {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState(null)
    const [found, setFound] = useState(true)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data)
            setLoading(false)})
        .catch((err)=>{
            console.log(err)
            setFound(false)
            setLoading(false)
        })
    })
    return (
        <div className='h-[528px] flex flex-col justify-center items-center gap-5 relative'>
            { loading && <h1>Chargement ...</h1>}
            { pokemon && <Card pokemon={pokemon} /> }
            { !found && <h1 className='text-red-400 text-3xl w-full text-center'>Votre pokemon n&lsquo;a pas ete trouve !</h1> }
            <Link to='/' className='absolute bottom-0 border p-3 px-7 rounded-lg mb-10 text-2xl uppercase' >Retour</Link>
        </div>
    )
}

export default Pokemon