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
        axios.get( `https://swapi.dev/api/species/${id}` )
            .then( res=>setResData(res.data) )
            .catch( err=>navigate(`/error/species/${id}`) );
    }, [ id ]);

    return (
        <div>
            <Form cat="species" iD={ id } />
            <div className='data-div'>
                <h2>{ resData.name }</h2>
                <p><span>Classification: </span>{ resData.classification }</p>
                <p><span>Designation: </span>{ resData.designation }</p>
                <p><span>Average Lifespan: </span>{ resData.average_lifespan }</p>
                <p><span>Language: </span>{ resData.language }</p>
            </div>
        </div>
    )
}