import { renderPage } from './renderPage';
import { ControlPanel } from './garage/ControlPanelView';
import { createCarsArray } from './garage/createCarsArray';
import { Observable } from './Observable';
import { renderGaragePage } from './garage/renderGaragePage';
import { WinnerTable } from './winners/WinnerTableView';
import { PageSwitcher } from './PageSwitcher';

export async function start(URL: string) {
  const observer = Observable();
  observer.subscribe(renderGaragePage);
  const ctrlPanel = new ControlPanel(observer);
  const cars = await createCarsArray(URL, ctrlPanel);
  const winners = new WinnerTable();
  const pageSwitcher = new PageSwitcher(ctrlPanel, winners);
  await renderPage(pageSwitcher, cars);
}