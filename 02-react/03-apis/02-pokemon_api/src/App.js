import React, { useState, useEffect } from 'react'

function App() {
    const [ pokemon, setPokemon ] = useState([]);

    useEffect( () => {
        fetch( "https://pokeapi.co/api/v2/pokemon?limit=1126" )
            .then( response => response.json() )
            .then( response => setPokemon( response.results ) )
            .catch( err => console.log(err) )
    }, []);

    return (
        <ul>
            { pokemon.length > 0 && pokemon.map( (poke, index) => <li key={index}>{ poke.name }</li> ) }
        </ul>
    );
}
export default App;