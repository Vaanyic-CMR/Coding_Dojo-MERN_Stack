import React, { useState } from 'react';

const PersonCard = ( props ) => {
    const { firstName, lastName, hairColor } = props;
    const [ age, setAge ] = useState( props.age );

    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ ()=> setAge( age+1 ) }>Birthday button for { firstName } { lastName }</button>
        </div>
    );
}
export default PersonCard;