/*
  TOPページMVの.hero-visualに、worksDataから1件ランダムに選んで表示する。
  3〜5秒間隔でランダムに次の作品へ切り替わる。
  work.imageがあれば画像を表示、無ければタイトルをテキストで表示する
  (images/works/に実画像を用意し、works-data.jsにimageフィールドを追記すれば
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

  el.classList.add('is-fading');
  window.setTimeout(() => {
    el.innerHTML = work.image
      ? `<img src="${work.image}" alt="${work.title}" />`
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
  scheduleNextSwap();
}
