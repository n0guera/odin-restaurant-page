import { divContent } from './header';

const createMainContent = () => {
  const mainElement = document.createElement('main');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'An Awesome Restaurant';

  const presentation = document.createElement('p');
  presentation.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
  mainElement.appendChild(h1Element);
  mainElement.appendChild(presentation);
  divContent.appendChild(mainElement);
};

export default createMainContent;
