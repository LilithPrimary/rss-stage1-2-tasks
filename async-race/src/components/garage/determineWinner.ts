import { IParticipiants } from 'components/types/IParticipiant';
import { createWinner } from '../winners/winnersRequests/createWinner';
import { URL } from '../app';

export const determineWinner = async (winner: IParticipiants | Error) => {
  const winMsg = <HTMLDivElement>document.querySelector('.main__win-message');
  if (winner instanceof Error) {
    winMsg.textContent = 'Nobody wins. Everybody broken =(';
  } else {
    winMsg.textContent = `${winner.name} WINS! Time: ${winner.time} sec!`;
    await createWinner(URL, {
      id: winner.id,
      wins: 1,
      time: winner.time,
    });
  }
  winMsg.style.display = 'block';
  setTimeout(() => {
    winMsg.style.display = 'none';
  }, 3000);
};