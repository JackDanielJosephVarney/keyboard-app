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
        <div className="config-container">
          <h2 className="config-title">Root type: </h2>
          <NoteConfig />
        </div>
        <div className="config-container">
          <h2 className="config-title">Wave type: </h2>
          <WaveConfig />
        </div>
      </div>
    );
  }
}
