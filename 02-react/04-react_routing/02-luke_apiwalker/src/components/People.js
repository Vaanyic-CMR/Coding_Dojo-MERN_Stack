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
        axios.get( `https://swapi.dev/api/people/${id}` )
            .then( res=>setResData(res.data) )
            .catch( err=>navigate(`/error/people/${id}`) );
    }, [ id ]);

    return (
        <div>
            <Form cat="people" iD={ id } />
            <div className='data-div'>
                <h2>{ resData.name }</h2>
                <p><span>Birth Year: </span>{ resData.birth_year }</p>
                <p><span>Gender: </span>{ resData.gender }</p>
                <p><span>Height: </span>{ resData.height }</p>
                <p><span>Eye Color: </span>{ resData.eye_color }</p>
            </div>
        </div>
    )
}