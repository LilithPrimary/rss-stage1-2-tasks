import { renderPage } from './view/renderPage';
import { ControlPanel } from './garage/ControlPanel';
import { createCarsArray } from './garage/createCarsArray';
import { Observable } from './utils/Observable';
import { renderGaragePage } from './garage/view/renderGaragePage';
import { WinnerTable } from './winners/view/WinnerTableView';
import { PageSwitcher } from './PageSwitcher';
import { Car } from './garage/view/CarView';

export async function app() {
  const observer = Observable<Car[]>();

  observer.subscribe(renderGaragePage);

  const ctrlPanel = new ControlPanel(observer);

  const cars = await createCarsArray(ctrlPanel);

  const winners = new WinnerTable();

  ctrlPanel.winnerPage = winners;

  const pageSwitcher = new PageSwitcher(ctrlPanel, winners);

  await renderPage(pageSwitcher, cars);
}