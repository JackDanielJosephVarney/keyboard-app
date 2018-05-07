import * as React from 'react';
import './App.css';

import Keyboard from './containers/Keyboard';
import KeyboardProvider from './state/KeyboardProvider';
import GitHubButton from './components/GitHubButton';

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default App;
