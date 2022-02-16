import React from 'react';

const TextInput = ({ register, type, name, placeholder, mandatory, errors, rules }) => {
    return <React.Fragment>
        <label htmlFor={name}>
            {name}
        </label>
        <input id={name} autoComplete='off' {...register(name, { required: mandatory && `${name} is required`, ...rules })} type={type} placeholder={placeholder} />
        {errors[name] && errors[name]?.message}
    </React.Fragment>
}

export default React.memo(TextInput);