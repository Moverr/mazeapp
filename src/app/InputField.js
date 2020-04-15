import React from 'react'

const InputField = function (props) {
    return <input  name={props.name} value={props.value}   onChange={e => props.callback(e)} />;
}

export default InputField;

