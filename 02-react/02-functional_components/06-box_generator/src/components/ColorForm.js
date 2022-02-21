import React, { useState } from 'react';

const ColorForm = ( props ) => {
    const { boxes, setBoxes } = props;
    const [ color, setColor ] = useState("#000000");
    const [ size, setSize ] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([ ...boxes, { color: color, size: size+"px" } ]);
        setColor("#000000"); setSize(100)
    }

    return (
        <form onSubmit={ handleSubmit } style={{ margin: "30px 10%" }}>
            <div>
                <label htmlFor="color">Color: </label>
                <input type="color" name="color" value={ color } onChange={ (e) => setColor( e.target.value ) }/>
            </div>
            <div>
                <label htmlFor="size">Size: </label>
                <input type="number" min="100" name="size" value={ size } onChange={ (e) => setSize( e.target.value ) }/>
            </div>
            <input type="submit" value="Add"/>
        </form>
    );
}
export default ColorForm;