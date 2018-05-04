import * as React from 'react';
import './Key.css';
import { MusicUtils } from '../utilities/MusicUtils';

export interface Props {
  freq: number;
  audioContext: AudioContext;
  keyCode: number;
  color?: string;
}

export interface State {
  className: string;
}

export default class Key extends React.Component<Props, State> {
  state = {
    className: 'key key-inactive'
  };

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  render() {
    const s: React.CSSProperties = { backgroundColor: this.props.color };

    return <button style={s} className={this.state.className} />;
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === this.props.keyCode) {
      this.emitSound();
      this.animateButton();
    }
  };

  emitSound() {
    const now = this.props.audioContext.currentTime;
    const { gainNode, oscNode } = MusicUtils.getNodes(this.props.audioContext);

    oscNode.frequency.setValueAtTime(this.props.freq, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.02, now + 0.001);
    gainNode.gain.linearRampToValueAtTime(0.003, now + 0.5);
    gainNode.gain.linearRampToValueAtTime(0, now + 1);

    oscNode.start();
  }

  animateButton() {
    this.setState({ className: 'key key-active' });
    setTimeout(() => this.setState({ className: 'key key-inactive' }), 500);
  }
}
