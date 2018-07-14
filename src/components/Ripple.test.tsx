import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Ripple from './Ripple';

describe('<Ripple />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Ripple />);
  });

  it('renders without crashing');
});
