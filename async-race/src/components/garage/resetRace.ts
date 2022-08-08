import { ControlPanel } from './ControlPanelView';
import { stopCar } from './stopCar';

const disableStopBtn = (ctrl: ControlPanel) => {
  ctrl.btnStartRace.classList.remove('btn--disabled');
  ctrl.btnResetRace.classList.add('btn--disabled');
};

export const resetRace = async (ctrl: ControlPanel) => {
  ctrl.cars.forEach((car) => stopCar(car));
  disableStopBtn(ctrl);
};