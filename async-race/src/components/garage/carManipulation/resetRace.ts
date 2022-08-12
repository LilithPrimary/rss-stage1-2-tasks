import { ControlPanel } from '../ControlPanel';
import { stopCar } from './stopCar';

const disableStopBtn = (ctrl: ControlPanel) => {
  ctrl.btns.btnStartRace.classList.remove('btn--disabled');
  ctrl.btns.btnResetRace.classList.add('btn--disabled');
};

export const resetRace = async (ctrl: ControlPanel) => {
  ctrl.cars.forEach((car) => stopCar(car));
  disableStopBtn(ctrl);
};