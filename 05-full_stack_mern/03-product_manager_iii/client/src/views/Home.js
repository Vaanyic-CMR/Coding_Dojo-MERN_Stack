import React from "react";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Home = props => {
    const { removeFromDom, products, setProducts } = props;

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList removeFromDom={removeFromDom} products={products} setProducts={setProducts} />
        </div>
    );
};
export default Home;