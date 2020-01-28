
import React from 'react';
import './Button.css';

const Button = ({ className, children, ...restProps }) => {
    return (
        <button className={`form__button ${className || ''}`} {...restProps}>
            {children}
        </button>
    )
}

export default Button;