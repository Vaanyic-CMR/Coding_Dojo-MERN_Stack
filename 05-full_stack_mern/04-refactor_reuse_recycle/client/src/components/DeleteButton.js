import React from "react";
import axios from "axios";

import "./styles/ProductList.css"

const DeleteButton = props => {
    const { productID, successCallback } = props;

    const delProduct = e =>
        axios.delete("http://localhost:8000/api/products/" + productID)
            .then( (res) => successCallback() )
            .catch( err => console.log(err) );
    
    return (
        <button className="btn-ud" onClick={ delProduct }>
            Delete
        </button>
    )
}
export default DeleteButton