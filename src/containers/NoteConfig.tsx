import * as React from 'react';
import './NoteConfig.css';
import { KeyboardContext, KeyboardState } from '../state/KeyboardProvider';
import DashboardButton from '../components/DashboardButton';

export interface Props {}

export interface State {}

export default class NoteConfig extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <KeyboardContext.Consumer>
        {(context: KeyboardState) => (
          <div className="buttonContainer">
            <DashboardButton onClick={() => context.setRootNote(12)}>+12</DashboardButton>
            <DashboardButton onClick={() => context.setRootNote(-12)}>-12</DashboardButton>
            <DashboardButton onClick={() => context.setRootNote(1)}>1</DashboardButton>
            <DashboardButton onClick={() => context.setRootNote(-1)}>-1</DashboardButton>
            <DashboardButton onClick={() => context.resetRootNote()}>reset</DashboardButton>
          </div>
        )}
      </KeyboardContext.Consumer>
    );
  }
}
