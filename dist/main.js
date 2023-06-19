(() => {
  'use strict';
  const e = document.querySelector('#content'),
    t = () => {
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
      const r = document.createElement('p');
      (r.textContent = 'Saturday: 8am - 10pm'),
        o.appendChild(r),
        t.appendChild(n),
        t.appendChild(d),
        t.appendChild(o),
        e.appendChild(t);
    };
  (() => {
    const t = document.createElement('header'),
      n = document.createElement('nav'),
      d = document.createElement('ul'),
      o = document.createElement('li');
    o.setAttribute('id', 'home-tab'), (o.textContent = 'Home');
    const c = document.createElement('li');
    c.setAttribute('id', 'menu-tab'), (c.textContent = 'Menu');
    const a = document.createElement('li');
    a.setAttribute('id', 'contact-tab'),
      (a.textContent = 'Contact'),
      d.appendChild(o),
      d.appendChild(c),
      d.appendChild(a),
      n.appendChild(d),
      t.appendChild(n),
      e.appendChild(t);
  })(),
    t(),
    (() => {
      const t = document.createElement('footer'),
        n = document.createElement('p');
      (n.textContent = 'Made with <3 for The Odin Project curriculum'),
        t.appendChild(n),
        e.appendChild(t);
    })(),
    document.querySelector('#home-tab').addEventListener('click', () => {
      t();
    }),
    document.querySelector('#menu-tab').addEventListener('click', () => {}),
    document.querySelector('#contact-tab').addEventListener('click', () => {});
})();
