import { start } from './start';

export const URL = 'http://127.0.0.1:3000/';

export const app = () => {
  // eslint-disable-next-line no-void
  void start(URL);
};