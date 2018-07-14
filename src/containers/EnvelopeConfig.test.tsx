import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EnvelopeConfig from './EnvelopeConfig';

describe('<EnvelopeConfig />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<EnvelopeConfig />);
  });

  it('should render without crashing');
});
