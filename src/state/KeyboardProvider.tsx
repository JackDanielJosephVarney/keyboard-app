import * as React from 'react';
import { WaveType } from '../enums/WaveType';
import { MusicUtils } from '../utilities/MusicUtils';

export interface State {
  waveType: WaveType;
  rootNote: number;
}

export interface KeyboardState {
  waveType: WaveType;
  setWave: Function;
  rootNote: number;
  setRootNote: Function;
}

export const KeyboardContext = React.createContext({}) as React.Context<KeyboardState>;
const c4 = 261.63;

export default class KeyboardProvider extends React.Component<{}, State> {
  state = {
    waveType: WaveType.square,
    rootNote: c4
  };

  render() {
    return (
      <KeyboardContext.Provider
        value={{
          waveType: this.state.waveType,
          setWave: (waveType: WaveType) => this.setState({ waveType }),
          rootNote: this.state.rootNote,
          setRootNote: (change: number) => this.setState({ rootNote: MusicUtils.getSemitone(this.state.rootNote, change) })
        }}
      >
        {this.props.children}
      </KeyboardContext.Provider>
    );
  }
}
