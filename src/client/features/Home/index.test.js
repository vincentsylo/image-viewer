import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from 'client/stores';
import Component from './index';

const wrapper = shallow(<Provider store={configureStore()}><Component /></Provider>);

describe('Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});
