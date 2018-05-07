import * as React from 'react';
import DashboardSlider from '../components/DashboardSlider';
import { KeyboardContext, KeyboardState } from '../state/KeyboardProvider';

export interface Props {}

export interface State {}

export default class EnvelopeConfig extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <KeyboardContext.Consumer>
        {(context: KeyboardState) => (
          <>
            <DashboardSlider
              min={0.001}
              max={1}
              step={0.01}
              default={context.attack}
              onChange={e => context.setAttack(Number(e.currentTarget.value))}
            >
              Attack:
            </DashboardSlider>
            <DashboardSlider
              min={0.1}
              max={3}
              step={0.1}
              default={context.decay}
              onChange={e => context.setDecay(Number(e.currentTarget.value))}
            >
              Release:
            </DashboardSlider>
          </>
        )}
      </KeyboardContext.Consumer>
    );
  }
}
