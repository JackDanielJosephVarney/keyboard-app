import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DashboardSlider from './DashboardSlider';

describe('<DashboardSlider />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DashboardSlider min={0} max={1} step={1} defaultValue={0} onChange={() => {}} />
    );
  });

  it('renders without crashing');
});
