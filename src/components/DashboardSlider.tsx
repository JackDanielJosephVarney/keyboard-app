import * as React from 'react';
import './DashboardSlider.css';

export interface Props {
  min: number;
  max: number;
  step: number;
  default: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {}

export default class DashboardSlider extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="flex-row dashboard-slider-container">
        <label className="dashboard-slider-label">{this.props.children}</label>
        <div className="dashboard-slider-wrapper">
          <input
            className="dashboard-slider"
            type="range"
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.default.toString()}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}
