import saladPic from './img/normal-salad.jpg';
import sandwichPic from './img/sandwich.jpg';
import pizzaPic from './img/pizza.jpg';

const createMenuContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menu-title');
  menuTitle.textContent = 'Menu';

  const menuItems = document.createElement('section');
  menuItems.setAttribute('id', 'menu-items');

  const createMenuItem = (dishName, description, price, imgDir, credits) => {
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
    const itemImg = new Image();
    itemImg.src = imgDir;
    itemImg.setAttribute('alt', `${dishName}`);
    itemImg.classList.add('item-img');
    item.appendChild(itemImg);
    const itemImgCredits = document.createElement('p');
    itemImgCredits.textContent = credits;
    item.appendChild(itemImgCredits);

    menuItems.appendChild(item);
  };

  createMenuItem(
    'A normal salad',
    'Just a normal salad, nothing special here.',
    '$2',
    saladPic,
    'Photo by Chan Walrus on Pexels'
  );

  createMenuItem(
    'Sandwich',
    "Hey, it's a sandwich",
    '$3',
    sandwichPic,
    'Photo by Gonzalo Acuña on Pexels'
  );

  createMenuItem(
    'An amazing Pepperoni Pizza',
    "Look! It's amazing!",
    '$5',
    pizzaPic,
    'Photo by Natan Machado on Pexels'
  );

  divContent.appendChild(menuTitle);
  divContent.appendChild(menuItems);
};

export default createMenuContent;
