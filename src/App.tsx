import * as React from 'react';
import './App.css';

import Keyboard from './containers/Keyboard';
import KeyboardProvider from './state/KeyboardProvider';

class App extends React.Component {
  public render() {
    return (
      <KeyboardProvider>
        <div className="keyboard-wrapper">
          <Keyboard />
        </div>
      </KeyboardProvider>
    );
  }
}

export default App;
