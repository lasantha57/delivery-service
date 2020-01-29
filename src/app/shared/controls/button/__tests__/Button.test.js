import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {

    it('should render button with a class', () => {
        const input = shallow(<Button />);
        expect(input.hasClass('form__button')).toEqual(true);
    });

    it('should render button with a default and custom class', () => {
        const input = shallow(<Button className="test-me" />);
        expect(input.hasClass('form__button test-me')).toEqual(true);
    });
});