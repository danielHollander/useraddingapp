import React, { useState } from 'react';

function Input(props) {
    const [userInput, setUserInput] = useState('');
    // const [Error, setError] = useState('');
    // const handleBlur = (event) => {
    //     if (event.target.validity.patternMismatch) {
    //     }
    // }

    const handleChange = event => {
        setUserInput(event.target.value);
        props.change(event.target.value);
    }

    return (
        <div className="input">
            <label>{props.label}</label>
            <input value={userInput} onChange={handleChange} type={props.type} />
        </div>
    );
}

export default Input;
