import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

const wrapper = shallow(<Component id="1" />);

describe('Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
});
