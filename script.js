const STORE = {
  name: '中華料理 王府',
  phone: '0548-88-9066',
  tel: 'tel:0548889066',
  address: '静岡県榛原郡吉田町神戸63-1',
  lineUrl: '#',
  tabelogUrl: 'https://tabelog.com/shizuoka/A2203/A220302/22033511/',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%A6%9B%E5%8E%9F%E9%83%A1%E5%90%89%E7%94%B0%E7%94%BA%E7%A5%9E%E6%88%B863-1'
};

const setLink = (id, href, text) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute('href', href);
  if (text) el.textContent = text;
};

document.addEventListener('DOMContentLoaded', () => {
  setLink('header-phone', STORE.tel);
  setLink('hero-phone', STORE.tel);
  setLink('store-phone', STORE.tel, STORE.phone);
  setLink('contact-phone', STORE.tel, STORE.phone);

  ['hero-line', 'contact-line', 'footer-line'].forEach((id) => setLink(id, STORE.lineUrl));
  ['hero-map', 'access-map', 'footer-map'].forEach((id) => setLink(id, STORE.mapUrl));
  ['hero-tabelog', 'nav-tabelog', 'footer-tabelog'].forEach((id) => setLink(id, STORE.tabelogUrl));

  const addressEl = document.getElementById('store-address');
  if (addressEl) addressEl.textContent = `住所　${STORE.address}`;

  const menuButton = document.getElementById('menu-toggle');
  const globalNav = document.getElementById('global-nav');
  if (menuButton && globalNav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      globalNav.classList.toggle('is-open');
    });
  }

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const jsonLd = document.getElementById('jsonld-restaurant');
  if (jsonLd) {
    jsonLd.textContent = JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: STORE.name,
        address: STORE.address,
        telephone: STORE.phone,
        servesCuisine: '中華料理',
        sameAs: [STORE.tabelogUrl, STORE.mapUrl]
      },
      null,
      2
    );
  }
});
