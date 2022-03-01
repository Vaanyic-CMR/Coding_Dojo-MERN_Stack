import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [ pokemon, setPokemon ] = useState([]);

    useEffect( () => {
        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=1126" )
        .then( response => setPokemon( response.data.results ) )
        .catch( err => console.log(err) )
    }, []);

    return (
        <ul>
            { pokemon.length > 0 && pokemon.map( (poke, index) => <li key={index}>{ poke.name }</li> ) }
        </ul>
    );
}
export default App;