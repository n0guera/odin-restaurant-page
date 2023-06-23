(() => {
  'use strict';
  const e = () => {
    const e = document.querySelector('#content');
    e.innerHTML = '';
    const t = document.createElement('main'),
      n = document.createElement('h1');
    n.textContent = 'An Awesome Restaurant';
    const o = document.createElement('p');
    o.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
    const d = document.createElement('div'),
      c = document.createElement('h2');
    (c.textContent = 'Hours'), d.appendChild(c);
    const a = document.createElement('p');
    (a.textContent = 'Monday: 6am - 6pm'), d.appendChild(a);
    const m = document.createElement('p');
    (m.textContent = 'Tuesday: 6am - 6pm'), d.appendChild(m);
    const i = document.createElement('p');
    (i.textContent = 'Wednesday: 6am - 6pm'), d.appendChild(i);
    const l = document.createElement('p');
    (l.textContent = 'Thursday: 6am - 10pm'), d.appendChild(l);
    const r = document.createElement('p');
    (r.textContent = 'Friday: 6am - 10pm'), d.appendChild(r);
    const p = document.createElement('p');
    (p.textContent = 'Saturday: 8am - 10pm'),
      d.appendChild(p),
      t.appendChild(n),
      t.appendChild(o),
      t.appendChild(d),
      e.appendChild(t);
  };
  (() => {
    const e = document.createElement('header'),
      t = document.createElement('nav'),
      n = document.createElement('ul'),
      o = document.createElement('li');
    o.setAttribute('id', 'home-tab'), (o.textContent = 'Home');
    const d = document.createElement('li');
    d.setAttribute('id', 'menu-tab'), (d.textContent = 'Menu');
    const c = document.createElement('li');
    c.setAttribute('id', 'contact-tab'),
      (c.textContent = 'Contact'),
      n.appendChild(o),
      n.appendChild(d),
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
      const o = (e, t, o) => {
        const d = document.createElement('article');
        d.setAttribute('class', 'menu-item');
        const c = document.createElement('h2');
        (c.textContent = e), d.appendChild(c);
        const a = document.createElement('p');
        (a.textContent = t), d.appendChild(a);
        const m = document.createElement('p');
        (m.textContent = o), d.appendChild(m), n.appendChild(d);
      };
      o('A normal salad', 'Just a normal salad, nothing special here.', '$2'),
        o('Sandwich', "Hey, it's a sandwich", '$3'),
        o('An amazing Pepperoni Pizza', "Look! It's amazing!", '$5'),
        e.appendChild(t),
        e.appendChild(n);
    }),
    document.querySelector('#contact-tab').addEventListener('click', () => {
      const e = document.querySelector('#content');
      e.innerHTML = '';
      const t = document.createElement('h1');
      t.textContent = 'Contact Us';
      const n = document.createElement('address');
      n.setAttribute('id', 'contact-card');
      const o = document.createElement('p');
      (o.textContent = 'Amazing Owner'), n.appendChild(o);
      const d = document.createElement('p');
      (d.textContent = 'amazingownerrealemail@amazingmail.com'),
        n.appendChild(d),
        e.appendChild(t),
        e.appendChild(n);
    });
})();
