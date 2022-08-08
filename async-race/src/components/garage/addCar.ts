import { URL } from '../app';
import { ControlPanel } from './ControlPanelView';
import { createCarsArray } from './createCarsArray';
import { createCar } from './garageRequests/createCar';

export const addCar = async (ctrls: ControlPanel) => {
  await createCar(URL, {
    body: {
      name: ctrls.nameInput.value,
      color: ctrls.colorInput.value,
    },
  });
  ctrls.nameInput.value = '';
  ctrls.observer.update(await createCarsArray(ctrls));
};