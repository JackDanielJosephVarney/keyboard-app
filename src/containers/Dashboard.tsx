import * as React from 'react';
import './Dashboard.css';
import NoteConfig from './NoteConfig';
import WaveConfig from './WaveConfig';

export interface Props {}

export interface State {}

export default class Dashboard extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <div className="note-wrapper">
          <NoteConfig />
        </div>
        <div className="wave-wrapper">
          <WaveConfig />
        </div>
      </div>
    );
  }
}