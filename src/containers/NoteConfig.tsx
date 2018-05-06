import * as React from 'react';
import { KeyboardContext, KeyboardState } from '../state/KeyboardProvider';

export interface Props {}

export interface State {}

export default class NoteConfig extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <KeyboardContext.Consumer>
        {(context: KeyboardState) => (
          <>
            <button onClick={() => context.setRootNote(12)}>Increase octave</button>
            <button onClick={() => context.setRootNote(-12)}>Decrease octave</button>
            <button onClick={() => context.setRootNote(1)}>Increase semitone</button>
            <button onClick={() => context.setRootNote(-1)}>Decrease semitone</button>
          </>
        )}
      </KeyboardContext.Consumer>
    );
  }
}
