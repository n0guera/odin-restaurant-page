const createMenuContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menu-title');
  menuTitle.textContent = 'Menu';

  const menuItems = document.createElement('section');
  menuItems.setAttribute('id', 'menu-items');

  const itemOne = document.createElement('article');
  itemOne.setAttribute('class', 'menu-item');
  const itemOneTitle = document.createElement('h2');
  itemOneTitle.textContent = 'A normal dish';
  itemOne.appendChild(itemOneTitle);
  const itemOneDesc = document.createElement('p');
  itemOneDesc.textContent = 'Just a normal dish, nothing special here.';
  itemOne.appendChild(itemOneDesc);
  const itemOnePrice = document.createElement('p');
  itemOnePrice.textContent = '$3';
  itemOne.appendChild(itemOnePrice);

  divContent.appendChild(menuTitle);
  divContent.appendChild(menuItems);
  menuItems.appendChild(itemOne);
};

export default createMenuContent;
