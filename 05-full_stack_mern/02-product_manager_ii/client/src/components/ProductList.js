import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles/ProductList.css";

const ProductList = props => {
    const { products, setProducts } = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( res => setProducts(res.data) )
            .catch( err => console.log(err) );
    }, [])

    return (
        <div className="content">
            <h1>All Products:</h1>
            {
            products.map(( product, index ) =>
                    <Link key={index} to={`/${product._id}`} className="link-row">{product.title}</Link>
                )
            }
        </div>
    );
}
export default ProductList;