import * as React from 'react';

import logo from './logo.svg';
import Keyboard from './containers/Keyboard';
import KeyboardProvider from './state/KeyboardProvider';

class App extends React.Component {
  public render() {
    return (
      <KeyboardProvider>
        <Keyboard />
      </KeyboardProvider>
    );
  }
}

export default App;
