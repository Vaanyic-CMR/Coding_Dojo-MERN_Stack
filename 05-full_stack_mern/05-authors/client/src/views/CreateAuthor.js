import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";

import AuthorForm from "../components/AuthorForm";
import AuthorNavBar from "../components/AuthorNavBar";

const CreateAuthor = props => {
    const navigate = useNavigate();

    const [ errors, setErrors ] = useState({});

    const createAuthor = author => {
        axios.post("http://localhost:8000/api/authors", author)
            .then( res => navigate("/authors") )
            .catch( error => setErrors(error.response.data.errors) );
    };

    return (
        <div className="App">
            <AuthorNavBar navText="Home" navLink="/authors"/>
            <AuthorForm
                errors={ errors }
                formUse="Add a new author:"
                initName=""
                onSubmitProp={ createAuthor }
                />
        </div>
    )
};
export default CreateAuthor;