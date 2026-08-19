function renderWorkDetail() {
  const root = document.querySelector('.work-detail');
  if (!root || typeof worksData === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const work = worksData.find((w) => w.id === id) || worksData[0];
  if (!work) return;

  document.title = `${work.title} | ポートフォリオ`;
  root.innerHTML = renderWorkDetailHTML(work, { showBackLink: true });
}

renderWorkDetail();
