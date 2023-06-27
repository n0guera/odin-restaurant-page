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
    const c = document.createElement('div'),
      a = document.createElement('h2');
    (a.textContent = 'Hours'), c.appendChild(a);
    const d = document.createElement('p');
    (d.textContent = 'Monday: 6am - 6pm'), c.appendChild(d);
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
      t.appendChild(o),
      t.appendChild(c),
      e.appendChild(t);
  };
  (() => {
    const e = document.createElement('header'),
      t = document.createElement('nav'),
      n = document.createElement('ul'),
      o = document.createElement('li');
    o.setAttribute('id', 'home-tab'), (o.textContent = 'Home');
    const c = document.createElement('li');
    c.setAttribute('id', 'menu-tab'), (c.textContent = 'Menu');
    const a = document.createElement('li');
    a.setAttribute('id', 'contact-tab'),
      (a.textContent = 'Contact'),
      n.appendChild(o),
      n.appendChild(c),
      n.appendChild(a),
      t.appendChild(n),
      e.appendChild(t),
      document.body.appendChild(e);
    const d = document.createElement('div');
    d.setAttribute('id', 'content'), document.body.appendChild(d);
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
      const o = (e, t, o, c, a) => {
        const d = document.createElement('article');
        d.setAttribute('class', 'menu-item');
        const m = document.createElement('h2');
        (m.textContent = e), d.appendChild(m);
        const i = document.createElement('p');
        (i.textContent = t), d.appendChild(i);
        const l = document.createElement('p');
        (l.textContent = o), d.appendChild(l);
        const r = document.createElement('img');
        r.setAttribute('src', c),
          r.setAttribute('alt', `${e}`),
          r.classList.add('item-img'),
          d.appendChild(r);
        const p = document.createElement('p');
        (p.textContent = a), d.appendChild(p), n.appendChild(d);
      };
      o(
        'A normal salad',
        'Just a normal salad, nothing special here.',
        '$2',
        '/src/img/normal-salad.jpg',
        'Photo by Chan Walrus on Pexels'
      ),
        o(
          'Sandwich',
          "Hey, it's a sandwich",
          '$3',
          '/src/img/sandwich.jpg',
          'Photo by Gonzalo Acuña on Pexels'
        ),
        o(
          'An amazing Pepperoni Pizza',
          "Look! It's amazing!",
          '$5',
          '/src/img/pizza.jpg',
          'Photo by Natan Machado on Pexels'
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
      const o = document.createElement('p');
      (o.textContent = 'Amazing Owner'), n.appendChild(o);
      const c = document.createElement('p');
      (c.textContent = 'amazingownerrealemail@amazingmail.com'),
        n.appendChild(c);
      const a = document.createElement('img');
      a.setAttribute('src', '/src/img/amazing-owner.jpg'),
        a.setAttribute('alt', 'Amazing owner'),
        a.setAttribute('id', 'contact-image'),
        n.appendChild(a);
      const d = document.createElement('p');
      (d.textContent = 'Photo by Rahul Pandit on Pexels'),
        n.appendChild(d),
        e.appendChild(t),
        e.appendChild(n);
    });
})();
