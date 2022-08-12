import { URL } from '../../../constants/URL';
import { ControlPanel } from '../ControlPanel';
import { createCarsArray } from '../createCarsArray';
import { createCar } from '../API/garageRequests/createCar';

export const addCar = async (ctrls: ControlPanel) => {
  await createCar(URL, {
    body: {
      name: ctrls.btns.nameInput.value,
      color: ctrls.btns.colorInput.value,
    },
  });
  ctrls.btns.nameInput.value = '';
  ctrls.observer.update(await createCarsArray(ctrls));
};