import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import Form from './components/Form';
import Planets from './components/Planets';
import Species from './components/Species';
import People from './components/People';
import Starships from './components/Starships';
import Films from './components/Films'
import Error from './components/Error';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Form cat="planets" iD="1" /> } />
                <Route path="/planets/:id" element={ <Planets /> } />
                <Route path="/species/:id" element={ <Species /> } />
                <Route path="/people/:id" element={ <People /> } />
                <Route path="/starships/:id" element={ <Starships /> } />
                <Route path="/films/:id" element={ <Films /> } />
                <Route path="/error/:cat/:id" element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}
export default App;