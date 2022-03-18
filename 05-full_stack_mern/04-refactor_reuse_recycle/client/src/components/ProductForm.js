import React, { useState } from "react";
import axios from "axios";

import "./styles/ProductForm.css";

const ProductForm = props => {
    const { initTitle, initPrice, initDesc, onSubmitProp } = props;

    const [ title, setTitle ] = useState(initTitle);
    const [ price, setPrice ] = useState(initPrice);
    const [ description, setDescription ] = useState(initDesc);

    const handleSubmit = e => { e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle(""); setPrice(""); setDescription("");
    };

    return (
        <div>
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
                    <input type="submit" className="btn"/>
                </div>
            </form>
        </div>
    );
}
export default ProductForm;