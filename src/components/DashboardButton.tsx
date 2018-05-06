import * as React from 'react';
import './DashboardButton.css';

export interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface State {
  className: string;
}

export default class extends React.Component<Props, State> {
  state = {
    className: 'dashboard-button dashboard-button-unfocused'
  };

  render() {
    return (
      <button className={this.state.className} onClick={this.props.onClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        {this.props.children}
      </button>
    );
  }

  onMouseDown = () => this.setState({ className: 'dashboard-button dashboard-button-focus' });
  onMouseUp = () => this.setState({ className: 'dashboard-button dashboard-button-unfocused' });
}
