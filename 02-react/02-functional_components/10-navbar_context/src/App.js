import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

import NameContext from './context/Context';

import React, { useState } from 'react'
import './App.css';

function App() {
    const [ name, setName ] = useState("[Insert Name Here]")

    return (
        <div className="App">
            <NameContext.Provider value={{ name, setName }}>
                <Wrapper>
                    <Navbar />
                    <FormWrapper />
                </Wrapper>
            </NameContext.Provider>
        </div>
    );
}
export default App;