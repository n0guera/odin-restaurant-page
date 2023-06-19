import createFooter from './footer';
import createHeader from './header';
import createMainContent from './main-content';
import createMenuContent from './menu-tab';
import createContactContent from './contact-tab';

createHeader();
createMainContent();
createFooter();

const displayHome = () => {
  createMainContent();
};

const displayMenu = () => {
  createMenuContent();
};

const displayContact = () => {
  createContactContent();
};

const homeTab = document.querySelector('#home-tab');
homeTab.addEventListener('click', displayHome);

const menuTab = document.querySelector('#menu-tab');
menuTab.addEventListener('click', displayMenu);

const contactTab = document.querySelector('#contact-tab');
contactTab.addEventListener('click', displayContact);
