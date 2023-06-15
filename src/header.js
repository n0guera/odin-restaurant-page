const createHeader = () => {
  const divContent = document.querySelector('#content');
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const unorderedList = document.createElement('ul');

  const listItemOne = document.createElement('li');
  listItemOne.textContent = 'Home';

  const listItemTwo = document.createElement('li');
  listItemTwo.textContent = 'Menu';

  const listItemThree = document.createElement('li');
  listItemThree.textContent = 'Contact';

  unorderedList.appendChild(listItemOne);
  unorderedList.appendChild(listItemTwo);
  unorderedList.appendChild(listItemThree);
  navElement.appendChild(unorderedList);
  headerElement.appendChild(navElement);
  divContent.appendChild(headerElement);
};
export default createHeader;
