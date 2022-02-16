import React, { useState } from  'react';

const UserForm = ( props ) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        document.getElementById("dataFirstName").innerText = "";
        document.getElementById("dataLastName").innerText = "";
        document.getElementById("dataEmail").innerText = "";
        document.getElementById("dataPassword").innerText = "";
        document.getElementById("dataConfirmPassword").innerText = "";
    };

    const updateFormData = () => {
        document.getElementById("dataFirstName").innerText = firstName;
        document.getElementById("dataLastName").innerText = lastName;
        document.getElementById("dataEmail").innerText = email;
        document.getElementById("dataPassword").innerText = password;
        document.getElementById("dataConfirmPassword").innerText = confirmPassword;
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={ firstName } onChange={ (e) => { setFirstName( e.target.value ); updateFormData(); } }/>
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" value={ lastName } onChange={ (e) => { setLastName( e.target.value ); updateFormData(); } }/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={ email } onChange={ (e) => { setEmail( e.target.value ); updateFormData() } }/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={ password } onChange={ (e) => { setPassword( e.target.value ); updateFormData(); } }/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={ confirmPassword } onChange={ (e) => { setConfirmPassword( e.target.value ); updateFormData(); } }/>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <p>First Name: <span id="dataFirstName"/></p>
                <p>Last Name: <span id="dataLastName"/></p>
                <p>Email: <span id="dataEmail"/></p>
                <p>Password: <span id="dataPassword"/></p>
                <p>Confirm Password: <span id="dataConfirmPassword"/></p>
            </div>
        </div>
    );
};
export default UserForm;