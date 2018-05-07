import * as React from 'react';
import './MobileDashboard.css';
import Dashboard from './Dashboard';

export interface Props {}

export interface State {
  showMenu: boolean;
}

const Button: React.StatelessComponent<{ onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }> = props => (
  <button className="mobile-dashboard-button" onClick={props.onClick}>
    {props.children}
  </button>
);

export default class MobileDashboard extends React.Component<Props, State> {
  state = {
    showMenu: false
  };

  render() {
    return (
      <>
        {this.state.showMenu ? (
          <>
            <Dashboard />
            <Button onClick={() => this.setState({ showMenu: false })}>Hide dashboard</Button>
          </>
        ) : (
          <Button onClick={() => this.setState({ showMenu: true })}>Show dashboard</Button>
        )}
      </>
    );
  }
}
