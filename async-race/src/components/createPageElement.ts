interface IOptions {
  id?: string;
  classes: string[];
  text?: string;
  color?: string;
}

export function createPageElement(tag: string, {
  id = '', classes, text = 'empty', color = 'none',
}: IOptions) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  if (id !== '') {
    element.id = id;
  }
  if (text !== 'empty') {
    element.textContent = text;
  }
  if (color !== 'none') {
    element.style.color = color;
  }
  return element;
}
