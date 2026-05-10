# 中華料理 王府 v2（GitHub Pages用）

町中華としての使いやすさを軸に、導線・情報設計・見た目を全面的に再設計した静的サイトです。

## 公開URL
- https://gaulung1898-a11y.github.io/homepage-2/

## 差し替え管理（店舗確認が必要な項目）

### 必須
- `script.js` の `STORE.lineUrl`
  - 現在は **TODO付きの仮URL**。
  - 店舗の公式LINE URL確定後に差し替えてください。

### 店舗確認中（表示上は控えめに掲載）
- 営業時間
- 定休日
- 駐車場有無

## 固定情報（実装済み）
- 電話番号: `0548-88-9066`
- telリンク: `tel:0548889066`
- 住所: `静岡県榛原郡吉田町神戸63-1`
- Googleマップ: 上記住所で検索起動
- 食べログ: `https://tabelog.com/shizuoka/A2203/A220302/22033511/`

## ローカル確認
```bash
python3 -m http.server 8000
```
- `http://localhost:8000`

## 品質確認チェック
- h1 は1つ
- title / description / OGP / JSON-LD を実装
- スマホ固定CTAは「電話」「LINE」の2ボタン
- 固定CTAが本文を隠しすぎない高さに調整
- JSは要素未存在時に早期returnして null参照回避
