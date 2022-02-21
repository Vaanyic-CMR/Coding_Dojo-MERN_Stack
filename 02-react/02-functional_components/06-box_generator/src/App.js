import BoxDisplay from './components/BoxDisplay';
import ColorForm from './components/ColorForm';
import React, { useState } from 'react'
import './App.css';

function App() {
    const [ boxes, setBoxes ] = useState([]);

    return (
        <div className="App">
            <ColorForm boxes={ boxes } setBoxes={ setBoxes }/>
            <BoxDisplay boxes={ boxes }/>
        </div>
    );
}

export default App;
