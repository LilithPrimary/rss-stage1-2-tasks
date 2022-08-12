import { Car } from './view/CarView';
import { addCar } from './carManipulation/addCar';
import { generateRandomCars } from './carManipulation/generateRandomCars';
import { resetRace } from './carManipulation/resetRace';
import { setChanges } from './carManipulation/setChanges';
import { startRace } from './carManipulation/startRace';
import { WinnerTable } from '../winners/view/WinnerTableView';
import { PaginationBlock } from '../PaginationBlock';
import { IObserver } from '../../types/IObserver';
import { createCarsArray } from './createCarsArray';
import { ControlPanelView } from './view/ControlPanelView';
import { GARAGE_PAGE_LIMIT } from './constants/pageLimit';

const paginationCallback = async (ctrl: ControlPanel) => {
  createCarsArray(ctrl)
    .then(ctrl.observer.update)
    .catch((err) => {
      throw Error(<string>err);
    });
};

export class ControlPanel {
  constructor(public observer: IObserver<Car[]>) {
    this.observer = observer;
    this.observer.subscribe(this.setCars);
    this.setListeners();
  }

  public editingCar = new Car({ name: 'test', color: 'white', id: 0 }, this);

  public cars: Car[] = [];

  public winnerPage = new WinnerTable();

  public pagination = new PaginationBlock(paginationCallback.bind(null, this), GARAGE_PAGE_LIMIT);

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