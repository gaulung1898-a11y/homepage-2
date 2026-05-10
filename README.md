# 中華料理 王府 サイト v2

公開URL: https://gaulung1898-a11y.github.io/homepage-2/

## コンセプト
「吉田町で気軽に使える町中華」を、スマホで見た瞬間に伝えるためのデザインへ全面リデザイン。

## 固定情報（実装済み）
- 店名: 中華料理 王府
- 電話番号: 0548-88-9066
- telリンク: tel:0548889066
- 住所: 静岡県榛原郡吉田町神戸63-1
- Googleマップ: 住所検索URL
- 食べログ: https://tabelog.com/shizuoka/A2203/A220302/22033511/

## 差し替え項目（店舗確認が必要）
- `script.js` の `STORE.lineUrl`
  - 現在は `#` で仮設定。
  - TODOコメントあり。本番公開前にLINE公式URLへ差し替え。
- 営業時間（`STORE.hours`）
- 定休日（`STORE.holiday`）
- 駐車場情報（`STORE.parking`）

## ローカル確認
```bash
node --check script.js
python3 -m http.server 8000
curl -I http://localhost:8000
```
