(() => {
  'use strict';
  const e = () => {
    const e = document.querySelector('#content');
    e.innerHTML = '';
    const t = document.createElement('main'),
      n = document.createElement('h1');
    n.textContent = 'An Awesome Restaurant';
    const d = document.createElement('p');
    d.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
    const o = document.createElement('div'),
      c = document.createElement('h2');
    (c.textContent = 'Hours'), o.appendChild(c);
    const a = document.createElement('p');
    (a.textContent = 'Monday: 6am - 6pm'), o.appendChild(a);
    const m = document.createElement('p');
    (m.textContent = 'Tuesday: 6am - 6pm'), o.appendChild(m);
    const i = document.createElement('p');
    (i.textContent = 'Wednesday: 6am - 6pm'), o.appendChild(i);
    const l = document.createElement('p');
    (l.textContent = 'Thursday: 6am - 10pm'), o.appendChild(l);
    const r = document.createElement('p');
    (r.textContent = 'Friday: 6am - 10pm'), o.appendChild(r);
    const u = document.createElement('p');
    (u.textContent = 'Saturday: 8am - 10pm'),
      o.appendChild(u),
      t.appendChild(n),
      t.appendChild(d),
      t.appendChild(o),
      e.appendChild(t);
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
    const a = document.createElement('div');
    a.setAttribute('id', 'content'), document.body.appendChild(a);
  })(),
    e(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        e.appendChild(t),
        document.body.appendChild(e);
    })(),
    document.querySelector('#home-tab').addEventListener('click', e),
    document.querySelector('#menu-tab').addEventListener('click', () => {
      const e = document.querySelector('#content');
      e.innerHTML = '';
      const t = document.createElement('h1');
      t.setAttribute('id', 'menu-title'), (t.textContent = 'Menu');
      const n = document.createElement('section');
      n.setAttribute('id', 'menu-items');
      const d = document.createElement('article');
      d.setAttribute('class', 'menu-item');
      const o = document.createElement('h2');
      (o.textContent = 'A normal dish'), d.appendChild(o);
      const c = document.createElement('p');
      (c.textContent = 'Just a normal dish, nothing special here.'),
        d.appendChild(c);
      const a = document.createElement('p');
      (a.textContent = '$3'),
        d.appendChild(a),
        e.appendChild(t),
        e.appendChild(n),
        n.appendChild(d);
    }),
    document.querySelector('#contact-tab').addEventListener('click', () => {});
})();
