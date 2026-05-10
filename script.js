const STORE = {
  name: "中華料理 王府",
  phoneDisplay: "0548-00-0000",
  phoneHref: "tel:0548000000",
  // TODO: 本番公開前にLINE公式アカウントURLへ差し替えてください
  lineUrl: "https://line.me/R/ti/p/@sample-account",
  mapUrl: "https://maps.google.com/?q=静岡県榛原郡吉田町",
  tabelogUrl: "https://tabelog.com/",
  address: "静岡県榛原郡吉田町（詳細住所は調整中）",
};

function safeSetLink(id, href, label) {
  const element = document.getElementById(id);
  if (!element) return;
  if (href) element.href = href;
  if (label) element.textContent = label;
}

function safeSetText(id, text) {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    safeSetLink("phone-btn", STORE.phoneHref, `電話予約する（${STORE.phoneDisplay}）`);
    safeSetLink("phone-btn-footer", STORE.phoneHref, `電話予約（${STORE.phoneDisplay}）`);
    safeSetLink("mobile-cta", STORE.phoneHref, `📞 ${STORE.phoneDisplay} に電話する`);
    safeSetLink("line-btn", STORE.lineUrl, "LINEで予約する");
    safeSetLink("line-btn-footer", STORE.lineUrl, "LINE予約");
    safeSetLink("map-link", STORE.mapUrl, "Googleマップを開く");
    safeSetLink("tabelog-link", STORE.tabelogUrl, "食べログページを開く");
    safeSetText("store-address", STORE.address);
    safeSetText("footer-address", STORE.address);
  } catch (error) {
    console.error("Failed to initialize store links:", error);
  }
});
