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
//Аккордион в футере
function accordionFooter(){
const sections = document.querySelectorAll(".footer-section");


    sections.forEach((section) => {
      const header = section.querySelector("h4");
      const content = section.querySelector("ul");

      header.style.cursor = "pointer";

      header.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        // Закрываем все
        document.querySelectorAll(".footer-section ul").forEach((ul) => {
          ul.style.height = "0px";
          ul.classList.remove("open");
        });

        // Если был закрыт — открыть
        if (!isOpen) {
          content.classList.add("open");
          const scrollHeight = content.scrollHeight;
          content.style.height = scrollHeight + "px";
        }
      });
    });
};
//аккордион в слайдере
function accordionPricePage(){
 // Находим все аккордеоны
  const accordions = document.querySelectorAll(".page-price-section-accordion");

  if (accordions.length === 0) {
    console.warn("No accordions found.");
    return;
  }

  accordions.forEach((accordion) => {
    const sectionPrice = accordion.querySelectorAll(".page-price-section-accordion-section");

    if (sectionPrice.length === 0) {
      console.warn("No sections found in accordion", accordion);
      return;
    }

    sectionPrice.forEach((section, sectionIndex) => {
      const header = section.querySelector(".page-price-section-accordion-section-name");
      const content = section.querySelector("ul");
      const svg = header.querySelector("svg");

      if (!header || !content || !svg) {
        console.warn("Missing header, content, or svg in section", section);
        return;
      }

      header.style.cursor = "pointer";

      // Открываем первую секцию в каждом аккордеоне
      if (sectionIndex === 0) {
        content.classList.add("open");
        content.style.height = content.scrollHeight + "px";
        svg.classList.add("rotated");
      }

      header.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        // Закрываем все секции в текущем аккордеоне
        sectionPrice.forEach((otherSection) => {
          const otherUl = otherSection.querySelector("ul");
          const otherSvg = otherSection.querySelector("svg");
          otherUl.style.height = "0px";
          otherUl.classList.remove("open");
          otherSvg.classList.remove("rotated");
        });

        // Если текущая секция была закрыта, открываем её
        if (!isOpen) {
          content.classList.add("open");
          content.style.height = content.scrollHeight + "px";
          svg.classList.add("rotated");
        }
      });
    });

    // Обновляем высоту открытых секций при изменении размера окна
    window.addEventListener("resize", () => {
      sectionPrice.forEach((section) => {
        const content = section.querySelector("ul");
        if (content.classList.contains("open")) {
          content.style.height = content.scrollHeight + "px";
        }
      });
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
initMobileMenu();
accordionFooter();
sliderFaq();
accordionPricePage();

}, false);
