import * as React from 'react';
import './App.css';

import Keyboard from './containers/Keyboard';
import KeyboardProvider from './state/KeyboardProvider';
import GitHubButton from './components/GitHubButton';
import Visualiser from './containers/Visualiser';

class App extends React.Component {
  public render() {
    return (
      <>
        <Visualiser />
        <div className="app">
          <GitHubButton />
          <h1 className="title">Jacks awesome keyboard</h1>
          <h1 className="mobile-message">Rotate me!</h1>
          <KeyboardProvider>
            <div className="keyboard-wrapper">
              <Keyboard />
            </div>
          </KeyboardProvider>
        </div>
        <span className="flashing-warning">* Flashing Lights *</span>
      </>
    );
  }
}

export default App;
