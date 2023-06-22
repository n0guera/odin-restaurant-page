import createFooter from './footer';
import createHeader from './header';
import displayMainContent from './main-content';
import displayMenu from './menu-tab';
import displayContact from './contact-tab';

createHeader();
displayMainContent();
createFooter();

const homeTab = document.querySelector('#home-tab');
homeTab.addEventListener('click', displayMainContent);

const menuTab = document.querySelector('#menu-tab');
menuTab.addEventListener('click', displayMenu);

const contactTab = document.querySelector('#contact-tab');
contactTab.addEventListener('click', displayContact);
