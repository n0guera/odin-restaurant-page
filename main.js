(() => {
  'use strict';
  var e = {};
  (e.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + '');
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var o = n.getElementsByTagName('script');
        if (o.length) for (var c = o.length - 1; c > -1 && !t; ) t = o[c--].src;
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = t);
    })();
  const t = () => {
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
      const i = document.createElement('p');
      (i.textContent = 'Tuesday: 6am - 6pm'), c.appendChild(i);
      const r = document.createElement('p');
      (r.textContent = 'Wednesday: 6am - 6pm'), c.appendChild(r);
      const m = document.createElement('p');
      (m.textContent = 'Thursday: 6am - 10pm'), c.appendChild(m);
      const l = document.createElement('p');
      (l.textContent = 'Friday: 6am - 10pm'), c.appendChild(l);
      const p = document.createElement('p');
      (p.textContent = 'Saturday: 8am - 10pm'),
        c.appendChild(p),
        t.appendChild(n),
        t.appendChild(o),
        t.appendChild(c),
        e.appendChild(t);
    },
    n = e.p + '34273cfebe65c7377678.jpg',
    o = e.p + '1ceceee462b6347e2720.jpg',
    c = e.p + 'a94f68e18b8471baed46.jpg',
    a = e.p + 'bc5e681d0dcaeb50c6de.jpg';
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
    t(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        e.appendChild(t),
        document.body.appendChild(e);
    })(),
    document.querySelector('#home-tab').addEventListener('click', t),
    document.querySelector('#menu-tab').addEventListener('click', () => {
      const e = document.querySelector('#content');
      e.innerHTML = '';
      const t = document.createElement('h1');
      t.setAttribute('id', 'menu-title'), (t.textContent = 'Menu');
      const a = document.createElement('section');
      a.setAttribute('id', 'menu-items');
      const d = (e, t, n, o, c) => {
        const d = document.createElement('article');
        d.setAttribute('class', 'menu-item');
        const i = document.createElement('h2');
        (i.textContent = e), d.appendChild(i);
        const r = document.createElement('p');
        (r.textContent = t), d.appendChild(r);
        const m = document.createElement('p');
        (m.textContent = n), d.appendChild(m);
        const l = new Image();
        (l.src = o),
          l.setAttribute('alt', `${e}`),
          l.classList.add('item-img'),
          d.appendChild(l);
        const p = document.createElement('p');
        (p.textContent = c), d.appendChild(p), a.appendChild(d);
      };
      d(
        'A normal salad',
        'Just a normal salad, nothing special here.',
        '$2',
        n,
        'Photo by Chan Walrus on Pexels'
      ),
        d(
          'Sandwich',
          "Hey, it's a sandwich",
          '$3',
          o,
          'Photo by Gonzalo Acuña on Pexels'
        ),
        d(
          'An amazing Pepperoni Pizza',
          "Look! It's amazing!",
          '$5',
          c,
          'Photo by Natan Machado on Pexels'
        ),
        e.appendChild(t),
        e.appendChild(a);
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
      const d = new Image();
      (d.src = a),
        d.setAttribute('alt', 'Amazing owner'),
        d.setAttribute('id', 'contact-image'),
        n.appendChild(d);
      const i = document.createElement('p');
      (i.textContent = 'Photo by Rahul Pandit on Pexels'),
        n.appendChild(i),
        e.appendChild(t),
        e.appendChild(n);
    });
})();
