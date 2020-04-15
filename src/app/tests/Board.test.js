import React from 'react';
import { render } from '@testing-library/react';

import { mount } from 'enzyme';
import Board from '../Board';

test('Component Renders Correctly ', () => {
    const wrapper = mount(<Board />);
    expect(wrapper).toMatchSnapshot();

});
