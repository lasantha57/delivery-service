import React, { useState, useMemo } from 'react';
import { getDeliveryCost } from '../../helpers/route-helper';
import { validateRoute } from '../../helpers/validate-helper';

import Button from '../shared/controls/button/Button';
import Input from '../shared/controls/input/Input';

const DeliveryCost = () => {

    const [route, setRoute] = useState('');
    const [cost, setCost] = useState(0);
    const [error, setError] = useState('');

    const findCostHandler = () => {
        const err = validateRoute(route);
        setError(err);
        if (!err) {
            setCost(getDeliveryCost(route));
        }
    }

    const routeChangeHandler = (e) => {
        if (cost !== 0) {
            setCost(0);
        }
        setRoute(e.target.value.toUpperCase());
    }

    const renderRouteCost = useMemo(() => {
        if (cost === 0) {
            return '';
        }

        return (
            <strong>{isNaN(cost) ? 'No such Route' : `Your cost for route is $${cost}`}</strong>
        )
    }, [cost])

    return (
        <div className="tab">
            <h4>Find your Cost for Delivery Route. Eg: A-B-E</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group">
                        <Input id="route" type="text" name="route" placeholder="Route" value={route} onChange={routeChangeHandler}></Input>
                    </div>
                    <div>
                        <Button id="find" type="button" disabled={!route} onClick={findCostHandler}>Find Cost</Button>
                    </div>
                    <div className="form__error">{error ? error : ''}</div>
                </form>
            </div>
            <div className="container">
                {renderRouteCost}
            </div>
        </div>
    )
}

export default DeliveryCost;