import NameContext from '../context/Context'
import React, { useContext } from 'react'

function Navbar() {
    const { name, setName } = useContext( NameContext );

    const headerStyle = {
        backgroundColor: "#8c30c5",
        color: "whitesmoke",
        textAlign: "right",
        alignContent: "middle",
        padding: "1%",
    }

    return (
        <div style={ headerStyle }>
            <h2>Hi { name }!</h2>
        </div>
    );
}
export default Navbar;