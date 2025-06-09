// Бургер-меню и подменю
function initMobileMenu() {
  const header = document.querySelector('header');
  const hamburger = header.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const isActive = this.classList.contains('active');
    body.classList.toggle('no-scroll', isActive);

    document.querySelectorAll('.submenu-panel-mobile').forEach(panel => {
      panel.classList.remove('active');
    });
  });

  header.querySelectorAll('.mobile-menu-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const submenuId = this.getAttribute('data-submenu');

      document.querySelectorAll('.submenu-panel-mobile').forEach(panel => {
        panel.classList.remove('active');
      });

      const targetPanel = document.querySelector(`#${submenuId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        mobileMenu.classList.remove('active');
        hamburger.classList.add('active');
        body.classList.add('no-scroll');
      }
    });
  });

  header.querySelectorAll('.submenu-panel-back').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.submenu-panel-mobile').forEach(panel => {
        panel.classList.remove('active');
      });
      mobileMenu.classList.add('active');
      body.classList.add('no-scroll');
    });
  });

  header.querySelectorAll('.submenu-panel-close').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.submenu-panel-mobile').forEach(panel => {
        panel.classList.remove('active');
      });
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
initMobileMenu();

}, false);
