import React, { useState } from  'react';

const UserForm = ( props ) => {
    const [ firstName, setFirstName ] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");

    const [ lastName, setLastName ] = useState("");
    const [ lastNmaeError, setLastNameError ] = useState("");

    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError ] = useState("");

    const [ password, setPassword ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");

    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const validateFirstName = (e) => {
        setFirstName( e.target.value );
        if( e.target.value.length < 1 ) { setFirstNameError(""); }
        else if( e.target.value.length < 2 ) { setFirstNameError("First Name must be at least 2 characters!"); }
        else { setFirstNameError(""); }
    };
    const validateLastName = (e) => {
        setLastName( e.target.value );
        if( e.target.value.length < 1 ) { setLastNameError(""); }
        else if( e.target.value.length < 2 ) { setLastNameError("Last Name must be at least 2 characters!"); }
        else { setLastNameError(""); }
    };
    const validateEmail = (e) => {
        setEmail( e.target.value );
        if( e.target.value.length < 1 ) { setEmailError(""); }
        else if( e.target.value.length < 5 ) { setEmailError("Email must be at least 5 characters!"); }
        else { setEmailError(""); }
    };
    const validatePassword = (e) => {
        setPassword( e.target.value );
        if( e.target.value.length < 1 ) { setPasswordError(""); }
        else if( e.target.value.length < 8 ) { setPasswordError("Password must be at least 8 characters!"); }
        else { setPasswordError(""); }
    };
    const validateConfirmPassword = (e) => {
        setConfirmPassword( e.target.value );
        if( e.target.value.length < 1 ) { setConfirmPasswordError(""); }
        else if( e.target.value != password ) { setConfirmPasswordError("Passwords must match!"); }
        else { setConfirmPasswordError(""); }
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:</label>
                <input type="text" value={ firstName } onChange={ validateFirstName }/>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name </label>
                <input type="text" value={ lastName } onChange={ validateLastName }/>
                {
                    lastNmaeError ?
                    <p>{ lastNmaeError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={ email } onChange={ validateEmail }/>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={ password } onChange={ validatePassword }/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={ confirmPassword } onChange={ validateConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit"/>
        </form>
    );
};
export default UserForm;