const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('is-open');
    const expanded = siteNav.classList.contains('is-open');
    menuToggle.setAttribute('aria-expanded', expanded.toString());
  });
}
