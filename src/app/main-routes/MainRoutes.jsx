import React, { useState, useEffect, useMemo } from 'react';
import { getAvailableRoutes, addNewRoute } from '../../helpers/route-helper';
import { validateTextInput } from '../../helpers/validate-helper';

import Button from '../shared/controls/button/Button';
import Input from '../shared/controls/input/Input';
import Table from '../shared/controls/table/Table';

const Routes = () => {

    const [routes, setRoutes] = useState([]);
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [cost, setCost] = useState(1);

    useEffect(() => {
        setRoutes(getAvailableRoutes());
    }, []);

    const addRouteHandler = () => {
        addNewRoute(startLocation, endLocation, cost);
        setRoutes(getAvailableRoutes());
        reset();
    }

    const reset = () => {
        setStartLocation('');
        setEndLocation('');
        setCost('');
    }

    const renderRoutes = useMemo(() => {
        if (routes.length === 0) {
            return <div>No routes defined</div>
        }

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Start Location</th>
                        <th>End Location</th>
                        <th>Cost $</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map((route, index) => {
                        return <tr key={index}>
                            <td>{route.startLocation}</td>
                            <td>{route.endLocation}</td>
                            <td>{route.cost}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        )
    }, [routes])

    const isFormValid = () => {
        return startLocation === '' || !validateTextInput(startLocation) || endLocation === '' || !validateTextInput(endLocation) || startLocation === endLocation;
    }

    return (
        <div className="tab">
            <h4>Please add your Routes</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group form__group--margin-right">
                        <Input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value.toUpperCase())} name="startLocation" placeholder="Start From" maxLength="1"></Input>
                    </div>
                    <div className="form__group form__group--margin-right">
                        <Input type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value.toUpperCase())} name="endLocation" placeholder="To" maxLength="1"></Input>
                    </div>
                    <div className="form__group">
                        <Input type="number" value={cost} onChange={(e) => setCost(e.target.value)} name="cost" placeholder="Cost" min="1"></Input>
                    </div>
                    <div>
                        <Button type="button" disabled={isFormValid()} onClick={addRouteHandler}>Add Route</Button>
                    </div>
                </form>
            </div>
            <div className="container">
                {renderRoutes}
            </div>
        </div>
    )
}

export default Routes;