import "./Home.css"
import Characters from "../components/Characters"
import React, {useEffect, useState } from "react"
import { useLocation , Link, } from "react-router-dom"

const Home = ({
    isActive,
    setISActive,
    toggle,
    setIsShowing,
    isShowing,
    ...props
}) => {

    
    const[allPokemons, setAllPokemons] = useState([])
    let location = useLocation()
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
    let poulet01 = []
    
    fetch(loadMore).then(res => res.json())
    .then(async data => {
        setLoadMore(data.next)
				let i = 0
				// ----------- Promesse start---------- 
        const propro = new Promise((resolve, reject) => {
        	i = 0
        	data.results.forEach ( async (pokemon, index, arr) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()
            const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
            const data2 = await res2.json()
            data.name = data2.names
            .filter(el => el.language.name.includes('fr'))
            .map(nom => nom.name)
            poulet01 = [...poulet01, data]
            if (i === arr.length - 1) {
                resolve(poulet01);
            }
            // {console.log('test recup',poulet01)}
            i++
        	})
				})
				// ----------- promesse result --------
        propro.then(res => {
        
        return res.sort((a, b) => a.id - b.id)
        })
        .then(resArraySort => {
					
					setAllPokemons(currentState => [...currentState, ...resArraySort])
        })
    })
}

		useEffect(() => {
        getAllPokemons() 
    }, [])
    
    return (
        <>
        <div className={isActive ? "homeContainer" : "none"}>
            <h1 className="mainTitle">Pokédex global :</h1>
            <div className="pokemonContainer">
                <div className="allContainer">
                    {allPokemons && allPokemons.map( (pokemonStats, id) => 
                            <Link key={id} to={`/pokemon/${pokemonStats.id}`} state={{backgroundLocation: location, type:pokemonStats.types}}>
                    <Characters
                        id={pokemonStats.id}
                        image={pokemonStats.sprites.other["official-artwork"].front_default} 
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                    /></Link>
                    )}
                    
                </div>
                <button className="loadMore" onClick={() => getAllPokemons()}> Charger d'autres Pokémons</button>
            </div>
        </div>
        </>

);
}

export default Home