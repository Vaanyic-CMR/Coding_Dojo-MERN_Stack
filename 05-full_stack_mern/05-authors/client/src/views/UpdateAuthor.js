import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";

import AuthorForm from "../components/AuthorForm";
import AuthorNavBar from "../components/AuthorNavBar";

const UpdateAuthor = props => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [ author, setAuthor ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then( res => { setAuthor(res.data); setLoaded(true); } )
            .catch( error => console.log(error) );
    }, [ id ]);

    const updateAuthor = author => {
        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then( res => navigate("/authors") )
            .catch( error => setErrors(error.response.data.errors) );
    };

    return (
        <div className="App">
            <AuthorNavBar navText="Home" navLink="/authors"/>
            { loaded && <AuthorForm
                errors={ errors }
                formUse="Edit this Author:"
                initName={ author.name }
                onSubmitProp={ updateAuthor }
                /> }
        </div>
    )
};
export default UpdateAuthor;