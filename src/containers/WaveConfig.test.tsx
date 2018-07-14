import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import WaveConfig from './WaveConfig';

describe('<WaveConfig />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<WaveConfig />);
  });

  it('should render without crashing');
});
