const createMenuContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menu-title');
  menuTitle.textContent = 'Menu';

  divContent.appendChild(menuTitle);
};

export default createMenuContent;
