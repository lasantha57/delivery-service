import React, { useState } from 'react';
import { getDeliveryCost } from '../../helpers/route-helper';

import Button from '../shared/controls/button/Button';
import Input from '../shared/controls/input/Input';

const DeliveryCost = () => {

    const [route, setRoute] = useState('');
    const [cost, setCost] = useState(0);

    const findCostHandler = () => {
        setCost(getDeliveryCost());
    }

    return (
        <div className="tab">
            <h4>Find your Cost for Delivery Route</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group">
                        <Input id="route" type="text" name="route" placeholder="Route" value={route} onChange={(e) => setRoute(e.target.value.toUpperCase())}></Input>
                    </div>
                    <div>
                        <Button id="find" type="button" onClick={findCostHandler}>Find Cost</Button>
                    </div>
                </form>
            </div>
            <div className="container">
                <div>Your cost is {cost}</div>
            </div>
        </div>
    )
}

export default DeliveryCost;