import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerList from "./views/PlayerList";
import StatusList from "./views/StatusList";
import AddPlayer from "./views/AddPlayer";
import Index from "./views/Index";

function App() {
    return (
        <div style={{ padding: "0 20%" }}>
        <BrowserRouter>
            <Routes>

            <Route element={ <Index /> } path="/"/>
            <Route element={ <PlayerList /> } path="/players/list"/>
            <Route element={ <AddPlayer /> } path="/players/addplayer"/>
            <Route element={ <StatusList /> } path="/status/game/1"/>

            </Routes>
        </BrowserRouter>
        </div>
    );
}
export default App;