import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductForm from "./ProductForm";

import "./styles/ProductForm.css";

const ProductUpdate = props => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ product, setProduct ] = useState();
    const [ loaded, setLoaded ] =useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => { setProduct(res.data); setLoaded(true) } )
            .catch( err => console.log(err) );
    }, [ id ]);

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then( res => navigate("/home") )
            .catch( err => console.log(err) );
    };

    return (
        <div>
            <h1 className="App">Update Product</h1>
            { loaded && <ProductForm onSubmitProp={updateProduct}
                            initTitle={product.title}
                            initPrice={product.price}
                            initDesc={product.description} />
            }
        </div>
    );
}
export default ProductUpdate;