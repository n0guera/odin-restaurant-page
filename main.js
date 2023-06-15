(() => {
  'use strict';
  (() => {
    const e = document.querySelector('#content'),
      t = document.createElement('header'),
      n = document.createElement('nav'),
      c = document.createElement('ul'),
      d = document.createElement('li');
    d.textContent = 'Home';
    const l = document.createElement('li');
    l.textContent = 'Menu';
    const o = document.createElement('li');
    (o.textContent = 'Contact'),
      c.appendChild(d),
      c.appendChild(l),
      c.appendChild(o),
      n.appendChild(c),
      t.appendChild(n),
      e.appendChild(t);
  })();
})();
