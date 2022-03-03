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
        axios.get( `https://swapi.dev/api/starships/${id}` )
            .then( res=>setResData(res.data) )
            .catch( err=>navigate(`/error/starships/${id}`) );
    }, [ id ]);

    return (
        <div>
            <Form cat="starships" iD={ id } />
            <div className='data-div'>
                <h2>{ resData.name }</h2>
                <p><span>Model: </span>{ resData.model }</p>
                <p><span>Starship Class: </span>{ resData.starship_class }</p>
                <p><span>Passengers: </span>{ resData.passengers }</p>
                <p><span>Manufacturer: </span>{ resData.manufacturer }</p>
            </div>
        </div>
    )
}