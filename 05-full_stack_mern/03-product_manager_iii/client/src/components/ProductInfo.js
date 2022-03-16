import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./styles/ProductForm.css";

const ProductInfo = props => {
    const { removeFromDom } = props;
    
    const [ product, setProduct ] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => setProduct(res.data) )
            .catch( err => console.log(err) );
    }, []);

    const delProduct = ( productID ) =>
        axios.delete("http://localhost:8000/api/products/" + productID)
            .then( (res) => removeFromDom(productID) )
            .catch( err => console.log(err) );

    return (
        <div style={{textAlign: "center"}}>
            <h2>{ product.title }</h2>
            <p>Price: ${ product.price }</p>
            <p>Description: { product.description }</p>
            <button className="btn" onClick={ (e) => { delProduct(id); navigate("/home"); } }>Delete</button>
        </div>
    );
}
export default ProductInfo;