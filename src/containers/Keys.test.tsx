import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Keys from './Keys';

describe('<Keys />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Keys />);
  });

  it('should render without crashing');
});
