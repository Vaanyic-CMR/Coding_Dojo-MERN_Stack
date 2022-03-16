import React, { useState } from "react";
import axios from "axios";

import "./styles/ProductForm.css";

const ProductForm = props => {
    const { products, setProducts } = props;

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const handleSubmit = e => { e.preventDefault();
        axios.post("http://localhost:8000/api/products", { title, price, description })
            .then( res => setProducts([ ...products, res.data ]) )
            .catch( err => console.log(err) );
        setTitle(""); setPrice(""); setDescription("");
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
                    <input type="submit" value="Create" className="btn"/>
                </div>
            </form>
        </div>
    );
}
export default ProductForm;