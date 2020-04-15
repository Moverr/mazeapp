import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import InputField from '../InputField';
 

describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = { };

      const wrapper = shallow(<InputField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 