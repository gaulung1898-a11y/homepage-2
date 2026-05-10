const STORE = {
  name: "中華料理 王府",
  phoneDisplay: "0548-88-9066",
  phoneHref: "tel:0548889066",
  // TODO: 店舗の公式LINE予約URL確定後に差し替え
  lineUrl: "https://line.me/R/ti/p/@replace-me",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%A6%9B%E5%8E%9F%E9%83%A1%E5%90%89%E7%94%B0%E7%94%BA%E7%A5%9E%E6%88%B863-1",
  tabelogUrl: "https://tabelog.com/shizuoka/A2203/A220302/22033511/",
  address: "静岡県榛原郡吉田町神戸63-1"
};

const setLink = (id, href, text) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href;
  if (text) el.textContent = text;
};

const setText = (id, text) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
};

document.addEventListener("DOMContentLoaded", () => {
  ["phone-btn", "phone-btn-access", "phone-btn-footer", "mobile-phone", "store-phone"].forEach((id) => setLink(id, STORE.phoneHref, id === "store-phone" ? STORE.phoneDisplay : undefined));
  ["line-btn", "line-btn-footer", "mobile-line"].forEach((id) => setLink(id, STORE.lineUrl));
  ["map-btn", "map-link", "footer-map"].forEach((id) => setLink(id, STORE.mapUrl));
  ["tabelog-btn", "tabelog-link", "footer-tabelog"].forEach((id) => setLink(id, STORE.tabelogUrl));
  ["store-address", "footer-address"].forEach((id) => setText(id, STORE.address));
});
