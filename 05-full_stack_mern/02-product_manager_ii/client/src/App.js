import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import ProductInfo from "./components/ProductInfo";
import Home from "./views/Home";

import "./App.css"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                
                <Route element={<Home/>} path="/home" />
                <Route element={<ProductInfo/>} path="/:id" />
                
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;