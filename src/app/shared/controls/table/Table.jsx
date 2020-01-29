
import React from 'react';
import './Table.css';

const Table = ({ className, children, ...restProps }) => {
    return (
        <table className={`result__table ${className || ''}`} {...restProps}>
            {children}
        </table>
    )
}

export default Table;