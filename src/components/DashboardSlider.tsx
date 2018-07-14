import * as React from 'react';
import './DashboardSlider.css';

export interface Props {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {}

export default class DashboardSlider extends React.Component<Props, State> {
  state = {};

  render() {
    const { min, max, step, onChange, defaultValue, children } = this.props;

    return (
      <div className="flex-row dashboard-slider-container">
        <label className="dashboard-slider-label">{children}</label>
        <div className="dashboard-slider-wrapper">
          <input
            className="dashboard-slider"
            type="range"
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue.toString()}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}
