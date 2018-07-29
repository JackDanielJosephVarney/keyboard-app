import * as React from 'react';
import { WaveType } from '../enums/WaveType';
import { MusicUtils } from '../utilities/MusicUtils';

export interface State {
  waveType: WaveType;
  rootNote: number;
  attack: number;
  release: number;
  audioContext: AudioContext;
}

export interface KeyboardState {
  waveType: WaveType;
  setWave: Function;
  rootNote: number;
  setRootNote: Function;
  resetRootNote: Function;
  attack: number;
  setAttack: Function;
  release: number;
  setRelease: Function;
  audioContext: AudioContext;
}

export const KeyboardContext = React.createContext({}) as React.Context<KeyboardState>;
const c4 = 261.63;

export default class KeyboardProvider extends React.Component<{}, State> {
  state = {
    waveType: WaveType.sine,
    rootNote: c4,
    attack: 0.001,
    release: 0.5,
    audioContext: MusicUtils.getAudioContext()
  };

  componentWillMount() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // increase by 12 on caps lock
      if (e.keyCode === 20) {
        this.setState({
          rootNote: MusicUtils.getSemitone(this.state.rootNote, 12)
        });
      }

      // decrease by 16 on shift
      if (e.keyCode === 16) {
        this.setState({
          rootNote: MusicUtils.getSemitone(this.state.rootNote, -12)
        });
      }
    });
  }

  render() {
    return (
      <KeyboardContext.Provider
        value={{
          waveType: this.state.waveType,
          setWave: (waveType: WaveType) => this.setState({ waveType }),
          rootNote: this.state.rootNote,
          setRootNote: (change: number) =>
            this.setState({
              rootNote: MusicUtils.getSemitone(this.state.rootNote, change)
            }),
          resetRootNote: () => this.setState({ rootNote: c4 }),
          attack: this.state.attack,
          setAttack: (attack: number) => this.setState({ attack }),
          release: this.state.release,
          setRelease: (release: number) => this.setState({ release }),
          audioContext: this.state.audioContext
        }}
      >
        {this.props.children}
      </KeyboardContext.Provider>
    );
  }
}
