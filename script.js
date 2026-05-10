const STORE = {
  name: '中華料理 王府',
  phone: '0548-88-9066',
  tel: 'tel:0548889066',
  address: '静岡県榛原郡吉田町神戸63-1',
  area: '静岡県榛原郡吉田町',
  lineUrl: '#', // TODO: 本番公開前にLINE公式URLへ差し替え
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

const setText = (id, text) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    setText('store-name', STORE.name);
    setText('store-address', STORE.address);
    setText('footer-address', STORE.address);
    setText('store-hours', STORE.hours);
    setText('store-holiday', STORE.holiday);
    setText('store-parking', STORE.parking);

    ['phone-btn', 'phone-btn-access', 'phone-btn-footer', 'mobile-phone', 'store-phone', 'footer-phone'].forEach((id) => {
      const phoneText = id === 'store-phone' || id === 'phone-btn-footer' ? STORE.phone : undefined;
      setLink(id, STORE.tel, phoneText);
    });

    setLink('phone-btn', STORE.tel, `電話する ${STORE.phone}`);

    ['line-btn', 'line-btn-footer', 'mobile-line'].forEach((id) => setLink(id, STORE.lineUrl));
    ['map-btn', 'map-link', 'footer-map'].forEach((id) => setLink(id, STORE.mapUrl));
    ['tabelog-btn', 'tabelog-link', 'footer-tabelog'].forEach((id) => setLink(id, STORE.tabelogUrl));

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
  } catch (error) {
    console.error('Initialization failed:', error);
  }
});
