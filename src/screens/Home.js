import "./Home.css"
import Characters from "../components/Characters"
import React, {useEffect, useState } from "react"
import { useLocation , Link, } from "react-router-dom"

const Home = () => {

    const[allPokemons, setAllPokemons] = useState([])
    let location = useLocation()
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach ( async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons ( currentList => [...currentList, data])
                
            })
        }
        
        createPokemonObject(data.results)
        
    }
    

    useEffect(() => {
        getAllPokemons()      
},[])

    return (
        <>
        
        <div className="homeContainer">
            <h1 className="mainTitle">Pokédex global :</h1>
            <div className="pokemonContainer">
                <div className="allContainer">
                    {allPokemons.map( (pokemonStats, id) =>
                    <Link key={id} to={`/pokemon/${pokemonStats.id}`} state={{backgroundLocation: location, type:pokemonStats.types}}>
                    <Characters
                        id={pokemonStats.id}
                        image={pokemonStats.sprites.other["official-artwork"].front_default} 
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                    /></Link>)}
                    
                </div>
                <button className="loadMore" onClick={() => getAllPokemons()}> Charger d'autres Pokémons</button>
            </div>
        </div>
        </>

);
}

export default Home