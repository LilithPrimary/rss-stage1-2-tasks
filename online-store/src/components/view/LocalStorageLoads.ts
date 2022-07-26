import { getLSCallback, setLSCallback } from "components/types/callback";

export function localStorageSet(callback: setLSCallback) {
  window.addEventListener('beforeunload', () => {
    console.log("setLS");  
    localStorage.setItem('optionsLP', JSON.stringify(callback()));
  });
}


export function localStorageGet(callback: getLSCallback) {
  window.addEventListener('load', () => {
    const options = JSON.parse(<string>localStorage.getItem('optionsLP'));
    const isLS = Boolean(localStorage.getItem('optionsLP'));
    callback(options, isLS);
  });
}

// function getLocalStorage() {
//   if (localStorage.getItem('optionsLP')) {
//     return JSON.parse(<string>localStorage.getItem('optionsLP'));
//   }
// }

// function setLocalStorage(options: IFilterOptions) {
  
// }