import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import DeleteButton from "./DeleteButton";

import "./styles/ProductForm.css";

const ProductInfo = props => {
    const [ product, setProduct ] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

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
            <DeleteButton
                productID={product._id}
                successCallback={ () => navigate("/home") }/>
        </div>
    );
}
export default ProductInfo;