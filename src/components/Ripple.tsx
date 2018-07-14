import * as React from 'react';
import './Ripple.css';
import { Utils } from '../utilities/Utils';
import { Colours } from '../enums/enums';

export interface State {
  isAlive: boolean;
  className: string;
}

export default class Ripple extends React.Component<null, State> {
  state = {
    isAlive: true,
    className: 'ripple'
  };

  pos = this.getPos();

  render() {
    const { isAlive, className } = this.state;
    return isAlive ? <span className={className} style={this.pos} /> : null;
  }

  componentDidMount() {
    if (this.state.className === 'ripple') {
      this.setState({ className: 'ripple rippled' });
    }
    setTimeout(() => this.setState({ isAlive: false }), 1000);
  }

  getPos(): React.CSSProperties {
    const { getRandomInt } = Utils;

    const coloursKeys = Object.keys(Colours);
    return {
      top: getRandomInt(-10, 90) + '%',
      left: getRandomInt(-10, 40) + '%',
      backgroundColor: Colours[coloursKeys[getRandomInt(0, coloursKeys.length)]]
    };
  }
}
