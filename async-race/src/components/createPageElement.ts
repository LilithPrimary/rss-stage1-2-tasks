interface IOptions {
  id?: number;
  classes: string[];
  text?: string;
  color?: string;
}

export function createPageElement(tag: string, { id = -1, classes, text = 'empty', color = 'none' }: IOptions) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  if (id !== -1) {
    element.id = id.toString();
  }
  if (text !== 'empty') {
    element.textContent = text;
  }
  if (color !== 'none') {
    element.style.color = color;
  }
  return element;
}