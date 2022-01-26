import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom"
import './DetailsCharacters.css'


const DetailsCharacters = ({}) => {

    let navigate = useNavigate()
    let {id} = useParams()
    const[detailPokemon, setDetailPokemon] = useState([])
    

    /*************APPEL DETAIL API**************** */
    useEffect(() => {
        const appelDetail = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((res) => setDetailPokemon(res))
        }
        appelDetail()
    }, [])

    return (
        <>
        <div className="blackContainer" onClick={() => navigate(-1)}></div>
        <div className="detailContainer">
                <div>
                    <h3 className="detailName">{detailPokemon.name}</h3>
                    <p className="numDex"> №.{detailPokemon.id}</p>
                </div>
        </div>
        </>
    )
}

export default DetailsCharacters