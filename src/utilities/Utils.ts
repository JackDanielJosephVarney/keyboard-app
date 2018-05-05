export const Utils = Object.freeze({
  getRandomInt: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
});
