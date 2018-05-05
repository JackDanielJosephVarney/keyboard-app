import * as React from 'react';
import './Keyboard.css';
import Keys from './Keys';

export interface Props {}

export interface State {}

export default class Keyboard extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="keyboard">
        <div className="keys-wrapper">
          <Keys />
        </div>
      </div>
    );
  }
}
