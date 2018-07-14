import { MusicUtils } from './MusicUtils';

// jsdom doesnt replicate audiocontext so cannot test majority of methods
describe('MusicUtils', () => {
  it('should default to 440', () => {
    expect(MusicUtils.getSemitone(440.0, 0)).toBe(440.0);
  });

  it('should return 466.1637615180899 when 440 adds 1 semitone', () => {
    expect(MusicUtils.getSemitone(440.0, 1)).toBe(466.1637615180899);
  });

  it('should return 415.3046975799451 when 440 loses 1 semitone', () => {
    expect(MusicUtils.getSemitone(440.0, -1)).toBe(415.3046975799451);
  });
});
