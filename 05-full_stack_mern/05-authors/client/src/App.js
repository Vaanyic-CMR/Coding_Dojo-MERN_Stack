import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import AuthorList from "./views/AuthorList";
import Index from "./views/Index"
import CreateAuthor from "./views/CreateAuthor";
import UpdateAuthor from "./views/UpdateAuthor";

function App() {
    return (
        <BrowserRouter>
            <Routes>

            <Route element={ <Index /> } path="/"/>
            <Route element={ <AuthorList /> } path="/authors"/>
            <Route element={ <CreateAuthor /> } path="/authors/new"/>
            <Route element={ <UpdateAuthor /> } path="/authors/:id"/>
            <Route path="/authors/edit/:id"/>

            </Routes>
        </BrowserRouter>
    );
}
export default App;