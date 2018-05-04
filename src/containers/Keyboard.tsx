import * as React from 'react';
import './Keyboard.css';
import Key from '../components/Key';
import { MusicUtils } from '../utilities/MusicUtils';

const c4 = 261.63;
const a4 = 440;
const keyCodes = [
  88, // x
  68, // d
  67, // c
  70, // f
  86, // v
  66, // b
  72, // h
  78, // n
  74, // j
  77, // m
  75, // k
  188 // ,
]; // qwerty 4 life

export interface Props {}

export interface State {}

export default class Keyboard extends React.Component<Props, State> {
  state = {};
  audioContext: AudioContext = MusicUtils.getAudioContext();

  render() {
    return <div className="key-container">{this.getKeys()}</div>;
  }

  getKeys() {
    return keyCodes.map((keyCode, i) => (
      <Key key={keyCode} freq={MusicUtils.getSemitone(a4, i)} audioContext={this.audioContext} keyCode={keyCode} />
    ));
  }
}
