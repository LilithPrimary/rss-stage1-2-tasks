export const spinner = () => {
  const plug = document.createElement('div');
  plug.classList.add('spinner');
  const loadindText = document.createElement('span');
  loadindText.classList.add('spinner__text');
  plug.append(loadindText);
  document.body.append(plug);
};
