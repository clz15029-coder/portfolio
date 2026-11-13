/*
  TOPページのWorksセクション。
  大分類3つ(デジタル・Web系/グラフィック・印刷/ブランディング・CI/VI)から
  それぞれ最大3件をランダムに選んで表示する(再読み込みのたびに入れ替わる)。
*/
function pickRandom(items, count) {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function renderTopWorks() {
  const grid = document.querySelector('[data-top-works]');
  if (!grid || typeof worksData === 'undefined' || typeof CATEGORY_GROUPS === 'undefined') return;

  const picked = CATEGORY_GROUPS.flatMap((group) => {
    const keys = group.children.map((child) => child.key);
    const itemsInGroup = worksData.filter((w) => keys.includes(w.category));
    return pickRandom(itemsInGroup, 3);
  });

  grid.innerHTML = '';
  picked.forEach((w) => {
    const card = document.createElement('a');
    card.className = 'work-card';
    card.href = `work-detail.html?id=${w.id}`;
    card.innerHTML = renderWorkCardHTML(w);
    // 作品一覧ページと同じく、ページ遷移ではなく右側のパネルで詳細を開く
    card.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (typeof openDetailModal !== 'function' || typeof renderWorkDetailHTML !== 'function') return;
      e.preventDefault();
      openDetailModal(renderWorkDetailHTML(w, { showBackLink: false }));
    });
    grid.appendChild(card);
  });
}

renderTopWorks();
