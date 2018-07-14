import * as React from 'react';
import './Keys.css';
import Key from '../components/Key';
import { MusicUtils } from '../utilities/MusicUtils';
import { KeyboardContext } from '../state/KeyboardProvider';
import { WaveType } from '../enums/enums';

const flat = String.fromCharCode(9837);
const notes: string[] = [
  'C',
  'C#/D' + flat,
  'D',
  'D#/E' + flat,
  'E',
  'F',
  'F#/G' + flat,
  'G',
  'G#/A' + flat,
  'A',
  'A#/B' + flat,
  'B'
];
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
  69, // e
  82, // r
  53, // 5
  84, // t
  54, // 6
  89, // y
  55, // 7
  85, // u
  73, // i
  57, // 9
  79, // o
  48, // 0
  80 // p
]; // qwerty 4 life

export interface Props {}

export interface State {}

export default class Keyboard extends React.Component<Props, State> {
  state = {};
  audioContext: AudioContext;

  componentWillMount() {
    this.audioContext = MusicUtils.getAudioContext();
  }

  render() {
    return <div className="keys-container">{this.generateKeyboard()}</div>;
  }

  generateKeyboard(): JSX.Element {
    const extraCCodes: number[] = [81];
    const extraDCodes: number[] = [87];
    const extraECodes: number[] = [191];

    const keys = keyCodes.map((keyCode, i) => (
      <KeyboardContext.Consumer key={i}>
        {context => (
          <div
            className={
              this.getNote(i).length > 1
                ? 'key-wrapper sharp-key-wrapper'
                : 'key-wrapper not-so-sharp-key-wrapper'
            }
          >
            <Key
              freq={MusicUtils.getSemitone(context.rootNote, i)}
              audioContext={this.audioContext}
              keyCode={keyCode}
              waveType={context.waveType}
              ariaLabel={this.getNote(i)}
              attack={context.attack}
              decay={context.decay}
              extraCodes={((): number[] => {
                // the below was a mistake
                // lmao im not cleaning this up
                const note: string = this.getNote(i);
                if (note === 'C' && i > 2) {
                  return extraCCodes.splice(0, extraCCodes.length) || null;
                } else if (note === 'D' && i > 3) {
                  return extraDCodes.splice(0, 1) || null;
                } else if (note === 'E' && i > 4) {
                  return extraECodes.splice(0, 1) || null;
                } else {
                  return null;
                }
              })()}
            />
          </div>
        )}
      </KeyboardContext.Consumer>
    ));

    // most of this class was a mistake lol...
    return (
      <>
        <div className="flex-row">
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
          {keys[17]}
          {keys[19]}
          {keys[21]}
          {keys[23]}

          {keys[24]}
          {keys[26]}
          {keys[28]}
        </div>
        <div className="flex-row sharp-key-container">
          <div className="seperator sep-se" />
          {keys[1]}
          <div className="seperator sep-x" />
          {keys[3]}
          <div className="seperator sep-magic" />
          {keys[6]}
          <div className="seperator sep-x" />
          {keys[8]}
          <div className="seperator sep-x" />
          {keys[10]}
          <div className="seperator sep-magic" />

          {keys[13]}
          <div className="seperator sep-x" />
          {keys[15]}
          <div className="seperator sep-magic" />
          {keys[18]}
          <div className="seperator sep-x" />
          {keys[20]}
          <div className="seperator sep-x" />
          {keys[22]}
          <div className="seperator sep-magic" />

          {keys[25]}
          <div className="seperator sep-x" />
          {keys[27]}
          <div className="seperator sep-se" />
        </div>
      </>
    );
  }

  // since there are more keys than notes you need to loop back to the start
  getNote(i: number): string {
    while (i > notes.length - 1) {
      i = i - notes.length;
    }

    return notes[i];
  }
}
