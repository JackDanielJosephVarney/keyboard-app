import * as React from 'react';
import './App.css';

import Keyboard from './containers/Keyboard';
import KeyboardProvider from './state/KeyboardProvider';
import GitHubButton from './components/GitHubButton';
import Visualiser from './containers/Visualiser';

class App extends React.Component {
  state = {
    isDesktop: window.innerWidth > 1280
  };

  public render() {
    return (
      <>
        <div className="app">
          <h1 className="title">Jacks awesome keyboard</h1>
          <h1 className="mobile-message">Rotate me!</h1>
          <KeyboardProvider>
            <div className="keyboard-wrapper">
              <Keyboard />
            </div>
          </KeyboardProvider>
        </div>
        {this.state.isDesktop && (
          <>
            <div className="visualiser-wrapper">
              <Visualiser />
            </div>
            <GitHubButton />
            <span className="flashing-warning">* Flashing Lights *</span>
          </>
        )}
      </>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isDesktop: window.innerWidth > 1280
      });
    });
  }
}

export default App;
