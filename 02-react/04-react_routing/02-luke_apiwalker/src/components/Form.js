import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import '../css/form.css'

export default props => {
    const navigate = useNavigate();
    const { cat, iD } = props;

    const [ catagory, setCatagory ] = useState(cat)
    const [ ID, setID ] = useState(iD)

    const handleSubmit = (e) => { e.preventDefault(); navigate(`/${catagory}/${ID}`); }

    return (
        <form onSubmit={ handleSubmit }>
            <label>Search For: </label>
            <select value={ catagory } onChange={ e => setCatagory( e.target.value ) }>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
                <option value="people">People</option>
                <option value="starships">Starships</option>
                <option value="films">Films</option>
            </select>
            <label>ID: </label>
            <input type="number" min="1" value={ ID } onChange={ e => setID( e.target.value ) } />
            <input type="submit" value="Search" />
        </form>
    )
}