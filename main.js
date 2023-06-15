(() => {
  'use strict';
  const e = document.querySelector('#content');
  (() => {
    const t = document.createElement('header'),
      n = document.createElement('nav'),
      c = document.createElement('ul'),
      d = document.createElement('li');
    d.textContent = 'Home';
    const o = document.createElement('li');
    o.textContent = 'Menu';
    const l = document.createElement('li');
    (l.textContent = 'Contact'),
      c.appendChild(d),
      c.appendChild(o),
      c.appendChild(l),
      n.appendChild(c),
      t.appendChild(n),
      e.appendChild(t);
  })(),
    (() => {
      const e = document.createElement('footer'),
        t = document.createElement('p');
      (t.textContent = 'Made with <3 for The Odin Project curriculum'),
        e.appendChild(t),
        document.body.appendChild(e);
    })();
})();
