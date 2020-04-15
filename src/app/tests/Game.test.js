import React from 'react';
import { render } from '@testing-library/react';
import Game from '../Game';
import { mount } from 'enzyme';

test('renders learn react link', () => {
//  const { getByText } = render(<Game />);
  
    const wrapper = mount(<Game />);
    expect(wrapper).toMatchSnapshot();

});
