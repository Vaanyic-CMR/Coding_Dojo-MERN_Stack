import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import ProductUpdate from "./components/ProductUpdate";
import ProductInfo from "./components/ProductInfo";
import Home from "./views/Home";

import "./App.css"

function App() {
    const [ products, setProducts ] = useState([]);

    const removeFromDom = productID => setProducts( products.filter(product => product._id != productID) );

    return (
        <BrowserRouter>
            <Routes>
            
            <Route element={<Home products={products} setProducts={setProducts} removeFromDom={removeFromDom} />} path="/home" />
            <Route element={<ProductUpdate products={products} setProducts={setProducts} />} path="/edit/:id" />
            <Route element={<ProductInfo removeFromDom={removeFromDom} />} path="/:id" />
            
            </Routes>
        </BrowserRouter>
    );
};
export default App;