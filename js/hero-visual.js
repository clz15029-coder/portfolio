/*
  TOPページMVの.hero-carouselに、worksDataの全作品(imagesが1枚以上ある作品のみ)を
  横並びのカードとして並べるカルーセル。
  ・矢印クリックで1枚ずつ前後に移動(末尾/先頭でループ)
  ・3〜5秒ごとに自動で次のカードへ進む
  ・カードをクリックすると work-detail.html?id=... に遷移
  参考: https://shunsukesatake.com/ のp-top__mv(横並びカルーセル+矢印+ページ番号)
*/
function getHeroCarouselWorks() {
  if (typeof worksData === 'undefined') return [];
  return worksData.filter((w) => w.images && w.images.length);
}

function renderHeroCarouselItemHTML(work) {
  const tag = work.tags && work.tags[0] ? work.tags[0] : '';
  return `
    <a class="hero-carousel-item" href="work-detail.html?id=${work.id}">
      <img src="${work.images[0]}" alt="${work.title}" loading="lazy">
      <span class="hero-carousel-item-title">${work.title}</span>
      ${tag ? `<span class="hero-carousel-item-tag">${tag}</span>` : ''}
    </a>
  `;
}

function initHeroCarousel() {
  const root = document.querySelector('.hero-carousel');
  const track = document.querySelector('.hero-carousel-track');
  if (!root || !track) return;

  const works = getHeroCarouselWorks();
  if (!works.length) {
    root.remove();
    return;
  }

  track.innerHTML = works.map(renderHeroCarouselItemHTML).join('');

  const items = track.querySelectorAll('.hero-carousel-item');
  const prevBtn = root.querySelector('.hero-carousel-nav.is-prev');
  const nextBtn = root.querySelector('.hero-carousel-nav.is-next');
  const currentEl = root.querySelector('.hero-carousel-counter .current');
  const totalEl = root.querySelector('.hero-carousel-counter .total');

  totalEl.textContent = String(works.length).padStart(2, '0');

  let index = 0;
  let timer = null;

  function update() {
    const item = items[index];
    // hero-cardがposition:relativeなので、offsetLeftはtrack起点ではなくhero-card起点になる。
    // trackのoffsetLeftを引いて、track内での相対位置に補正する。
    const offset = item.offsetLeft - track.offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
    currentEl.textContent = String(index + 1).padStart(2, '0');
  }

  function goTo(newIndex) {
    index = (newIndex + works.length) % works.length;
    update();
  }

  function scheduleAutoAdvance() {
    clearTimeout(timer);
    const delay = 3000 + Math.random() * 2000;
    timer = window.setTimeout(() => {
      goTo(index + 1);
      scheduleAutoAdvance();
    }, delay);
  }

  prevBtn.addEventListener('click', () => {
    goTo(index - 1);
    scheduleAutoAdvance();
  });

  nextBtn.addEventListener('click', () => {
    goTo(index + 1);
    scheduleAutoAdvance();
  });

  window.addEventListener('resize', update);

  update();
  scheduleAutoAdvance();
}

initHeroCarousel();
