
import React from 'react';
import './Label.css';

const Label = ({ className, children, ...restProps }) => {
    return (
        <label className={`form__label ${className || ''}`} {...restProps}>
            {children}
        </label>
    )
}

export default Label;