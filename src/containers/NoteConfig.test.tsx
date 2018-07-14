import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NoteConfig from './NoteConfig';

describe('<NoteConfig />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteConfig />);
  });

  it('should render without crashing');
});
