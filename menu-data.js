const MENU_YOSHIDA = {
  sourceUpdatedAt: '2026-05-10',
  sourceUrls: [
    'https://tabelog.com/shizuoka/A2203/A220302/22033511/',
    'https://tabelog.com/shizuoka/A2203/A220302/22033511/dtlmenu/',
    'https://tabelog.com/shizuoka/A2203/A220302/22033511/dtlmenu/lunch/'
  ],
  store: {
    name: '中華料理 王府', phone: '0548-88-9066', address: '静岡県榛原郡吉田町神戸63-1',
    hours: '11:00 - 14:30 / 17:00 - 23:00（公開情報ベース）', holiday: '無休（公開情報ベース。最新情報は店舗確認）'
  },
  categories: [
    { id:'popular',labelJa:'人気・名物',labelEn:'Signature',lead:'王府らしさを感じる名物料理。',heroImage:'assets/menu/signature.svg',items:[
      {name:'王府名物頂天石焼き麻婆豆腐',price:'価格：店舗確認中',description:'食べログ料理メニュー掲載。',image:'assets/menu/mapo.svg',tags:['名物','人気'],sourceNote:'料理メニュー掲載'},
      {name:'王府名物羽根つき焼き餃子',price:'価格：店舗確認中',description:'食べログ料理メニュー掲載。',image:'assets/menu/gyoza.svg',tags:['名物'],sourceNote:'料理メニュー掲載'},
      {name:'豚上ロース黒酢酢豚',price:'価格：店舗確認中',description:'食べログ料理/ランチメニュー掲載。',image:'assets/menu/subuta.svg',tags:['人気'],sourceNote:'料理・ランチ掲載'},
      {name:'特選四川鉄板エビチリソース',price:'価格：店舗確認中',description:'食べログ料理メニュー掲載。',image:'assets/menu/ebi-chili.svg',tags:['四川'],sourceNote:'料理メニュー掲載'},
      {name:'豆苗のシャキシャキ香り炒め',price:'価格：店舗確認中',description:'食べログ料理メニュー掲載。',image:'assets/menu/signature.svg',tags:['野菜'],sourceNote:'料理メニュー掲載'}
    ]},
    { id:'lunch',labelJa:'ランチ',labelEn:'Lunch',lead:'主菜と追加バーでしっかり満たす昼の定番。',heroImage:'assets/menu/lunch.svg',items:[
      {name:'ランチ料理注文者向けバイキングバー追加',price:'250円（公開情報）',description:'トップ説明文に「プラス250円」表記。',image:'assets/menu/lunch.svg',tags:['ランチ'],sourceNote:'トップページ説明文'},
      {name:'ドリンクバー追加',price:'店舗確認中',description:'提供有無は公開情報に記載、価格は未確認。',image:'assets/menu/drink.svg',tags:['ランチ'],sourceNote:'ランチ情報'},
      {name:'バイキングバーのみ利用',price:'店舗確認中',description:'価格未確認。',image:'assets/menu/lunch.svg',tags:['ランチ'],sourceNote:'ランチ情報'}
    ]},
    { id:'alacarte',labelJa:'一品料理',labelEn:'A la carte',lead:'前菜・小皿・炒め物。',heroImage:'assets/menu/alacarte.svg',items:[{name:'自家製キムチ',price:'店舗確認中',description:'前菜小皿。',image:'assets/menu/alacarte.svg',tags:['前菜'],sourceNote:'料理メニュー掲載'},{name:'ピータン豆腐',price:'店舗確認中',description:'前菜小皿。',image:'assets/menu/alacarte.svg',tags:['前菜'],sourceNote:'料理メニュー掲載'},{name:'王府八宝菜',price:'店舗確認中',description:'炒め物。',image:'assets/menu/alacarte.svg',tags:['炒め物'],sourceNote:'料理メニュー掲載'}]},
    { id:'setmeal',labelJa:'定食',labelEn:'Set meal',lead:'定食系は公開情報から確認できる範囲のみ掲載。',heroImage:'assets/menu/lunch.svg',items:[{name:'梅ランチ等の詳細セット',price:'店舗確認中',description:'名称・価格の確定情報が取得できないため要確認。',image:'assets/menu/lunch.svg',tags:['未確定'],sourceNote:'店舗確認中'}]},
    { id:'noodles',labelJa:'麺・飯',labelEn:'Noodles / Rice',lead:'刀削麺・ラーメン・飯類。',heroImage:'assets/menu/alacarte.svg',items:[{name:'塩ラーメン',price:'店舗確認中',description:'ランチ対象として掲載。',image:'assets/menu/alacarte.svg',tags:['ランチ対象'],sourceNote:'ランチ掲載'},{name:'四川風担々麺',price:'店舗確認中',description:'ランチ対象として掲載。',image:'assets/menu/alacarte.svg',tags:['ランチ対象'],sourceNote:'ランチ掲載'},{name:'マーラー牛肉刀削麺',price:'店舗確認中',description:'ランチ対象として掲載。',image:'assets/menu/alacarte.svg',tags:['刀削麺'],sourceNote:'ランチ掲載'},{name:'五目あんかけ焼そば',price:'店舗確認中',description:'ランチ対象として掲載。',image:'assets/menu/alacarte.svg',tags:['焼そば'],sourceNote:'ランチ掲載'}]},
    { id:'takeout',labelJa:'テイクアウト',labelEn:'Takeout',lead:'電話注文可。弁当・オードブルは事前予約推奨。',heroImage:'assets/menu/takeout.svg',items:[{name:'牡丹弁当',price:'店舗確認中',description:'食べログトップ掲載。',image:'assets/menu/takeout.svg',tags:['弁当'],sourceNote:'トップ掲載'},{name:'たんぽぽ弁当',price:'店舗確認中',description:'食べログトップ掲載。',image:'assets/menu/takeout.svg',tags:['弁当'],sourceNote:'トップ掲載'},{name:'桜弁当',price:'店舗確認中',description:'食べログトップ掲載。',image:'assets/menu/takeout.svg',tags:['弁当'],sourceNote:'トップ掲載'},{name:'中華のオードブル',price:'店舗確認中',description:'食べログトップ掲載。',image:'assets/menu/takeout.svg',tags:['オードブル'],sourceNote:'トップ掲載'},{name:'点心',price:'店舗確認中',description:'食べログトップ掲載。',image:'assets/menu/takeout.svg',tags:['点心'],sourceNote:'トップ掲載'}]},
    { id:'course',labelJa:'コース',labelEn:'Course',lead:'宴会・家族利用向けコース。',heroImage:'assets/menu/course.svg',items:[{name:'食べ飲み放題コース',price:'3,680円（税込）',description:'本格中華を食べ放題。',image:'assets/menu/course.svg',tags:['食べ放題','飲み放題'],sourceNote:'トップ掲載'},{name:'家族コース A（2-3人前）8品',price:'4,580円（税込）',description:'詳細構成は店舗確認中。',image:'assets/menu/course.svg',tags:['家族'],sourceNote:'トップ掲載'},{name:'家族コース B（2-3人前）8品',price:'4,580円（税込）',description:'詳細構成は店舗確認中。',image:'assets/menu/course.svg',tags:['家族'],sourceNote:'トップ掲載'}]},
    { id:'drink',labelJa:'ドリンク',labelEn:'Drink',lead:'日本酒・焼酎・ワイン・カクテル。',heroImage:'assets/menu/drink.svg',items:[{name:'日本酒',price:'店舗確認中',description:'提供カテゴリ確認済。銘柄は店舗確認中。',image:'assets/menu/drink.svg',tags:['酒'],sourceNote:'トップ掲載'},{name:'焼酎',price:'店舗確認中',description:'提供カテゴリ確認済。',image:'assets/menu/drink.svg',tags:['酒'],sourceNote:'トップ掲載'},{name:'ワイン',price:'店舗確認中',description:'提供カテゴリ確認済。',image:'assets/menu/drink.svg',tags:['酒'],sourceNote:'トップ掲載'},{name:'カクテル',price:'店舗確認中',description:'提供カテゴリ確認済。',image:'assets/menu/drink.svg',tags:['酒'],sourceNote:'トップ掲載'},{name:'ドリンクバー',price:'店舗確認中',description:'ランチ追加として確認。',image:'assets/menu/drink.svg',tags:['ランチ'],sourceNote:'ランチ掲載'}]}
  ]
};
