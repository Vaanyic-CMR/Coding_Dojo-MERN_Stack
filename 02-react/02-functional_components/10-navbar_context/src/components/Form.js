import NameContext from '../context/Context'
import React, { useContext } from 'react'

function Form() {
    const { name, setName } = useContext( NameContext )

    const formStyle = {
        padding: "3%"
    }
    const inputStyle = {
        backgroundColor: "#efefef",
        border: "none",
        padding: "0.6% 1%",
        marginLeft: "1%",
        color: "grey",
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() } style={ formStyle }>
            <label>Your Name:</label>
            <input type="text" value={ name } onChange={ (e) => setName( e.target.value ) } style={ inputStyle }/>
        </form>
    );
}
export default Form;