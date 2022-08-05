import './assets/style/normalize.css';
import './style.css';
import { getCars } from './components/garageRequests/getCars';
// import { getCar } from './components/garageRequests/getCar';
// import { createCar } from './components/requests/createCar';
// import { deleteCar } from './components/requests/deleteCar';
import { renderPage } from './components/renderPage';
import { ControlPanel } from './components/ControlPanelView';
import { createCars } from './components/createCars';
import { ICar } from './components/types/ICar';

const url = 'http://127.0.0.1:3000/';

async function start() {
  const response1 = await getCars(url, {});
  console.log(response1);
  // eslint-disable-next-line @typescript-eslint/keyword-spacing
  const data1 = <ICar[]>await response1.json();
  console.log(data1);
  const ctrlPanel = new ControlPanel();
  const cars = createCars(data1);
  renderPage(ctrlPanel, cars);
}

try {
  void start();
} catch (err) {
  console.log(err);
}