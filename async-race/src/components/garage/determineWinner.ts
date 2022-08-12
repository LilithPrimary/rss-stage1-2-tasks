import { IParticipiants } from 'components/types/IParticipiant';
import { createWinner } from '../winners/winnersRequests/createWinner';
import { URL } from '../Constants/URL';
import { showMsg } from './view/showMsg';

export const determineWinner = async (winner: IParticipiants | Error) => {
  if (winner instanceof Error) {
    showMsg('Nobody wins. Everybody broken =(');
  } else {
    showMsg(`${winner.name} WINS! Time: ${winner.time} sec!`);
    await createWinner(URL, {
      id: winner.id,
      wins: 1,
      time: winner.time,
    });
  }
};