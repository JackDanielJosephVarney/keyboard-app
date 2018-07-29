import * as React from 'react';
import { KeyboardContext } from '../state/KeyboardProvider';
import { MusicUtils } from '../utilities/MusicUtils';
import { Utils } from '../utilities/Utils';

interface Props {}

interface State {}

export default class Visualiser extends React.Component<Props, State> {
  state = {};
  canvas: HTMLCanvasElement;

  render() {
    return (
      <KeyboardContext.Consumer>
        {context => {
          return (
            <canvas
              style={{
                height: '100%',
                width: '100%'
              }}
              ref={r => (this.canvas = r)}
            />
          );
        }}
      </KeyboardContext.Consumer>
    );
  }

  componentDidMount() {
    const analyserNode: AnalyserNode = MusicUtils.getAnalyserNode();
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = this.canvas;
    const canvasContext = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const getNum = (barHeight: number) => (base: number): number =>
      barHeight + (base - 128 / 2);

    const getOpacity = (barHeight: number): number =>
      barHeight > 128 || barHeight < 125 ? 0.3 : 0;

    const draw = () => {
      requestAnimationFrame(draw);

      analyserNode.getByteTimeDomainData(dataArray);
      canvasContext.fillStyle = 'white';
      canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

      const barWidth = WIDTH / bufferLength;

      dataArray.forEach((barHeight, i) => {
        const opacity = getOpacity(barHeight);
        const getNumFromBase = getNum(barHeight);

        const grd = canvasContext.createLinearGradient(
          barWidth * i,
          0,
          barWidth,
          HEIGHT
        );

        grd.addColorStop(
          0,
          `rgba(0, ${getNumFromBase(230)}, ${getNumFromBase(118)}, ${opacity})`
        );

        grd.addColorStop(
          0.7,
          `rgba(${getNumFromBase(213)}, 0, ${getNumFromBase(249)}, ${opacity})`
        );

        grd.addColorStop(
          1,
          `rgba(${getNumFromBase(30)}, ${getNumFromBase(136)}, ${getNumFromBase(
            229
          )}, ${opacity})`
        );

        canvasContext.fillStyle = grd;
        canvasContext.fillRect(barWidth * i, 0, barWidth, HEIGHT);
      });
    };

    draw();
  }
}
