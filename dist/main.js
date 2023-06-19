(() => {
  'use strict';
  const e = document.querySelector('#content');
  (() => {
    const t = document.createElement('header'),
      n = document.createElement('nav'),
      d = document.createElement('ul'),
      o = document.createElement('li');
    o.textContent = 'Home';
    const a = document.createElement('li');
    a.textContent = 'Menu';
    const m = document.createElement('li');
    (m.textContent = 'Contact'),
      d.appendChild(o),
      d.appendChild(a),
      d.appendChild(m),
      n.appendChild(d),
      t.appendChild(n),
      e.appendChild(t);
  })(),
    (() => {
      const t = document.createElement('main'),
        n = document.createElement('h1');
      n.textContent = 'An Awesome Restaurant';
      const d = document.createElement('p');
      d.textContent =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus qui dolor fugit facere. Corrupti ea sit quidem quod nemo rem aliquid voluptas ratione eos dolorem odio, cum animi! Nemo.';
      const o = document.createElement('div'),
        a = document.createElement('h3');
      (a.textContent = 'Hours'), o.appendChild(a);
      const m = document.createElement('p');
      (m.textContent = 'Monday: 6am - 6pm'), o.appendChild(m);
      const c = document.createElement('p');
      (c.textContent = 'Tuesday: 6am - 6pm'), o.appendChild(c);
      const p = document.createElement('p');
      (p.textContent = 'Wednesday: 6am - 6pm'), o.appendChild(p);
      const l = document.createElement('p');
      (l.textContent = 'Thursday: 6am - 10pm'), o.appendChild(l);
      const i = document.createElement('p');
      (i.textContent = 'Friday: 6am - 10pm'), o.appendChild(i);
      const r = document.createElement('p');
      (r.textContent = 'Saturday: 8am - 10pm'),
        o.appendChild(r),
        t.appendChild(n),
        t.appendChild(d),
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
