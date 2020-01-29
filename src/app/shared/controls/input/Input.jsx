import React from 'react';
import './Input.css';

const Input = ({ className, ...restProps }) => {
    return (
        <input className={`form__input ${className || ''}`} {...restProps} />
    )
}

export default Input;