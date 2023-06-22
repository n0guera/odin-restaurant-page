const createMenuContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menu-title');
  menuTitle.textContent = 'Menu';

  const menuItems = document.createElement('section');
  menuItems.setAttribute('id', 'menu-items');

  const createMenuItem = (dishName, description, price) => {
    const item = document.createElement('article');
    item.setAttribute('class', 'menu-item');
    const itemTitle = document.createElement('h2');
    itemTitle.textContent = dishName;
    item.appendChild(itemTitle);
    const itemDesc = document.createElement('p');
    itemDesc.textContent = description;
    item.appendChild(itemDesc);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    item.appendChild(itemPrice);
    menuItems.appendChild(item);
  };

  createMenuItem(
    'A normal dish',
    'Just a normal dish, nothing special here.',
    '$3'
  );

  divContent.appendChild(menuTitle);
  divContent.appendChild(menuItems);
};

export default createMenuContent;
