import React, { useState, useEffect } from 'react';
import { getAvailableRoutes, addNewRoute } from '../../helpers/route-helper';
import Button from '../shared/controls/Button';
import Input from '../shared/controls/Input';
import Table from '../shared/controls/Table';

const Routes = () => {

    const [routes, setRoutes] = useState([]);
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [cost, setCost] = useState(1);

    useEffect(() => {
        setRoutes(getAvailableRoutes());
    }, []);

    const addRouteHandler = () => {
        addNewRoute(`${startLocation}${endLocation}${cost}`);
        setRoutes(getAvailableRoutes());
    }

    return (
        <div className="tab">
            <h4>Please add your Routes</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group">
                        <Input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value.toUpperCase())} name="startLocation" placeholder="Start From" maxLength="1"></Input>
                    </div>
                    <div className="form__group">
                        <Input type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value.toUpperCase())} name="endLocation" placeholder="To" maxLength="1"></Input>
                    </div>
                    <div className="form__group">
                        <Input type="number" value={cost} onChange={(e) => setCost(e.target.value)} name="cost" placeholder="Cost" min="1"></Input>
                    </div>
                    <div>
                        <Button type="button" disabled={!startLocation || !endLocation || startLocation === endLocation} onClick={addRouteHandler}>Add Route</Button>
                    </div>
                </form>
            </div>
            <div className="container">
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
            </div>
        </div>
    )
}

export default Routes;