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
