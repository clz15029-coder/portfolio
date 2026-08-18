# 進捗管理(1週間プラン)

元の詳細プランは `/Users/miyu/.claude/plans/inherited-exploring-wirth.md` を参照。ここでは日ごとの進捗をチェックする。

**運用ルール**: 何か作業が完了するたびに、このファイルのチェックボックスと「メモ」を更新する。

## Day1: Git移行・TOPページ再構築 ✅完了
- [x] リポジトリを `~/dev/portfolio` にクローン、`css/` `js/` 構成へ移行
- [x] `.nojekyll` 追加、初回コミット・push
- [x] GitHub Pages公開設定(リポジトリをPublicに変更した上で有効化)
- [x] 空デプロイ確認(`https://clz15029-coder.github.io/portfolio/`)
- [x] TOPページを複数ページ構成へ再構築、共通ヘッダー/フッター確立
- [x] ABOUT/WORKS/PROCESS・SKILLS/PERSONAL WORKS/CONTACTの雛形(準備中ページ)を作成
- [x] 配色をモノトーン寄りに変更、ナビ現在地ハイライト追加

メモ: 当初モノトーン配色に見出し明朝体(Shippori Mincho)を採用していたが、参考サイト(morohoshi.site)がゴシック統一だったため、Zen Kaku Gothic Newに変更(2026-08-19)。

## Day2: WORKS一覧 + データ管理
- [ ] `js/works-data.js` 作成(ダミー3〜4件、4カテゴリ)
- [ ] `works.html` グリッド表示
- [ ] カテゴリフィルタ実装

## Day3: 作品詳細テンプレート
- [ ] `work-detail.html` + `js/work-detail.js`
- [ ] ラフ→承認→完成のプロセス表示(ダミー)
- [ ] 一覧カードから詳細への導線

## Day4: ABOUT + PROCESS・SKILLS
- [ ] ABOUTページ本実装(プロフィール枠・経歴・スキル)
- [ ] PROCESS・SKILLSページ本実装(フロー図・Notion手順化の枠)

## Day5: PERSONAL WORKS + CONTACT
- [ ] PERSONAL WORKSページ本実装
- [ ] CONTACTページ本実装

## Day6: 横断ポリッシュ
- [ ] 余白・フォント階調・ホバー演出の統一
- [ ] レスポンシブ確認(全ページ)

## Day7: 最終QA・公開確認
- [ ] 全ページ・全リンクのクリック確認
- [ ] 本番URLでの相対パス確認
- [ ] 「作品を追加する方法」メモ作成

## スコープ外(今週やらないこと)
- 実案件6〜10件の実データ、実写真、実プロセス資料
- Notion手順化の実スクリーンショット、ABOUT本文・実写真
- 画像最適化、誤字チェック、独自ドメイン設定
