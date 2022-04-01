import { useState } from 'react';

import NameForm from './components/NameForm';
import Chat from './components/Chat';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [ name, setName ] = useState(null);

    return (
        <div className="App">
            <h1 className="bg-light mb-5 p-3 border border-dark">MERN Chat</h1>
            {
                name?
                <Chat name={ name }/>
                :<NameForm setName={ setName }/>
            }
        </div>
    );
}
export default App;