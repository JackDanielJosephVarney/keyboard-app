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
  extraCodes?: number[];
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

  componentWillMount() {
    const { extraCodes, keyCode, attack, decay } = this.props;

    if (extraCodes) {
      for (let keyCode of extraCodes) {
        document.addEventListener('keydown', this.onKeyDown(keyCode));
      }
    }

    document.addEventListener('keydown', this.onKeyDown(keyCode));

    this.attack = attack;
    this.decay = decay + attack;
  }

  componentWillReceiveProps(props: Props) {
    const { attack, decay } = props;

    this.attack = attack;
    this.decay = decay + attack;
  }

  render() {
    const { ariaLabel, children } = this.props;

    return (
      <button className="key" onMouseDown={this.onEvent} aria-label={ariaLabel}>
        {this.state.ripples.map(id => <Ripple key={id} />)}
        {children}
      </button>
    );
  }

  componentWillUnmount() {
    const { keyCode, extraCodes } = this.props;

    document.removeEventListener('keydown', this.onKeyDown(keyCode));

    if (extraCodes) {
      for (let keyCode of extraCodes) {
        document.removeEventListener('keydown', this.onKeyDown(keyCode));
      }
    }
  }

  onKeyDown = (keyCode: number) => (event: KeyboardEvent) => {
    if (event.keyCode === keyCode && !event.repeat) {
      this.onEvent();
    }
  };

  onEvent = () => {
    this.props.audioContext.resume();
    this.emitSound();
    this.appendMultipleRipples();
  };

  emitSound() {
    const { audioContext, freq, waveType } = this.props;

    const now: number = audioContext.currentTime;
    let { gainNode, oscNode } = MusicUtils.getNodes(audioContext);

    oscNode.type = waveType;
    oscNode.frequency.setValueAtTime(freq, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.05, now + this.attack);
    gainNode.gain.linearRampToValueAtTime(0.008, now + this.decay);
    gainNode.gain.linearRampToValueAtTime(0.001, now + this.decay * 1.5);
    gainNode.gain.linearRampToValueAtTime(0, now + this.decay * 2);

    oscNode.start();

    setTimeout(() => {
      oscNode.stop(0);
      oscNode.disconnect();
    }, this.decay * 2000);
  }

  appendMultipleRipples() {
    let count = 0;
    const isMobile = window.innerWidth < 1280;
    const interval = setInterval(() => {
      count++;

      this.appendRipple();

      if (isMobile ? count === 3 : count === 6) {
        clearInterval(interval);
      }
    }, 5);
  }

  appendRipple() {
    const newID: string = Utils.getRandomInt(100000, 999999).toString();
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
}
