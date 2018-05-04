const getOscNode = (ctx: AudioContext): OscillatorNode => {
  const oscNode = ctx.createOscillator();

  oscNode.type = 'square';

  return oscNode;
};

const getGainNode = (ctx: AudioContext): GainNode => {
  const gainNode = ctx.createGain();

  gainNode.connect(ctx.destination);

  return gainNode;
};

const getQuarter = bpm => 60 / bpm;

export const MusicUtils = Object.freeze({
  getNodes: (ctx: AudioContext) => {
    const oscNode = getOscNode(ctx);
    const gainNode = getGainNode(ctx);

    gainNode.connect(ctx.destination);
    oscNode.connect(gainNode);

    return { gainNode, oscNode };
  },

  whole: bpm => getQuarter(bpm * 4),
  half: bpm => getQuarter(bpm) * 2,
  quarter: bpm => getQuarter(bpm),
  eight: bpm => getQuarter(bpm) / 2,
  sixteenth: bpm => getQuarter(bpm) / 4
});
