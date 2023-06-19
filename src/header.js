const divContent = document.querySelector('#content');
const createHeader = () => {
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const unorderedList = document.createElement('ul');

  const listItemOne = document.createElement('li');
  listItemOne.setAttribute('id', 'home-tab');
  listItemOne.textContent = 'Home';

  const listItemTwo = document.createElement('li');
  listItemTwo.setAttribute('id', 'menu-tab');
  listItemTwo.textContent = 'Menu';

  const listItemThree = document.createElement('li');
  listItemThree.setAttribute('id', 'contact-tab');
  listItemThree.textContent = 'Contact';

  unorderedList.appendChild(listItemOne);
  unorderedList.appendChild(listItemTwo);
  unorderedList.appendChild(listItemThree);
  navElement.appendChild(unorderedList);
  headerElement.appendChild(navElement);
  divContent.appendChild(headerElement);
};
export { createHeader, divContent };
