function renderWorkCardHTML(work) {
  const thumbHTML =
    work.images && work.images.length
      ? `<img src="${work.images[0]}" alt="${work.title}" loading="lazy">`
      : '作品画像(準備中)';

  return `
    <div class="work-thumb">${thumbHTML}</div>
    <h3>${work.title}</h3>
    <div class="work-card-meta">
      <div class="work-tags">
        ${work.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
      </div>
      <span class="work-period">${work.period}</span>
    </div>
  `;
}

function extractYearLabel(period) {
  const years = [...new Set((period.match(/\d{4}/g) || []))];
  return years.length ? years.join('-') : period;
}

function renderWorkDetailHTML(work, { showBackLink = false } = {}) {
  const linkIcon =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

  const images = work.images || [];
  const galleryHTML =
    images.length > 1
      ? `<div class="work-gallery">${images
          .map((src) => `<img src="${src}" alt="${work.title}" loading="lazy">`)
          .join('')}</div>`
      : `<div class="work-thumb work-detail-thumb">${
          images.length === 1
            ? `<img src="${images[0]}" alt="${work.title}" loading="lazy">`
            : '作品画像(準備中)'
        }</div>`;

  return `
    <p class="page-eyebrow">WORKS 詳細</p>
    <h1>${work.title}</h1>
    <div class="work-tags work-detail-tags">
      ${work.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
      <span class="work-tag">Clientwork</span>
    </div>

    ${galleryHTML}

    <div class="work-detail-section">
      <p>${work.summary}</p>
      ${work.points.map((p) => `<p>${p}</p>`).join('')}
    </div>

    <dl class="work-meta-list">
      <div>
        <dt>Client</dt>
        <dd>${work.client}</dd>
      </div>
      <div>
        <dt>Scope</dt>
        <dd>${work.role}</dd>
      </div>
      <div>
        <dt>Year</dt>
        <dd>${extractYearLabel(work.period)}</dd>
      </div>
    </dl>

    ${
      work.url
        ? `<p class="work-detail-link">${linkIcon}<a href="${work.url}" target="_blank" rel="noopener">${work.url}</a></p>`
        : ''
    }

    ${showBackLink ? '<p class="section-footer"><a href="works.html" class="button secondary">作品一覧に戻る</a></p>' : ''}
  `;
}
