import * as React from 'react';
import './WaveConfig.css';
import sine from '../assets/sine.svg';
import triangle from '../assets/triangle.svg';
import sawtooth from '../assets/sawtooth.svg';
import square from '../assets/square.svg';
import { WaveType } from '../enums/enums';
import { KeyboardContext, KeyboardState } from '../state/KeyboardProvider';

export default _ => (
  <KeyboardContext.Consumer>
    {(context: KeyboardState) => (
      <div className="flex-row">
        <label className="flex-row wave-input" htmlFor={WaveType.square}>
          <input
            defaultChecked
            type="radio"
            name="setWave"
            id={WaveType.square}
            onChange={() => context.setWave(WaveType.square)}
          />
          <img src={square} alt="square wave" width="32" height="25" />
        </label>
        <label className="flex-row wave-input" htmlFor={WaveType.sawtooth}>
          <input
            type="radio"
            name="setWave"
            id={WaveType.sawtooth}
            onChange={() => context.setWave(WaveType.sawtooth)}
          />
          <img src={sawtooth} alt="sawtooth wave" width="32" height="25" />
        </label>
        <label className="flex-row wave-input" htmlFor={WaveType.triangle}>
          <input
            type="radio"
            name="setWave"
            id={WaveType.triangle}
            onChange={() => context.setWave(WaveType.triangle)}
          />
          <img src={triangle} alt="triangle wave" width="32" height="25" />
        </label>
        <label className="flex-row wave-input" htmlFor={WaveType.sine}>
          <input
            type="radio"
            name="setWave"
            id={WaveType.sine}
            onChange={() => context.setWave(WaveType.sine)}
          />
          <img src={sine} alt="sine wave" width="32" height="25" />
        </label>
      </div>
    )}
  </KeyboardContext.Consumer>
);
