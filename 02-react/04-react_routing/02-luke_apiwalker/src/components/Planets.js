import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/data.css'

import Form from './Form';

export default () => {
    const navigate = useNavigate();
    
    const [ resData, setResData ] = useState({});

    const { id } = useParams();

    useEffect( ()=>{
        axios.get( `https://swapi.dev/api/planets/${id}` )
            .then( res=>setResData(res.data) )
            .catch( err=>navigate(`/error/planets/${id}`) );
    }, [ id ]);

    return (
        <div>
            <Form cat="planets" iD={ id } />
            <div className='data-div'>
                <h2>{ resData.name }</h2>
                <p><span>Climate: </span>{ resData.climate }</p>
                <p><span>Terrain: </span>{ resData.terrain }</p>
                <p><span>Surface Water: </span>{ resData.surface_water? "true" :"false" }</p>
                <p><span>Population: </span>{ resData.population }</p>
            </div>
        </div>
    )
}