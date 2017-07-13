import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './index';

describe('TextInput', () => {
  it('can update value', () => {
    const textInput = shallow(<TextInput id="test" label="test" />);

    expect(textInput.state().value).toEqual('');

    textInput.find('input').simulate('change', { target: { value: 'changed text' }});

    expect(textInput.state().value).toEqual('changed text');
  });
});
