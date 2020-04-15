import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import InputField from '../InputField';
 

describe('Testing Input FIeld', () => {

  
 
  it('should  render correctly', () => {    
      const wrapper = shallow(<InputField name="item" value="" callback={(e) => console.log(e) } type="number"  />);
      expect(wrapper).toMatchSnapshot();
  });
})



 