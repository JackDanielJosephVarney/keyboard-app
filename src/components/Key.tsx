import * as React from 'react';
import './Key.css';
import { MusicUtils } from '../utilities/MusicUtils';
import { Utils } from '../utilities/Utils';
import { WaveType } from '../enums/enums';
import Ripple from './Ripple';

export interface Props {
  freq: number;
  audioContext: AudioContext;
  keyCode: number;
  waveType: WaveType;
  ariaLabel: string;
  decay: number;
  attack: number;
}

export interface State {
  ripples: string[];
}

export default class Key extends React.Component<Props, State> {
  attack: number;
  decay: number;

  state = {
    ripples: []
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);

    this.attack = this.props.attack;
    this.decay = this.props.decay + this.props.attack;
  }

  componentWillReceiveProps(props: Props) {
    this.attack = props.attack;
    this.decay = props.decay + props.attack;
  }

  render() {
    return (
      <button className="key" onClick={this.onEvent} aria-label={this.props.ariaLabel}>
        {this.state.ripples.map(id => <Ripple key={id} />)}
        {this.props.children}
      </button>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onEvent = () => {
    this.props.audioContext.resume();
    this.emitSound();
    this.appendMultipleRipples();
  };

  onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === this.props.keyCode && !event.repeat) {
      this.onEvent();
    }
  };

  emitSound() {
    const now: number = this.props.audioContext.currentTime;
    let { gainNode, oscNode } = MusicUtils.getNodes(this.props.audioContext);

    oscNode.type = this.props.waveType;
    oscNode.frequency.setValueAtTime(this.props.freq, now);

    gainNode.gain.setValueAtTime(0, now);
    //attack
    gainNode.gain.linearRampToValueAtTime(0.05, now + this.attack);
    //decay
    gainNode.gain.linearRampToValueAtTime(0.008, now + this.decay);
    gainNode.gain.linearRampToValueAtTime(0, now + this.decay + this.decay / 2);

    oscNode.start();

    setTimeout(() => {
      oscNode.stop(0);
      oscNode.disconnect();
    }, 1500);
  }

  appendMultipleRipples() {
    let count = 0;
    const interval = setInterval(() => {
      count++;

      this.appendRipple();

      if (count === 6) {
        clearInterval(interval);
      }
    }, 5);
  }

  appendRipple() {
    const newID: string = this.getRippleID();
    this.setState({
      ripples: [...this.state.ripples, newID]
    });
    setTimeout(() => this.removeRipple(newID), 1000);
  }

  removeRipple(id: string) {
    const ripples = [...this.state.ripples] as string[];

    ripples.splice(ripples.indexOf(id), 1);

    this.setState({
      ripples: ripples
    });
  }

  getRippleID(): string {
    return (Math.random() * 100000000).toString();
  }
}
