import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function validateName(e) {
        const { name, value } = e.target;
        let error = null;
        if( value.length < 2 ) { error = "Must be 2 characters or greater."; }
        dispatch({
            type: name,
            payload: { value: value, error: error }
        });
    }

    function validateEmail(e) {
        const { name, value } = e.target
        let error = null;

        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( !value.match(mailFormat) ) { error = "Invalid Email"; }

        dispatch({
            type: name,
            payload: { value: value, error: error }
        });
    }

    return (
        <form>
            <div>
                { state.firstName.error !== null && (
                    <p className="error">{ state.firstName.error }</p>
                )}
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ validateName } />
            </div>
            <div>
                { state.lastName.error !== null && (
                    <p className="error">{ state.lastName.error }</p>
                )}
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ validateName } />
            </div>
            <div>
                { state.email.error !== null && (
                    <p className="error">{ state.email.error }</p>
                )}
                <label>Email: </label>
                <input type="email" name="email" onChange={ validateEmail } />
            </div>
        </form>
    );
}
