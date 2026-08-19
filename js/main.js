const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

function closeSidebar() {
  if (!sidebar || !sidebarOverlay || !menuToggle) return;
  sidebar.classList.remove('is-open');
  sidebarOverlay.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function openSidebar() {
  if (!sidebar || !sidebarOverlay || !menuToggle) return;
  sidebar.classList.add('is-open');
  sidebarOverlay.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

if (menuToggle && sidebar && sidebarOverlay) {
  menuToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('is-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
  sidebarOverlay.addEventListener('click', closeSidebar);
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sidebar-nav a').forEach((link) => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('is-current');
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
