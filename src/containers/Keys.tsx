import * as React from 'react';
import './Keys.css';
import Key from '../components/Key';
import { MusicUtils } from '../utilities/MusicUtils';
import { KeyboardContext } from '../state/KeyboardProvider';
import { WaveType } from '../enums/enums';

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
    return <div className="keys-container">{this.generateKeyboard()}</div>;
  }

  generateKeyboard(): JSX.Element {
    const keys = keyCodes.map((keyCode, i) => (
      <KeyboardContext.Consumer key={i}>
        {context => (
          <div className={this.getNote(i).length > 1 ? 'key-wrapper sharp-key-wrapper' : 'key-wrapper not-so-sharp-key-wrapper'}>
            <Key
              freq={MusicUtils.getSemitone(context.rootNote, i)}
              audioContext={this.audioContext}
              keyCode={keyCode}
              waveType={context.waveType}
            />
          </div>
        )}
      </KeyboardContext.Consumer>
    ));

    const y = 3;
    const x = 3 * 1.5;
    const se = y * 2;
    const magic = se * 2;

    return (
      <>
        <div className="not-so-sharp-key-container">
          {keys[0]}
          {keys[2]}
          {keys[4]}
          {keys[5]}
          {keys[7]}
          {keys[9]}
          {keys[11]}
          {keys[12]}
          {keys[14]}
          {keys[16]}
        </div>
        <div className="sharp-key-container">
          <div className="seperator" style={{ flex: se }} />
          {keys[1]}
          <div className="seperator" style={{ flex: x }} />
          {keys[3]}
          <div className="seperator" style={{ flex: magic }} />
          {keys[6]}
          <div className="seperator" style={{ flex: x }} />
          {keys[8]}
          <div className="seperator" style={{ flex: x }} />
          {keys[10]}
          <div className="seperator" style={{ flex: magic }} />
          {keys[13]}
          <div className="seperator" style={{ flex: x }} />
          {keys[15]}
          <div className="seperator" style={{ flex: se }} />
        </div>
      </>
    );
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
