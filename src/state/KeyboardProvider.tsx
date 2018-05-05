import * as React from 'react';
import { WaveType } from '../enums/WaveType';

export interface State {
  waveType: WaveType;
}

export interface KeyboardContext {
  waveType: WaveType;
  setWave: Function;
}

export const KeyboardContext = React.createContext({}) as React.Context<KeyboardContext>;

export default class KeyboardProvider extends React.Component<{}, State> {
  state = {
    waveType: WaveType.square
  };

  render() {
    return (
      <KeyboardContext.Provider
        value={{
          waveType: this.state.waveType,
          setWave: (waveType: WaveType) => this.setState({ waveType })
        }}
      >
        {this.props.children}
      </KeyboardContext.Provider>
    );
  }
}
