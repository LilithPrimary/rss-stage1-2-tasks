import { Car } from './view/CarView';
import { addCar } from './carManipulation/addCar';
import { generateRandomCars } from './carManipulation/generateRandomCars';
import { resetRace } from './carManipulation/resetRace';
import { setChanges } from './carManipulation/setChanges';
import { startRace } from './carManipulation/startRace';
import { WinnerTable } from '../winners/view/WinnerTableView';
import { PaginationBlock } from '../PaginationBlock';
import { obs } from '../types/carObserver';
import { createCarsArray } from './createCarsArray';
import { ControlPanelView } from './view/ControlPanelView';

const paginationCallback = async (ctrl: ControlPanel) => {
  ctrl.observer.update(await createCarsArray(ctrl));
};

export class ControlPanel {
  constructor(public observer: typeof obs) {
    this.observer = observer;
    this.observer.subscribe(this.setCars);
    this.setListeners();
  }

  public editingCar = new Car({ name: 'test', color: 'white', id: 0 }, this);

  public cars: Car[] = [];

  public winnerPage = new WinnerTable();

  private carPerPage = 7;

  public pagination = new PaginationBlock(paginationCallback.bind(null, this), this.carPerPage);

  public btns = new ControlPanelView(this);

  setListeners() {
    this.btns.setListener(this.btns.btnCreate, addCar);
    this.btns.setListener(this.btns.btnEdit, setChanges);
    this.btns.setListener(this.btns.btnStartRace, startRace);
    this.btns.setListener(this.btns.btnResetRace, resetRace);
    this.btns.setListener(this.btns.btnCreateRandomCars, generateRandomCars);
  }

  setCars = (cars: Car[]) => {
    this.cars = cars;
  };
}