import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MobileDashboard, { State } from './MobileDashboard';

describe('<MobileDashboard />', () => {
  var wrapper: ShallowWrapper<null, State, MobileDashboard>;

  beforeEach(() => {
    wrapper = shallow(<MobileDashboard />);
  });

  it('should render without crashing');

  it('should not menu rendered', () => {
    expect(wrapper.find('Dashboard').length).toBeFalsy();
  });

  it('should show menu when button clicked', () => {
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('Dashboard').length).toBeTruthy();
  });

  it('should not menu when button clicked twice', () => {
    wrapper.find('Button').simulate('click');
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('Dashboard').length).toBeFalsy();
  });
});
