import React from 'react';

const ColorForm = (props) => {
    const {setColor, setBoxes, color} = props;
    

    const onChange = (e) => {
        setColor(e.target.value);
    };


    const createColor = (e) => {
        e.preventDefault();
        setBoxes((boxes) => [...boxes, color]);
        setColor('');
    };

    return (
        <div>
            <h1>Add Color</h1>
            <form onSubmit={createColor}>
                <input type="text" name="color" id="color" onChange={onChange} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ColorForm;
