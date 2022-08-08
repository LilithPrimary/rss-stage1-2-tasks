import { ControlPanel } from './ControlPanelView';
import { determineWinner } from './determineWinner';
import { startDriving } from './startDriving';
import { startEngine } from './startEngine';
import { stopCar } from './stopCar';

const disableStartBtn = (ctrl: ControlPanel) => {
  ctrl.btnStartRace.classList.add('btn--disabled');
};
const enableStopBtn = (ctrl: ControlPanel) => {
  ctrl.btnResetRace.classList.remove('btn--disabled');
};

export const startRace = async (ctrl: ControlPanel) => {
  disableStartBtn(ctrl);
  await Promise.all(ctrl.cars.map((car) => stopCar(car)));
  const cars = await Promise.all(ctrl.cars.map((car) => startEngine(car)));
  try {
    const winner = await Promise.any(cars.map((car) => startDriving(car)));
    await determineWinner(winner);
  } catch (err) {
    const msg = <Error>err;
    await determineWinner(msg);
  }
  enableStopBtn(ctrl);
};
