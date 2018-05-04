const twelthRoot = Math.pow(2, 1 / 12);

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
const addSemitone = freq => freq * twelthRoot;
const minusSemitone = freq => freq / twelthRoot;

export const MusicUtils = Object.freeze({
  getAudioContext: () => <AudioContext>new ((<any>window).AudioContext || (<any>window).webkitAudioContext)(),

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
  sixteenth: bpm => getQuarter(bpm) / 4,

  getSemitone: (freq: number, amount: number): number => {
    switch (true) {
      case amount < 0:
        const iterations = +amount;

        for (let i = 1; i <= iterations; i++) {
          freq = minusSemitone(freq);
        }

        return freq;

      case amount > 0:
        for (let i = 1; i <= amount; i++) {
          freq = addSemitone(freq);
        }

        return freq;

      default:
        return freq;
    }
  }
});
