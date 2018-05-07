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
      <button
        className={this.state.className}
        onClick={this.props.onClick}
        onMouseDown={this.onFocus}
        onMouseUp={this.onUnfocus}
        onMouseLeave={this.onUnfocus}
      >
        {this.props.children}
      </button>
    );
  }

  onFocus = () => this.setState({ className: 'dashboard-button dashboard-button-focus' });
  onUnfocus = () => this.setState({ className: 'dashboard-button dashboard-button-unfocused' });
}
