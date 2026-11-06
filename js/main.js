const menuToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach((link) => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage || (currentPage === 'work-detail.html' && linkPage === 'works.html')) {
    link.classList.add('current');
  }
});

const detailModal = document.querySelector('[data-modal-panel]');
const detailModalBackdrop = document.querySelector('[data-modal-backdrop]');
const detailModalBody = document.querySelector('[data-modal-body]');
const detailModalCloseBtn = document.querySelector('[data-modal-close]');

function openDetailModal(html) {
  if (!detailModal || !detailModalBackdrop || !detailModalBody) return;
  detailModalBody.innerHTML = html;
  detailModal.classList.add('is-open');
  detailModalBackdrop.classList.add('is-open');
  document.body.classList.add('modal-open');
  detailModal.scrollTop = 0;
}

function closeDetailModal() {
  if (!detailModal || !detailModalBackdrop) return;
  detailModal.classList.remove('is-open');
  detailModalBackdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

function handleModalDismiss() {
  closeDetailModal();
  if (typeof window.onDetailModalClose === 'function') {
    window.onDetailModalClose();
  }
}

if (detailModal && detailModalBackdrop) {
  detailModalBackdrop.addEventListener('click', handleModalDismiss);
  detailModalCloseBtn?.addEventListener('click', handleModalDismiss);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailModal.classList.contains('is-open')) {
      handleModalDismiss();
    }
  });
}

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // 今年の誕生日がまだ来ていない場合は1歳引く
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// 2000年9月7日生まれの年齢を計算して表示
document.addEventListener('DOMContentLoaded', () => {
  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = calculateAge('2000-09-07');
  }
});
