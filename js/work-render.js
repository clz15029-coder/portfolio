function renderWorkThumbHTML(work, extraClass = '') {
  if (work.images && work.images.length) {
    return `<div class="work-thumb ${extraClass}"><img src="${work.images[0]}" alt="${work.title}" loading="lazy"></div>`;
  }
  if (work.thumbText) {
    return `<div class="work-thumb ${extraClass}"><span class="work-thumb-text">${work.thumbText}</span><span class="work-thumb-dot" aria-hidden="true"></span></div>`;
  }
  return `<div class="work-thumb ${extraClass}">作品画像(準備中)</div>`;
}

function renderWorkCardHTML(work) {
  return `
    ${renderWorkThumbHTML(work)}
    <h3>${work.title}</h3>
    ${work.lead ? `<p class="work-desc">${work.lead}</p>` : ''}
    <div class="work-card-meta">
      <div class="work-tags">
        ${work.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
      </div>
      ${work.period ? `<span class="work-period">${work.period}</span>` : ''}
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
      : renderWorkThumbHTML(work, 'work-detail-thumb');

  const bodyParagraphs = [];
  if (work.lead) bodyParagraphs.push(work.lead);
  if (work.summary && work.summary !== work.lead) bodyParagraphs.push(work.summary);
  (work.points || []).forEach((p) => bodyParagraphs.push(p));

  const metaRows = [
    ['Client', work.client],
    ['Scope', work.role],
    ['Year', extractYearLabel(work.period || '')]
  ].filter(([, value]) => value);

  return `
    <p class="page-eyebrow">WORKS 詳細</p>
    <h1>${work.title}</h1>
    <div class="work-tags work-detail-tags">
      ${work.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
      <span class="work-tag">${work.personal ? 'Personal' : 'Clientwork'}</span>
    </div>

    ${galleryHTML}

    <div class="work-detail-section">
      ${bodyParagraphs.map((p) => `<p>${p}</p>`).join('')}
    </div>

    ${
      work.imagesBelow && work.imagesBelow.length
        ? `<div class="work-gallery-below">${work.imagesBelow
            .map((src) => `<img src="${src}" alt="${work.title}" loading="lazy">`)
            .join('')}</div>`
        : ''
    }

    ${
      metaRows.length
        ? `<dl class="work-meta-list">
      ${metaRows
        .map(
          ([label, value]) => `<div>
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>`
        )
        .join('')}
    </dl>`
        : ''
    }

    ${
      work.url
        ? `<p class="work-detail-link">${linkIcon}<a href="${work.url}" target="_blank" rel="noopener">${work.url}</a></p>`
        : ''
    }

    ${showBackLink ? '<p class="section-footer"><a href="works.html" class="button secondary">作品一覧に戻る</a></p>' : ''}
  `;
}
