import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "reactstrap";

const PlayerTable = _props => {
    const [ players, setPlayers ] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/players")
            .then( res => setPlayers(res.data) )
            .catch( error => console.log("An Error Occured: ", error) );
    }, []);

    const removeFromDom = playerID => setPlayers( players.filter(player => player._id != playerID) );

    const deletePlayer = ( id, name ) => {
        if ( window.confirm(`Are you sure you want to remove <${name}>?`) ) {
            axios.delete("http://localhost:8000/api/players/" + id)
                .then( res => removeFromDom(id) )
                .catch( error => console.log("An Error Occured: ", error) );
        }
    }

    return (
        <table className="table table-bordered table-striped table-hover">
            <thead style={{ backgroundColor: "#cccccc" }}>
                <th>Player Name</th>
                <th>Preferred Position</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    players.map( (player, index) => { return (
                        <tr key={index}>
                            <td className="align-middle">{ player.name }</td>
                            <td className="align-middle">{ player.preferredPosition }</td>
                            <td>
                                <Button
                                    style={{ backgroundColor: "#cf2a27", paddingTop: "0", paddingBottom: "0" }}
                                    className="m-1 ps-5 pe-5"
                                    onClick={ () => deletePlayer(player._id, player.name) }
                                    >DELETE</Button>
                            </td>
                        </tr>
                    ) } )
                }
            </tbody>
        </table>
    );
}
export default PlayerTable;