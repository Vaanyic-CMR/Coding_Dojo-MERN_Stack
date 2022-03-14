import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./styles/ProductForm.css";

const ProductInfo = props => {
    const [ product, setProduct ] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => setProduct(res.data) )
            .catch( err => console.log(err) );
    }, []);

    return (
        <div style={{textAlign: "center"}}>
            <h2>{ product.title }</h2>
            <p>Price: ${ product.price }</p>
            <p>Description: { product.description }</p>
        </div>
    );
}
export default ProductInfo;