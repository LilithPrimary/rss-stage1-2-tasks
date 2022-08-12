export const rgbToHEX = (rgb: string) => {
  const color = rgb.slice(4, rgb.length - 1).split(', ').map(Number);
  return color.map((el) => (el.toString(16).length === 1 ? `0${el.toString(16)}` : el.toString(16))).join('');
};