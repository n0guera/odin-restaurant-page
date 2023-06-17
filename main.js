(() => {
  'use strict';
  const e = document.querySelector('#content');
  (() => {
    const t = document.createElement('header'),
      n = document.createElement('nav'),
      o = document.createElement('ul'),
      d = document.createElement('li');
    d.textContent = 'Home';
    const c = document.createElement('li');
    c.textContent = 'Menu';
    const i = document.createElement('li');
    (i.textContent = 'Contact'),
      o.appendChild(d),
      o.appendChild(c),
      o.appendChild(i),
      n.appendChild(o),
      t.appendChild(n),
      e.appendChild(t);
  })(),
    (() => {
      const t = document.createElement('main'),
        n = document.createElement('h1');
      n.textContent = 'An Awesome Restaurant';
      const o = document.createElement('p');
      (o.textContent =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.'),
        t.appendChild(n),
        t.appendChild(o),
        e.appendChild(t);
    })(),
    (() => {
      const t = document.createElement('footer'),
        n = document.createElement('p');
      (n.textContent = 'Made with <3 for The Odin Project curriculum'),
        t.appendChild(n),
        e.appendChild(t);
    })();
})();
