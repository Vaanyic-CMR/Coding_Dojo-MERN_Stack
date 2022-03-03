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
        axios.get( `https://swapi.dev/api/films/${id}` )
            .then( res=>setResData(res.data) )
            .catch( err=>navigate(`/error/films/${id}`) );
    }, [ id ]);

    return (
        <div>
            <Form cat="films" iD={ id } />
            <div className='data-div'>
                <h2>{ resData.title }</h2>
                <p><span>Director: </span>{ resData.director }</p>
                <p><span>Producer: </span>{ resData.producer }</p>
                <p><span>Release Date: </span>{ resData.release_date }</p>
                <p><span>Opening Crawl: </span>{ resData.opening_crawl }</p>
            </div>
        </div>
    )
}