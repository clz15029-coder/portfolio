/*
  TOPページMVの.hero-visualに、worksDataから1件ランダムに選んで表示する。
  3〜5秒間隔でランダムに次の作品へ切り替わる。
  work.imagesの1枚目があれば画像を表示、無ければタイトルをテキストで表示する
  (images/works/に実画像を用意し、works-data.jsのimages配列にパスを追記すれば
  自動的に画像表示に切り替わる)。
*/
function pickRandomWork() {
  if (typeof worksData === 'undefined' || !worksData.length) return null;
  return worksData[Math.floor(Math.random() * worksData.length)];
}

function swapHeroVisual() {
  const el = document.querySelector('.hero-visual');
  const work = pickRandomWork();
  if (!el || !work) return;

  const image = work.images && work.images[0];

  el.classList.add('is-fading');
  window.setTimeout(() => {
    el.innerHTML = image
      ? `<img src="${image}" alt="${work.title}" />`
      : `<span>${work.title}</span>`;
    el.classList.remove('is-fading');
  }, 400);
}

function scheduleNextSwap() {
  const delay = 3000 + Math.random() * 2000;
  window.setTimeout(() => {
    swapHeroVisual();
    scheduleNextSwap();
  }, delay);
}

if (document.querySelector('.hero-visual')) {
  swapHeroVisual();
  scheduleNextSwap();
}
