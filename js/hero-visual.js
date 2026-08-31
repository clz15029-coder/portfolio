/*
  TOPページMVの.hero-mvに、worksData(imagesが1枚以上ある作品のみ)を1件ずつ
  画面いっぱいに表示する。
  ・下部に黒グラデーション+白文字で作品タイトル/カテゴリタグを表示
  ・右下に次の作品のプレビューがあり、クリックすると次に進む
  ・上部の細いバーが5秒かけて伸び、経過を示す(伸びきると自動で次に進む)
  ・メイン画像をクリックするとその作品の詳細ページに遷移する
  参考: https://shunsukesatake.com/ のp-top__mv(1枚のビジュアル+情報+次のプレビュー)
*/
const HERO_MV_INTERVAL = 5000;

function getHeroMvWorks() {
  if (typeof worksData === 'undefined') return [];
  return worksData.filter((w) => w.images && w.images.length);
}

function initHeroMv() {
  const root = document.querySelector('.hero-mv');
  if (!root) return;

  const works = getHeroMvWorks();
  if (!works.length) return;

  root.innerHTML = `
    <a class="hero-mv-link" href="">
      <img class="hero-mv-img" src="" alt="">
      <div class="hero-mv-overlay"></div>
      <div class="hero-mv-info">
        <p class="hero-mv-info-title"></p>
        <p class="hero-mv-info-tag"></p>
      </div>
    </a>
    <div class="hero-mv-progress"><span class="hero-mv-progress-bar"></span></div>
    <button type="button" class="hero-mv-next" aria-label="次の作品">
      <img class="hero-mv-next-img" src="" alt="">
      <span class="hero-mv-next-label">Next</span>
    </button>
  `;

  const link = root.querySelector('.hero-mv-link');
  const img = root.querySelector('.hero-mv-img');
  const titleEl = root.querySelector('.hero-mv-info-title');
  const tagEl = root.querySelector('.hero-mv-info-tag');
  const progressBar = root.querySelector('.hero-mv-progress-bar');
  const nextBtn = root.querySelector('.hero-mv-next');
  const nextImg = root.querySelector('.hero-mv-next-img');

  let index = 0;
  let timer = null;

  function render() {
    const work = works[index];
    const nextWork = works[(index + 1) % works.length];

    link.href = `work-detail.html?id=${work.id}`;
    img.src = work.images[0];
    img.alt = work.title;
    titleEl.textContent = work.title;
    tagEl.textContent = (work.tags && work.tags[0]) || '';

    nextImg.src = nextWork.images[0];
    nextImg.alt = nextWork.title;

    // アニメーションを最初からやり直すため、一度クラスを外してreflowさせてから戻す
    progressBar.classList.remove('is-playing');
    void progressBar.offsetWidth;
    progressBar.classList.add('is-playing');
  }

  function goToNext() {
    index = (index + 1) % works.length;
    render();
    scheduleNext();
  }

  function scheduleNext() {
    clearTimeout(timer);
    timer = window.setTimeout(goToNext, HERO_MV_INTERVAL);
  }

  nextBtn.addEventListener('click', goToNext);

  render();
  scheduleNext();
}

initHeroMv();
