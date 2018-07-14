import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DashboardButton from './DashboardButton';

describe('<DashboardButton />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DashboardButton onClick={e => undefined} />);
  });

  it('renders without crashing', () => {
    const children = <span>plz work</span>;
    wrapper.setProps({ children });
  });

  it('should have dashboard-button-focus css class on mousedown', () => {
    wrapper.simulate('mousedown');
    expect(wrapper.hasClass('dashboard-button-focus')).toBeTruthy();
  });

  it('should have dashboard-button-unfocused css class on blur', () => {
    wrapper.simulate('mousedown');
    wrapper.simulate('mouseup');
    expect(wrapper.hasClass('dashboard-button-unfocused')).toBeTruthy();

    wrapper.simulate('mousedown');
    wrapper.simulate('mouseleave');
    expect(wrapper.hasClass('dashboard-button-unfocused')).toBeTruthy();
  });
});
