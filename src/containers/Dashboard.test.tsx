import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should render without crashing');
});
