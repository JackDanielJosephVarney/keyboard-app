import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Key from './Key';
import { WaveType } from '../enums/enums';

// JSDOM doesnt support audiocontext api - cant test
describe('<Key />', () => {
  var wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Key
        freq={1}
        audioContext={null}
        keyCode={1}
        waveType={WaveType.sine}
        ariaLabel={'hey'}
        decay={1}
        attack={1}
      />
    );
  });

  it('renders without crashing');
});
