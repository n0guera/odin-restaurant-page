(() => {
  'use strict';
  const e = document.createElement('div');
  e.setAttribute('id', 'content');
  const t = () => {
    const t = document.createElement('main'),
      n = document.createElement('h1');
    n.textContent = 'An Awesome Restaurant';
    const d = document.createElement('p');
    d.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
    const o = document.createElement('div'),
      c = document.createElement('h3');
    (c.textContent = 'Hours'), o.appendChild(c);
    const a = document.createElement('p');
    (a.textContent = 'Monday: 6am - 6pm'), o.appendChild(a);
    const m = document.createElement('p');
    (m.textContent = 'Tuesday: 6am - 6pm'), o.appendChild(m);
    const i = document.createElement('p');
    (i.textContent = 'Wednesday: 6am - 6pm'), o.appendChild(i);
    const l = document.createElement('p');
    (l.textContent = 'Thursday: 6am - 10pm'), o.appendChild(l);
    const p = document.createElement('p');
    (p.textContent = 'Friday: 6am - 10pm'), o.appendChild(p);
    const u = document.createElement('p');
    (u.textContent = 'Saturday: 8am - 10pm'),
      o.appendChild(u),
      t.appendChild(n),
      t.appendChild(d),
      t.appendChild(o),
      e.appendChild(t),
      document.body.appendChild(e);
  };
  (() => {
    const e = document.createElement('header'),
      t = document.createElement('nav'),
      n = document.createElement('ul'),
      d = document.createElement('li');
    d.setAttribute('id', 'home-tab'), (d.textContent = 'Home');
    const o = document.createElement('li');
    o.setAttribute('id', 'menu-tab'), (o.textContent = 'Menu');
    const c = document.createElement('li');
    c.setAttribute('id', 'contact-tab'),
      (c.textContent = 'Contact'),
      n.appendChild(d),
      n.appendChild(o),
      n.appendChild(c),
      t.appendChild(n),
      e.appendChild(t),
      document.body.appendChild(e);
  })(),
    t(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        e.appendChild(t),
        document.body.appendChild(e);
    })(),
    document.querySelector('#home-tab').addEventListener('click', () => {
      t();
    }),
    document.querySelector('#menu-tab').addEventListener('click', () => {}),
    document.querySelector('#contact-tab').addEventListener('click', () => {});
})();
