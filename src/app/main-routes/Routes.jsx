import React from 'react';

import Button from '../shared/controls/Button';
import Input from '../shared/controls/Input';

const Routes = () => {
    return (
        <div className="tab__content">
            <h4>Please add your Routes</h4>
            <div className="form__container">
                <form>
                    <div className="form-group">
                        <Input id="fromLocation" type="text" name="startLocation" placeholder="Start From"></Input>
                    </div>
                    <div className="form-group">
                        <Input id="toLocation" type="text" name="toLocation" placeholder="To"></Input>
                    </div>
                    <div className="form-group">
                        <Input id="cost" type="number" name="cost" placeholder="Cost"></Input>
                    </div>
                    <div>
                        <Button id="add" type="button">Add Route</Button>
                    </div>
                </form>
            </div>
            <div className="result__container">

            </div>
        </div>
    )
}

export default Routes;