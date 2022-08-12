import { Car } from 'components/garage/view/CarView';
import { URL } from '../../../constants/URL';
import { ControlPanel } from '../ControlPanel';
import { updateCar } from '../API/garageRequests/updateCar';

const setNewStyleToCar = (car: Car) => {
  car.ctrl.btns.editWrapper.style.display = 'none';
  car.carImg.style.color = car.ctrl.btns.colorEditInput.value;
  car.carName.textContent = car.ctrl.btns.nameEditInput.value;
};

export const setChanges = async (ctrl: ControlPanel) => {
  await updateCar(URL, {
    body: {
      name: ctrl.btns.nameEditInput.value,
      color: ctrl.btns.colorEditInput.value,
    },
    id: ctrl.editingCar.id,
  });
  setNewStyleToCar(ctrl.editingCar);
  await ctrl.winnerPage.renderWinnersTable();
};