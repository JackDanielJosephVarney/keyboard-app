import * as React from 'react';
import './Dashboard.css';
import NoteConfig from './NoteConfig';
import WaveConfig from './WaveConfig';
import EnvelopeConfig from './EnvelopeConfig';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex-row dashboard">
        <div className="flex-column dashboard-col">
          <div className="flex-row-res dashboard-row">
            <h2 className="config-title">Pitch: </h2>
            <div className="config-wrapper">
              <NoteConfig />
            </div>
          </div>
          <div className="flex-row-res dashboard-row">
            <h2 className="config-title">Wave: </h2>
            <div className="config-wrapper">
              <WaveConfig />
            </div>
          </div>
        </div>
        <div className="flex-column dashboard-col">
          <h2 className="config-title">Envelope: </h2>
          <EnvelopeConfig />
        </div>
      </div>
    );
  }
}
