const createContactContent = () => {
  const divContent = document.querySelector('#content');
  divContent.innerHTML = '';

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';

  const contactCard = document.createElement('address');
  contactCard.setAttribute('id', 'contact-card');

  const contactName = document.createElement('p');
  contactName.textContent = 'Amazing Owner';
  contactCard.appendChild(contactName);

  const contactEmail = document.createElement('p');
  contactEmail.textContent = 'amazingownerrealemail@amazingmail.com';
  contactCard.appendChild(contactEmail);

  const contactImage = document.createElement('img');
  contactImage.setAttribute('src', '../src/img/amazing-owner.jpg');
  contactImage.setAttribute('alt', 'Amazing owner');
  contactImage.setAttribute('id', 'contact-image');
  contactCard.appendChild(contactImage);

  const contactImageCredits = document.createElement('p');
  contactImageCredits.textContent = 'Photo by Rahul Pandit on Pexels';
  contactCard.appendChild(contactImageCredits);

  divContent.appendChild(contactTitle);
  divContent.appendChild(contactCard);
};

export default createContactContent;
