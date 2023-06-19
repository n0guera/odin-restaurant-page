const divContent = document.createElement('div');
divContent.setAttribute('id', 'content');

const createMainContent = () => {
  const mainElement = document.createElement('main');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'An Awesome Restaurant';

  const presentation = document.createElement('p');
  presentation.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';

  const hoursTable = document.createElement('div');

  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Hours';
  hoursTable.appendChild(hoursTitle);

  const hoursMonday = document.createElement('p');
  hoursMonday.textContent = 'Monday: 6am - 6pm';
  hoursTable.appendChild(hoursMonday);

  const hoursTuesday = document.createElement('p');
  hoursTuesday.textContent = 'Tuesday: 6am - 6pm';
  hoursTable.appendChild(hoursTuesday);

  const hoursWednesday = document.createElement('p');
  hoursWednesday.textContent = 'Wednesday: 6am - 6pm';
  hoursTable.appendChild(hoursWednesday);

  const hoursThursday = document.createElement('p');
  hoursThursday.textContent = 'Thursday: 6am - 10pm';
  hoursTable.appendChild(hoursThursday);

  const hoursFriday = document.createElement('p');
  hoursFriday.textContent = 'Friday: 6am - 10pm';
  hoursTable.appendChild(hoursFriday);

  const hoursSaturday = document.createElement('p');
  hoursSaturday.textContent = 'Saturday: 8am - 10pm';
  hoursTable.appendChild(hoursSaturday);

  mainElement.appendChild(h1Element);
  mainElement.appendChild(presentation);
  mainElement.appendChild(hoursTable);
  divContent.appendChild(mainElement);
  document.body.appendChild(divContent);
};

export default createMainContent;
