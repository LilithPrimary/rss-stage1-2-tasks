import { URL } from '../app';
import { ControlPanel } from './ControlPanelView';
import { updateCar } from './garageRequests/updateCar';

export const setChanges = async (ctrl: ControlPanel) => {
  await updateCar(URL, {
    body: {
      name: ctrl.nameEditInput.value,
      color: ctrl.colorEditInput.value,
    },
    id: ctrl.editingCar.id,
  });
  ctrl.editWrapper.style.display = 'none';
  ctrl.editingCar.carImg.style.color = ctrl.colorEditInput.value;
  ctrl.editingCar.carName.textContent = ctrl.nameEditInput.value;
  await ctrl.winnerPage.renderWinnersTable();
};