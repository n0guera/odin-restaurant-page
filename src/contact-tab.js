const createContactContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';

  divContent.appendChild(contactTitle);
};

export default createContactContent;
