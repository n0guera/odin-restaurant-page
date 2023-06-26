const createMenuContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menu-title');
  menuTitle.textContent = 'Menu';

  const menuItems = document.createElement('section');
  menuItems.setAttribute('id', 'menu-items');

  const createMenuItem = (dishName, description, price, imgDir) => {
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
    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', imgDir);
    itemImg.setAttribute('alt', `${dishName}`);
    itemImg.classList.add('item-img');
    item.appendChild(itemImg);
    menuItems.appendChild(item);
  };

  createMenuItem(
    'A normal salad',
    'Just a normal salad, nothing special here.',
    '$2',
    '/src/img/normal-salad.jpg'
  );

  createMenuItem(
    'Sandwich',
    "Hey, it's a sandwich",
    '$3',
    '/src/img/sandwich.jpg'
  );

  createMenuItem(
    'An amazing Pepperoni Pizza',
    "Look! It's amazing!",
    '$5',
    '/src/img/pizza.jpg'
  );

  divContent.appendChild(menuTitle);
  divContent.appendChild(menuItems);
};

export default createMenuContent;
