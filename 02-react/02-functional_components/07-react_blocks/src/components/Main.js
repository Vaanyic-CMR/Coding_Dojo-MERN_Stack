import React from 'react';
import './Style.css'

function Main( props ) {
    return (
        <div className="main">{ props.children }</div>
    );
}
export default Main;