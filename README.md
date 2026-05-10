# 中華料理 王府 サイト（静的HTML）

このリポジトリは、**中華料理 王府（静岡県榛原郡吉田町）** の案内用ランディングページです。  
`index.html` / `styles.css` / `script.js` のみで構成した、GitHub Pagesでそのまま公開できる静的サイトです。

## ローカルで完成ページを見る方法

```bash
python3 -m http.server 8000
```

ブラウザで以下を開いて確認してください。

- <http://localhost:8000>

> `file://` 直開きではなく、必ずローカルサーバー経由で確認してください（JSやリンク挙動確認のため）。

## GitHub Pagesで公開する手順

1. GitHubで対象リポジトリを開く
2. **Settings**
3. **Pages**
4. **Source**: `Deploy from a branch`
5. **Branch**: `main` / `root`
6. **Save**
7. 表示されたURLを開いて公開ページを確認

想定URL形式:

- Project Pages: `https://{github_user}.github.io/{repository_name}/`
- User/Organization Pages（リポジトリ名が `{github_user}.github.io` の場合）: `https://{github_user}.github.io/`

## 公開後に確認すべきチェックリスト

- 電話ボタンがタップで発信できる
- LINEボタンが正しい公式URLへ遷移する
- Googleマップリンクが正しい地点を開く
- 食べログリンクが正しい店舗ページを開く
- スマホ固定CTAが常時見えて押しやすい
- メニュー表示（カードレイアウト）が崩れていない
- FAQ（開閉UI）が正常動作する

## 差し替え必須項目（公開前）

- `script.js` の `STORE.lineUrl` は現在**仮URL**です。必ず実運用のLINE公式アカウントURLへ差し替えてください。
- 電話番号・営業時間・定休日・詳細住所・食べログURLは最新情報で最終確認してください。

## 実装メモ

- GitHub Pages対応として相対パス（`./styles.css` / `./script.js`）を使用。
- `.nojekyll` を配置し、GitHub Pagesで不要なJekyll処理を回避。
- `script.js` は `DOMContentLoaded` 後に、nullチェック付きでDOM反映。
- タスク単位で `try/catch` を分離し、1つのJSエラーで全機能が止まらない構成。

## 画面セルフレビュー観点

- スマホで見た際、店名・場所・予約方法が3秒で把握できるか
- 予約ボタン（電話 / LINE）が十分目立つか
- メニュー情報が読みやすいか
- アクセス導線（マップ / 食べログ）が分かりやすいか
- 不明情報を断定せず「仮」「調整中」と明記しているか
