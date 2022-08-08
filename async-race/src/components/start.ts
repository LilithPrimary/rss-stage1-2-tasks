import { renderPage } from './renderPage';
import { ControlPanel } from './garage/ControlPanelView';
import { createCarsArray } from './garage/createCarsArray';
import { Observable } from './Observable';
import { renderGaragePage } from './garage/renderGaragePage';
import { WinnerTable } from './winners/WinnerTableView';
import { PageSwitcher } from './PageSwitcher';
import { Car } from './CarView';

export async function start(URL: string) {
  const observer = Observable<Car[]>();
  observer.subscribe(renderGaragePage);
  const ctrlPanel = new ControlPanel(observer);
  const cars = await createCarsArray(URL, ctrlPanel);
  const winners = new WinnerTable();
  ctrlPanel.winnerPage = winners;
  const pageSwitcher = new PageSwitcher(ctrlPanel, winners);
  await renderPage(pageSwitcher, cars);
}