import React from 'react'

const InputField = function (props) {
    return <input {...props} onChange={e => props.callback(e)} />;
}

export default InputField;

