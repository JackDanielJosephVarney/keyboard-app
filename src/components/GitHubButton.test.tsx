import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GitHubButton from './GitHubButton';

describe('<GitHubButton />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<GitHubButton />);
  });

  it('renders without crashing');
});
