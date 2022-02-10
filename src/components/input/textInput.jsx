import React from 'react';

const TextInput = ({ register, type, name, placeholder, mandatory, errors, rules }) => {
    console.log("errors>>>", errors, name)
    return <React.Fragment>
        <input {...register(name, { required: mandatory })} type={type} placeholder={placeholder} /><br />
        {errors[name]?.type === 'required' && <span>Field required</span>}<br />
    </React.Fragment>
}

export default TextInput;