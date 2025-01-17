/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Body() {

    const navigate = useNavigate()

    function handleMove() {
        setTimeout(()=>{
            const textField = document.querySelector('#input-field')
            if(textField.value){
                navigate(`/pokemon/${textField.value.toLowerCase()}`)
            }else{
                navigate(`/pokemon/pikachu`)
            }
        },800)
    }


    return (
        <div className='h-[528px] flex flex-col justify-center items-center gap-5'>
            <div>
                <img className='w-auto object-cover h-40 m-auto' src='https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825716o2adc.png'></img>
            </div>
            <form>
                <div className='flex items-center justify-center gap-2'>
                    <input id='input-field' placeholder='Entrez le nom/id du Pokemon' className=' border py-5 px-2 w-64 text-base uppercase overflow-scroll' required />
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleMove()
                    }}>
                        <IoMdSearch className='size-10 hover:rotate-90 hover:scale-90 transition-all duration-700' ></IoMdSearch>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Body