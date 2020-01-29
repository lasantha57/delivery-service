import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

describe('<Table />', () => {

    it('should render table with a class', () => {
        const table = shallow(<Table />);
        expect(table.hasClass('result__table')).toEqual(true);
    });

    it('should render table with a default and custom class', () => {
        const table = shallow(<Table className="test-me" />);
        expect(table.hasClass('result__table test-me')).toEqual(true);
    });
});