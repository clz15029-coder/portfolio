function renderWorkDetail() {
  const root = document.querySelector('.work-detail');
  if (!root || typeof worksData === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const work = worksData.find((w) => w.id === id) || worksData[0];
  if (!work) return;

  document.title = `${work.title} | ポートフォリオ`;

  root.innerHTML = `
    <p class="page-eyebrow">WORKS 詳細</p>
    <h1>${work.title}</h1>
    <p class="work-detail-summary">${work.summary}</p>

    <dl class="work-meta">
      <div>
        <dt>制作期間</dt>
        <dd>${work.period}</dd>
      </div>
      <div>
        <dt>担当領域</dt>
        <dd>${work.role}</dd>
      </div>
      <div>
        <dt>URL</dt>
        <dd>${work.url ? `<a href="${work.url}" target="_blank" rel="noopener">${work.url}</a>` : '&mdash;'}</dd>
      </div>
    </dl>

    <div class="work-thumb work-detail-thumb">作品画像(準備中)</div>

    <section class="work-detail-section">
      <h2>概要</h2>
      <ul class="work-points">
        ${work.points.map((p) => `<li>${p}</li>`).join('')}
      </ul>
    </section>

    <section class="work-detail-section">
      <h2>制作プロセス</h2>
      <div class="process-list">
        ${work.process
          .map(
            (step) => `
          <div class="process-step">
            <div class="process-step-image">画像(準備中)</div>
            <div>
              <h3>${step.stage}</h3>
              <p>${step.note}</p>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </section>

    <p class="section-footer"><a href="works.html" class="button secondary">作品一覧に戻る</a></p>
  `;
}

renderWorkDetail();
