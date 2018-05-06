import * as React from 'react';
import { WaveType } from '../enums/enums';
import { KeyboardContext, KeyboardState } from '../state/KeyboardProvider';

export interface Props {}

export interface State {}

export default class WaveConfig extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <KeyboardContext.Consumer>
        {(context: KeyboardState) => (
          <>
            <label htmlFor={WaveType.square}>
              Square
              <input type="radio" name="setWave" id={WaveType.square} onChange={() => context.setWave(WaveType.square)} />
            </label>
            <label htmlFor={WaveType.sawtooth}>
              Sawtooth
              <input type="radio" name="setWave" id={WaveType.sawtooth} onChange={() => context.setWave(WaveType.sawtooth)} />
            </label>
            <label htmlFor={WaveType.triangle}>
              Triangle
              <input type="radio" name="setWave" id={WaveType.triangle} onChange={() => context.setWave(WaveType.triangle)} />
            </label>
            <label htmlFor={WaveType.sine}>
              Sine
              <input type="radio" name="setWave" id={WaveType.sine} onChange={() => context.setWave(WaveType.sine)} />
            </label>
          </>
        )}
      </KeyboardContext.Consumer>
    );
  }
}
