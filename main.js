(() => {
  'use strict';
  const e = () => {
    const e = document.querySelector('#content');
    e.innerHTML = '';
    const t = document.createElement('main'),
      n = document.createElement('h1');
    n.textContent = 'An Awesome Restaurant';
    const c = document.createElement('p');
    c.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
    const d = document.createElement('div'),
      o = document.createElement('h2');
    (o.textContent = 'Hours'), d.appendChild(o);
    const a = document.createElement('p');
    (a.textContent = 'Monday: 6am - 6pm'), d.appendChild(a);
    const m = document.createElement('p');
    (m.textContent = 'Tuesday: 6am - 6pm'), d.appendChild(m);
    const i = document.createElement('p');
    (i.textContent = 'Wednesday: 6am - 6pm'), d.appendChild(i);
    const r = document.createElement('p');
    (r.textContent = 'Thursday: 6am - 10pm'), d.appendChild(r);
    const l = document.createElement('p');
    (l.textContent = 'Friday: 6am - 10pm'), d.appendChild(l);
    const p = document.createElement('p');
    (p.textContent = 'Saturday: 8am - 10pm'),
      d.appendChild(p),
      t.appendChild(n),
      t.appendChild(c),
      t.appendChild(d),
      e.appendChild(t);
  };
  (() => {
    const e = document.createElement('header'),
      t = document.createElement('nav'),
      n = document.createElement('ul'),
      c = document.createElement('li');
    c.setAttribute('id', 'home-tab'), (c.textContent = 'Home');
    const d = document.createElement('li');
    d.setAttribute('id', 'menu-tab'), (d.textContent = 'Menu');
    const o = document.createElement('li');
    o.setAttribute('id', 'contact-tab'),
      (o.textContent = 'Contact'),
      n.appendChild(c),
      n.appendChild(d),
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
      const c = (e, t, c, d) => {
        const o = document.createElement('article');
        o.setAttribute('class', 'menu-item');
        const a = document.createElement('h2');
        (a.textContent = e), o.appendChild(a);
        const m = document.createElement('p');
        (m.textContent = t), o.appendChild(m);
        const i = document.createElement('p');
        (i.textContent = c), o.appendChild(i);
        const r = document.createElement('img');
        r.setAttribute('src', d),
          r.setAttribute('alt', `${e}`),
          r.classList.add('item-img'),
          o.appendChild(r),
          n.appendChild(o);
      };
      c(
        'A normal salad',
        'Just a normal salad, nothing special here.',
        '$2',
        '/src/img/normal-salad.jpg'
      ),
        c('Sandwich', "Hey, it's a sandwich", '$3', '/src/img/sandwich.jpg'),
        c(
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
      const c = document.createElement('p');
      (c.textContent = 'Amazing Owner'), n.appendChild(c);
      const d = document.createElement('p');
      (d.textContent = 'amazingownerrealemail@amazingmail.com'),
        n.appendChild(d);
      const o = document.createElement('img');
      o.setAttribute('src', '/src/img/amazing-owner.jpg'),
        o.setAttribute('alt', 'Amazing owner'),
        o.setAttribute('id', 'contact-image'),
        n.appendChild(o),
        e.appendChild(t),
        e.appendChild(n);
    });
})();
