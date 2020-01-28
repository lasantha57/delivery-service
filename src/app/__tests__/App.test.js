import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../main-routes/Routes';

describe('<App />', () => {

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  describe('<Router/>', () => {

    it('should configure the /routes with Routes component', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/routes']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Routes)).toHaveLength(1);
    });
  });

});