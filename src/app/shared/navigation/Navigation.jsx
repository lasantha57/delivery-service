import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return (
        <React.Fragment>
            <NavLink className="nav" to="routes" activeClassName="nav--active">Eko Routes</NavLink> |
            <NavLink className="nav" to="delivery-cost" activeClassName="nav--active">Delivery Cost</NavLink> |
            <NavLink className="nav" to="delivery-routes" activeClassName="nav--active">Delivery Routes</NavLink>
        </React.Fragment>
    )
}

export default Navigation;