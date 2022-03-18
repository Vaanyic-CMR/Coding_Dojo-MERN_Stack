import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Home = props => {
    const { removeFromDom, products, setProducts } = props;

    const [ loaded, setLoaded ] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( res => { setProducts(res.data); setLoaded(true); } )
            .catch( err => console.log(err) );
    }, []);
    const createProduct = product => {
        axios.post("http://localhost:8000/api/products", product)
            .then( res => setProducts([ ...products, res.data ]) )
            .catch( err => console.log(err) );
    }

    return (
        <div>
            <h1 className="App">Product Manager</h1>
            <ProductForm onSubmitProp={createProduct}
                initTitle="" initPrice="" initDesc=""
            />
            <hr />
            { loaded && <ProductList removeFromDom={removeFromDom} products={products} setProducts={setProducts} /> }
        </div>
    );
};
export default Home;