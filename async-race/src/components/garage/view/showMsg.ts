export const showMsg = (text: string) => {
  const winMsg = <HTMLDivElement>document.querySelector('.main__win-message');
  winMsg.textContent = text;
  winMsg.style.display = 'block';
  setTimeout(() => {
    winMsg.style.display = 'none';
  }, 3000);
};