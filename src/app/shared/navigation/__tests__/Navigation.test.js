
import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe('<Navigation />', () => {

    let wrapped = shallow(<Navigation />);

    it('should render 3 nav links', () => {
        expect(wrapped.find('.nav').length).toEqual(3);
    });

});
