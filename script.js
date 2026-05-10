const STORE = {
  name: '中華料理 王府',
  phone: '0548-88-9066',
  tel: 'tel:0548889066',
  address: '静岡県榛原郡吉田町神戸63-1',
  lineUrl: '#', // TODO: LINE予約URL確定後に置換
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%A6%9B%E5%8E%9F%E9%83%A1%E5%90%89%E7%94%B0%E7%94%BA%E7%A5%9E%E6%88%B863-1',
  tabelogUrl: 'https://tabelog.com/shizuoka/A2203/A220302/22033511/',
  hours: '店舗確認中',
  holiday: '店舗確認中',
  parking: '店舗確認中'
};

const setLink = (id, href, text) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute('href', href);
  if (text) el.textContent = text;
};

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
};

document.addEventListener('DOMContentLoaded', () => {
  setText('store-address', STORE.address);
  setText('footer-address', STORE.address);
  setText('store-hours', STORE.hours);
  setText('store-holiday', STORE.holiday);
  setText('store-parking', STORE.parking);

  ['header-phone', 'hero-phone', 'store-phone', 'footer-phone', 'fixed-phone'].forEach((id) => {
    setLink(id, STORE.tel);
  });

  ['hero-line', 'footer-line', 'fixed-line'].forEach((id) => {
    setLink(id, STORE.lineUrl);
  });

  ['hero-map', 'access-map', 'footer-map'].forEach((id) => {
    setLink(id, STORE.mapUrl);
  });

  ['hero-tabelog', 'access-tabelog', 'footer-tabelog'].forEach((id) => {
    setLink(id, STORE.tabelogUrl);
  });

  const menuButton = document.getElementById('menu-toggle');
  const globalNav = document.getElementById('global-nav');
  if (menuButton && globalNav) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
      globalNav.classList.toggle('is-open');
    });

    globalNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        globalNav.classList.remove('is-open');
      });
    });
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const trigger = item.querySelector('.faq-q');
    const panel = item.querySelector('.faq-a');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = isOpen ? '0px' : `${panel.scrollHeight}px`;
    });
  });

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
