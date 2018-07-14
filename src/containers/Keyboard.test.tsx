import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Keyboard, { Props, State } from './Keyboard';

describe('<Keyboard />', () => {
  var wrapper: ShallowWrapper<Props, State, Keyboard>;

  beforeEach(() => {
    wrapper = shallow(<Keyboard />);
  });

  it('should render without crashing');

  it('should have isMobile of true when window width less than 1280', () => {
    // @ts-ignore
    global.innerWidth = 1279;
    expect(wrapper.state().isMobile).toBeTruthy();
  });
});
