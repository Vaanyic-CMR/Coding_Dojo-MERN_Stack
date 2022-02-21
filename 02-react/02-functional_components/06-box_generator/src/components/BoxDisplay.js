import styles from './BoxDisplay.module.css';
import React from 'react';

const BoxDisplay = ( props ) => {
    const { boxes } = props;

    return (
        <div className={ styles.wrap }>
            {
                boxes.map( (box, index) => (
                    <div key={index} style={{
                        height: box.size,
                        width: box.size,
                        margin: "10px",
                        backgroundColor: box.color,
                        border: "solid, black"
                    }}/>
                ))
            }
        </div>
    );
}
export default BoxDisplay;