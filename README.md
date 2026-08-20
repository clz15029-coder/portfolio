# Portfolio

杉山弥優のポートフォリオサイト。フレームワークを使わない素のHTML/CSS/JS構成で、GitHub Pagesで公開しています。

- 公開URL: https://clz15029-coder.github.io/portfolio/

## フォルダ構成

ルート直下は「公開されるサイト本体」と`README.md`・`CLAUDE.md`のみに保ち、進捗管理などの運用メモは`memo/`フォルダにまとめています。

```
.
├── index.html            TOPページ
├── about.html             ABOUTページ
├── works.html             WORKS一覧ページ
├── work-detail.html       WORKS詳細ページ(?id=で出し分け、直接アクセス用の完全版)
├── faq.html               FAQページ(アコーディオン形式、Q1〜Q7)
├── news.html              NEWSページ(お知らせ一覧)
├── contact.html           CONTACTページ
├── css/
│   └── styles.css         全ページ共通スタイル
├── js/
│   ├── main.js             共通UI制御(サイドバー開閉、作品詳細モーダルの開閉、年齢自動計算)
│   ├── works-data.js       WORKS作品データ(この配列を編集すると一覧・詳細・モーダル・TOPページに反映)
│   ├── category-groups.js  WORKSカテゴリの大分類3つ×小分類7つの定義
│   ├── work-render.js      作品カード・作品詳細の共通HTML生成(一覧/詳細/モーダル/TOPページで共用)
│   ├── works-list.js       WORKS一覧ページの描画・フィルタ(大分類→小分類)・モーダル制御
│   ├── work-detail.js      WORKS詳細ページ(フルページ版)の描画ロジック
│   ├── top-works.js        TOPページのWorksセクション(大分類ごとに最大3件をランダム表示)
│   ├── hero-visual.js      TOPページMVの画像ランダム切り替え(3〜5秒間隔)
│   └── faq.js               FAQアコーディオンの開閉制御
├── images/
│   ├── profile/            プロフィール写真用(現状未挿入)
│   ├── works/               作品画像用(現状未挿入)
│   └── ui/                  その他UI素材用(現状未挿入)
├── README.md              このファイル
├── CLAUDE.md              Claude Codeとの作業ルール(自動読み込みのためルート固定)
└── memo/                  運用メモ(サイト本体には含まれない)
    ├── DESIGN.md           デザイン方針(配色・フォント・コンポーネント)
    ├── PLAN.md             日ごとの進捗管理・作業メモ
    ├── 作品の追加方法.md    WORKSページに新しい作品を追加する手順(CSV編集の手順も含む)
    ├── works-content.csv   WORKS作品データをCSVで編集したい時の下書き用ファイル
    └── archive/             役目を終えた過去ドキュメント(参考用のみ)
```

## ドキュメント

| ファイル | 内容 |
|---|---|
| [CLAUDE.md](CLAUDE.md) | このプロジェクトでの作業ルール(Claude Codeとの進め方) |
| [memo/DESIGN.md](memo/DESIGN.md) | 配色・フォント・コンポーネントなどのデザイン方針 |
| [memo/PLAN.md](memo/PLAN.md) | 日ごとの進捗管理・作業メモ |
| [memo/作品の追加方法.md](memo/作品の追加方法.md) | WORKSページに新しい作品を追加する手順 |
| [memo/archive/](memo/archive/) | 制作開始前の初期プランなど、現在は参照用のみの古いドキュメント |

## ローカルで確認する

ビルド不要。任意のローカルサーバーで`index.html`を配信すれば確認できます。

```
python3 -m http.server 8000
```

その後ブラウザで http://localhost:8000 を開く。

## 作品データについて

WORKS一覧・詳細ページ・詳細モーダル・TOPページのWorksセクションは、すべて `js/works-data.js` の配列から自動生成されます(個人制作・イラストも含め同じ仕組みで管理)。新しい作品の追加方法、および`memo/works-content.csv`を使ったCSV編集の手順は [memo/作品の追加方法.md](memo/作品の追加方法.md) を参照してください。

WORKS一覧ページで作品カードをクリックすると、画面右側からモーダルパネルで詳細が表示されます(ページ遷移なし、URLは`work-detail.html?id=`に更新されるため共有・直接アクセスも可能)。

TOPページのWorksセクションは、大分類(デジタル・Web系/グラフィック・印刷/ブランディング・CI/VI)ごとに最大3件をランダムに選んで表示します(ページを再読み込みするたびに入れ替わる)。
