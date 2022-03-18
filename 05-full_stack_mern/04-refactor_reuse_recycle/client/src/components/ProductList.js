import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DeleteButton from "./DeleteButton";

import "./styles/ProductList.css";

const ProductList = props => {
    const { removeFromDom, products, setProducts } = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( res => setProducts(res.data) )
            .catch( err => console.log(err) );
    }, [])

    const delProduct = ( productID ) =>
        axios.delete("http://localhost:8000/api/products/" + productID)
            .then( (res) => removeFromDom(productID) )
            .catch( err => console.log(err) );

    return (
        <div className="content">
            <h1>All Products:</h1>
            {
            products.map(( product, index ) => { return (
                <div key={index} className="link-row">
                    <Link to={`/${product._id}`} className="link">{product.title}</Link>
                    <Link to={`/edit/${product._id}`} className="btn-ud">Update</Link>
                    <DeleteButton
                        productID={product._id}
                        successCallback={ () => removeFromDom(product._id) }/>
                </div>
            )})
            }
        </div>
    );
}
export default ProductList;