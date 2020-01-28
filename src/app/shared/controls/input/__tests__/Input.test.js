import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {

    it('should render input with a class', () => {
        const input = shallow(<Input />);
        expect(input.hasClass('form__input')).toEqual(true);
    });

    it('should render input with a default and custom class', () => {
        const input = shallow(<Input className="test-me" />);
        expect(input.hasClass('form__input test-me')).toEqual(true);
    });
});