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
├── work-detail.html       WORKS詳細ページ(?id=で出し分け)
├── personal-works.html    PERSONAL WORKSページ
├── contact.html           CONTACTページ
├── css/
│   └── styles.css         全ページ共通スタイル
├── js/
│   ├── main.js             共通UI制御(サイドバー開閉など)
│   ├── works-data.js       WORKS作品データ(この配列を編集すると一覧・詳細に反映)
│   ├── works-list.js       WORKS一覧ページの描画ロジック
│   └── work-detail.js      WORKS詳細ページの描画ロジック
├── images/
│   ├── profile/            プロフィール写真用(現状未挿入)
│   ├── works/               作品画像用(現状未挿入)
│   └── ui/                  その他UI素材用(現状未挿入)
├── README.md              このファイル
├── CLAUDE.md              Claude Codeとの作業ルール(自動読み込みのためルート固定)
└── memo/                  運用メモ(サイト本体には含まれない)
    ├── DESIGN.md           デザイン方針(配色・フォント・コンポーネント)
    ├── PLAN.md             日ごとの進捗管理・作業メモ
    ├── 作品の追加方法.md    WORKSページに新しい作品を追加する手順
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

WORKS一覧・詳細ページは `js/works-data.js` の配列から自動生成されます。新しい作品の追加方法は [memo/作品の追加方法.md](memo/作品の追加方法.md) を参照してください。

PERSONAL WORKSページ(`personal-works.html`)は`js/works-data.js`を使わず、HTMLに直接書く方式です。追加方法は [memo/作品の追加方法.md](memo/作品の追加方法.md) を参照してください。
