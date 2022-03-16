import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles/ProductForm.css";

const ProductUpdate = _props => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch( err => console.log(err) );
    }, [ id ]);

    const handleSubmit = e => { e.preventDefault();
        axios.put("http://localhost:8000/api/products/"+id, { title, price, description })
            .then( _res => navigate("/home") )
            .catch( err => console.log(err) );
    }

    return (
        <div>
            <h1 className="App">Product Manager</h1>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Title: </label>
                        <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Price: </label>
                        <input type="text" value={ price } onChange={ e => setPrice(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Description: </label>
                        <input type="text" value={ description } onChange={ e => setDescription(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Update" className="btn"/>
                </div>
            </form>
        </div>
    );
}
export default ProductUpdate;