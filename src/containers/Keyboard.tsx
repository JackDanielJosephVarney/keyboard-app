import * as React from 'react';
import './Keyboard.css';
import Key from '../components/Key';
import { MusicUtils } from '../utilities/MusicUtils';

const c4 = 261.63;
const a4 = 440;
const flat = String.fromCharCode(9837);
const notes: string[] = ['C', 'C#/D' + flat, 'D', 'D#/E' + flat, 'E', 'F', 'F#/G' + flat, 'G', 'G#/A' + flat, 'A', 'A#/B' + flat, 'B'];
const keyCodes: number[] = [
  90, // z
  83, // s
  88, // x
  68, // d
  67, // c
  86, // v
  71, // g
  66, // b
  72, // h
  78, // n
  74, // j
  77, // m
  188, // ,
  76, // l
  190, // .
  186, // ;
  191 // /
]; // qwerty 4 life

export interface Props {}

export interface State {}

export default class Keyboard extends React.Component<Props, State> {
  state = {};
  audioContext: AudioContext = MusicUtils.getAudioContext();

  render() {
    return <div className="key-container">{this.getKeys()}</div>;
  }

  getKeys(): JSX.Element[] {
    return keyCodes.map((keyCode, i) => (
      <div key={i} className={this.getNote(i).length > 1 ? 'key-wrapper sharp-key-wrapper' : 'key-wrapper not-so-sharp-key-wrapper'}>
        <Key freq={MusicUtils.getSemitone(c4, i)} audioContext={this.audioContext} keyCode={keyCode}>
          {this.getNote(i)}
        </Key>
      </div>
    ));
  }

  // since there are more keys than notes you need to loop back to the start
  getNote(i: number): string {
    let index = i;
    if (i > notes.length - 1) {
      index = i - notes.length;
    }
    return notes[index];
  }
}
