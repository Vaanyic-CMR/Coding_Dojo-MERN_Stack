import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';

function App() {
    const NumberColor = () => {
        const { val } = useParams();

        if( isNaN(+val) ) { return <Word /> }
        else { return <Number /> }
    }

    const Number = () => {
        const { val } = useParams();
        return <h1>The Number is: { val }</h1>
    }
    const Word = () => {
        const { val } = useParams();
        return <h1>The word is: { val }</h1>
    }

    const Color = () => {
        const { word, text, bckgnd } = useParams();
        return <h1 style={{ color: text, backgroundColor: bckgnd }}>The word is: { word }</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <h1>Welcome!</h1> } />
                <Route path="/:val" element={ <NumberColor /> } />
                <Route path="/:word/:text/:bckgnd" element={ <Color /> } />
            </Routes>
        </BrowserRouter>
    );
}
export default App;