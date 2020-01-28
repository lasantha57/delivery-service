import React from 'react';

import Button from '../shared/controls/Button';
import Input from '../shared/controls/Input';

const DeliveryCost = () => {
    return (
        <div className="tab">
            <h4>Find your Cost for Delivery Route</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group">
                        <Input id="route" type="text" name="route" placeholder="Route"></Input>
                    </div>
                    <div>
                        <Button id="find" type="button">Find Cost</Button>
                    </div>
                </form>
            </div>
            <div className="container">

            </div>
        </div>
    )
}

export default DeliveryCost;