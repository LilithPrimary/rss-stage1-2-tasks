import { ControlPanel } from './ControlPanelView';
import { determineWinner } from './determineWinner';
import { showMsg } from './showMsg';
import { startDriving } from './startDriving';
import { startEngine } from './startEngine';
import { stopCar } from './stopCar';

const toggleCtrls = (ctrl: ControlPanel) => {
  ctrl.btnCreate.classList.toggle('btn--disabled');
  ctrl.btnCreateRandomCars.classList.toggle('btn--disabled');
};

const disableStartBtn = (ctrl: ControlPanel) => {
  ctrl.btnStartRace.classList.add('btn--disabled');
  toggleCtrls(ctrl);
};
const enableStopBtn = (ctrl: ControlPanel) => {
  ctrl.btnResetRace.classList.remove('btn--disabled');
  toggleCtrls(ctrl);
};

export const startRace = async (ctrl: ControlPanel) => {
  if (!ctrl.cars.length) {
    showMsg('Anybody here?');
    return;
  }
  disableStartBtn(ctrl);
  await Promise.all(ctrl.cars.map((car) => stopCar(car)));
  const cars = await Promise.all(ctrl.cars.map((car) => startEngine(car)));
  try {
    const winner = await Promise.any(cars.map((car) => startDriving(car)));
    await determineWinner(winner);
    await ctrl.winnerPage.renderWinnersTable();
  } catch (err) {
    const msg = <Error>err;
    await determineWinner(msg);
  }
  enableStopBtn(ctrl);
};
