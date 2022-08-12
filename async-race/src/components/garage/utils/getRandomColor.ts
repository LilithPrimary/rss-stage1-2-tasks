export const getRandomColor = () => new Array(3).fill(0).map(() => {
  const channel = Math.floor(Math.random() * 256).toString(16);
  return channel.length === 1 ? `0${channel}` : channel;
}).join('');