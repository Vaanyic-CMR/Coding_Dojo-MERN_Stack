import React from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='row'>
                <Navigation />
                <Main>
                    <SubContent />
                    <SubContent />
                    <SubContent />
                    <Advertisement />
                </Main>
            </div>
        </div>
    );
};
export default App;