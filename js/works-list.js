const CATEGORY_LABELS = {
  web: 'WEB',
  banner: 'バナー・グラフィック',
  logo: 'ロゴ',
  print: '印刷物'
};

function renderWorksList() {
  const grid = document.querySelector('.works-grid');
  const pillsContainer = document.querySelector('.filter-pills');
  const countEl = document.querySelector('.works-count');
  if (!grid || !pillsContainer || typeof worksData === 'undefined') return;

  countEl.textContent = worksData.length;

  const categoriesPresent = [...new Set(worksData.map((w) => w.category))];
  pillsContainer.innerHTML = '';
  const allPill = document.createElement('button');
  allPill.className = 'filter-pill is-active';
  allPill.type = 'button';
  allPill.dataset.filter = 'all';
  allPill.textContent = 'All';
  pillsContainer.appendChild(allPill);

  categoriesPresent.forEach((cat) => {
    const pill = document.createElement('button');
    pill.className = 'filter-pill';
    pill.type = 'button';
    pill.dataset.filter = cat;
    pill.textContent = CATEGORY_LABELS[cat] || cat;
    pillsContainer.appendChild(pill);
  });

  function renderCards(filter) {
    grid.innerHTML = '';
    worksData
      .filter((w) => filter === 'all' || w.category === filter)
      .forEach((w) => {
        const card = document.createElement('a');
        card.className = 'work-card';
        card.href = `work-detail.html?id=${w.id}`;
        card.innerHTML = `
          <div class="work-thumb">作品画像(準備中)</div>
          <h3>${w.title}</h3>
          <div class="work-card-meta">
            <div class="work-tags">
              ${w.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
            </div>
            <span class="work-period">${w.period}</span>
          </div>
        `;
        grid.appendChild(card);
      });
  }

  pillsContainer.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    pillsContainer.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('is-active'));
    pill.classList.add('is-active');
    renderCards(pill.dataset.filter);
  });

  renderCards('all');
}

renderWorksList();
