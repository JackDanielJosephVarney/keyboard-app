import * as React from 'react';
import './Keyboard.css';
import Keys from './Keys';
import Dashboard from './Dashboard';
import MobileDashboard from './MobileDashboard';

export interface Props {}

export interface State {
  isMobile: boolean;
}

export default class Keyboard extends React.Component<Props, State> {
  state = {
    isMobile: false
  };

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 1280 });
    window.addEventListener('resize', () => {
      this.setState({ isMobile: window.innerWidth < 1280 });
    });
  }

  render() {
    return (
      <div className="keyboard">
        <div className="keyboard-items-container">
          {this.state.isMobile ? <MobileDashboard /> : <Dashboard />}
          <Keys />
        </div>
      </div>
    );
  }
}
