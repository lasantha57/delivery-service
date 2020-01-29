import React from 'react';
import { shallow } from 'enzyme';
import DeliveryCost from '../DeliveryCost';

describe('<DeliveryCost />', () => {

    let wrapped;

    beforeEach(() => { wrapped = shallow(<DeliveryCost />); });

    it('includes one div with className="tab"', () => {
        expect(wrapped.find('div.tab')).toHaveLength(1);
    });

    it('includes 2 divs with className="container"', () => {
        expect(wrapped.find('div.container')).toHaveLength(2);
    });

    it('should show route input', () => {
        expect(wrapped.find('#route')).toHaveLength(1);
    });

    it('route input should have default value as empty', () => {
        expect(wrapped.find('#route').prop('value')).toEqual('');
    });

    it('should show button to Find Cost disabled', () => {
        expect(wrapped.find('#find')).toHaveLength(1);
        expect(wrapped.find('#find').prop('disabled')).toBeTruthy();
    });

    it('should enable Find Cost button when route is entered', () => {
        wrapped.find('#route').simulate('change', { target: { value: 'AB' } });
        expect(wrapped.find('#find').prop('disabled')).toEqual(false);
    });

    it('should show Find Cost button when route is entered', () => {
        wrapped.find('#route').simulate('change', { target: { value: 'AB' } });
        expect(wrapped.find('#find').prop('disabled')).toEqual(false);
    });

    it('should show Find Cost button when route is entered', () => {
        wrapped.find('#route').simulate('change', { target: { value: 'AB' } });
        expect(wrapped.find('#find').prop('disabled')).toEqual(false);
    });

    it('should show error when route is entered', () => {
        wrapped.find('#route').simulate('change', { target: { value: 'AB' } });
        wrapped.find('#find').simulate('click');
    });

});