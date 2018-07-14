import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Ripple, { State } from './Ripple';

describe('<Ripple />', () => {
  var wrapper: ShallowWrapper<null, State, Ripple>;

  beforeEach(() => {
    wrapper = shallow(<Ripple />);
  });

  it('renders without crashing');

  it('kills iteself after a second', async () =>
    new Promise(res => {
      setTimeout(() => {
        expect(wrapper.state().isAlive).toBeFalsy();
        res();
      }, 1000);
    }));

  it('has css class rippled', () => {
    expect(wrapper.hasClass('rippled')).toBeTruthy();
  });
});
