import * as React from 'react';
import Dashboard from './Dashboard';

export interface Props {}

export interface State {
  showMenu: boolean;
}

export default class MobileDashboard extends React.Component<Props, State> {
  state = {
    showMenu: false
  };

  render() {
    return <>{this.state.showMenu ? <Dashboard /> : null}</>;
  }
}
