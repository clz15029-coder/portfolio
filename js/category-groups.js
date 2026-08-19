/*
  WORKSのカテゴリ分類。大分類3つ(デジタル・Web系/グラフィック・印刷/ブランディング・CI/VI)の
  下に、細かい分類(サブカテゴリ)がぶら下がる二階層構造。
  各作品データ(works-data.js)の category には、サブカテゴリの key を指定する。
*/
const CATEGORY_GROUPS = [
  {
    label: 'デジタル・Web系',
    children: [
      { key: 'web-site', label: 'Webサイト / LP' },
      { key: 'ad', label: 'デジタル広告・SNS用素材' }
    ]
  },
  {
    label: 'グラフィック・印刷',
    children: [
      { key: 'pamphlet', label: 'フリーペーパー、パンフレット' },
      { key: 'biztool', label: 'ビジネスツール' },
      { key: 'illustration', label: 'イラストレーション' }
    ]
  },
  {
    label: 'ブランディング・CI/VI',
    children: [
      { key: 'logo', label: 'ロゴ・シンボルマーク' },
      { key: 'guideline', label: 'ガイドライン' }
    ]
  }
];
