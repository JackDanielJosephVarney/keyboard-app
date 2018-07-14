import * as React from 'react';
import './DashboardButton.css';

export interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface State {
  className: string;
}

class DashboardButton extends React.Component<Props, State> {
  state = {
    className: 'dashboard-button dashboard-button-unfocused'
  };

  render() {
    const { onClick, children } = this.props;

    return (
      <button
        className={this.state.className}
        onClick={onClick}
        onMouseDown={this.onFocus}
        onMouseUp={this.onUnfocus}
        onMouseLeave={this.onUnfocus}
      >
        {children}
      </button>
    );
  }

  onFocus = () => this.setState({ className: 'dashboard-button dashboard-button-focus' });
  onUnfocus = () => this.setState({ className: 'dashboard-button dashboard-button-unfocused' });
}

export default DashboardButton;
