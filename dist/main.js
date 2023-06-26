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
    const c = document.createElement('div'),
      o = document.createElement('h2');
    (o.textContent = 'Hours'), c.appendChild(o);
    const a = document.createElement('p');
    (a.textContent = 'Monday: 6am - 6pm'), c.appendChild(a);
    const m = document.createElement('p');
    (m.textContent = 'Tuesday: 6am - 6pm'), c.appendChild(m);
    const i = document.createElement('p');
    (i.textContent = 'Wednesday: 6am - 6pm'), c.appendChild(i);
    const l = document.createElement('p');
    (l.textContent = 'Thursday: 6am - 10pm'), c.appendChild(l);
    const r = document.createElement('p');
    (r.textContent = 'Friday: 6am - 10pm'), c.appendChild(r);
    const p = document.createElement('p');
    (p.textContent = 'Saturday: 8am - 10pm'),
      c.appendChild(p),
      t.appendChild(n),
      t.appendChild(d),
      t.appendChild(c),
      e.appendChild(t);
  };
  (() => {
    const e = document.createElement('header'),
      t = document.createElement('nav'),
      n = document.createElement('ul'),
      d = document.createElement('li');
    d.setAttribute('id', 'home-tab'), (d.textContent = 'Home');
    const c = document.createElement('li');
    c.setAttribute('id', 'menu-tab'), (c.textContent = 'Menu');
    const o = document.createElement('li');
    o.setAttribute('id', 'contact-tab'),
      (o.textContent = 'Contact'),
      n.appendChild(d),
      n.appendChild(c),
      n.appendChild(o),
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
      const d = (e, t, d, c) => {
        const o = document.createElement('article');
        o.setAttribute('class', 'menu-item');
        const a = document.createElement('h2');
        (a.textContent = e), o.appendChild(a);
        const m = document.createElement('p');
        (m.textContent = t), o.appendChild(m);
        const i = document.createElement('p');
        (i.textContent = d), o.appendChild(i);
        const l = document.createElement('img');
        l.setAttribute('src', c),
          l.setAttribute('alt', `${e}`),
          l.classList.add('item-img'),
          o.appendChild(l),
          n.appendChild(o);
      };
      d(
        'A normal salad',
        'Just a normal salad, nothing special here.',
        '$2',
        '/src/img/normal-salad.jpg'
      ),
        d('Sandwich', "Hey, it's a sandwich", '$3', '/src/img/sandwich.jpg'),
        d(
          'An amazing Pepperoni Pizza',
          "Look! It's amazing!",
          '$5',
          '/src/img/pizza.jpg'
        ),
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
      const d = document.createElement('p');
      (d.textContent = 'Amazing Owner'), n.appendChild(d);
      const c = document.createElement('p');
      (c.textContent = 'amazingownerrealemail@amazingmail.com'),
        n.appendChild(c),
        e.appendChild(t),
        e.appendChild(n);
    });
})();
