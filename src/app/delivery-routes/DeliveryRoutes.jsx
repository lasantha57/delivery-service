import React, { useState, useMemo } from 'react';
import { getPossibleRoutes } from '../../helpers/route-helper';
import { validateTextInput } from '../../helpers/validate-helper';

import Button from '../shared/controls/button/Button';
import Input from '../shared/controls/input/Input';
import Table from '../shared/controls/table/Table';

const DeliveryRoutes = () => {

    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [stops, setStops] = useState(10);
    const [routes, setRoutes] = useState([]);

    const findRoutesHandler = () => {
        setRoutes(getPossibleRoutes(startLocation, endLocation, stops));
    }

    const renderPossibleRoutes = useMemo(() => {
        if (routes.length === 0) {
            return <strong>No possible routes</strong>
        }
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Cost $</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.routes}</td>
                            <td>{item.cost}</td>
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
            <h4>Find your Delivery Routes</h4>
            <div className="container">
                <form className="form">
                    <div className="form__group form__group--margin-right">
                        <Input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value.toUpperCase())} name="startLocation" placeholder="Start From" maxLength="1"></Input>
                    </div>
                    <div className="form__group form__group--margin-right">
                        <Input type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value.toUpperCase())} name="endLocation" placeholder="To" maxLength="1"></Input>
                    </div>
                    <div className="form__group">
                        <Input type="number" value={stops} onChange={(e) => setStops(e.target.value)} name="stops" placeholder="Stops" min="1"></Input>
                    </div>
                    <div>
                        <Button id="find" type="button" disabled={isFormValid()} onClick={findRoutesHandler}>Find Route</Button>
                    </div>
                </form>
            </div>
            <div className="container">
                {renderPossibleRoutes}
            </div>
        </div>
    )
}

export default DeliveryRoutes;