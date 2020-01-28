import React from 'react';

import Button from '../shared/controls/Button';
import Input from '../shared/controls/Input';

const DeliveryRoutes = () => {
    return (
        <div className="tab">
            <h4>Find your Delivery Routes</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group">
                        <Input id="startLocation" type="text" name="startLocation" placeholder="Start from"></Input>
                    </div>
                    <div className="form__group">
                        <Input id="toLocation" type="text" name="toLocation" placeholder="To"></Input>
                    </div>
                    <div className="form__group">
                        <Input id="stops" type="number" name="stops" placeholder="Stops"></Input>
                    </div>
                    <div>
                        <Button id="find" type="button">Find Route</Button>
                    </div>
                </form>
            </div>
            <div className="container">

            </div>
        </div>
    )
}

export default DeliveryRoutes;