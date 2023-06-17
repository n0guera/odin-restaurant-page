import { divContent } from './header';

const createFooter = () => {
  const footerElement = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = 'Made with <3 for The Odin Project curriculum';

  footerElement.appendChild(footerText);
  divContent.appendChild(footerElement);
};

export default createFooter;
