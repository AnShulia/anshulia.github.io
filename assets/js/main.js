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

      if (sectionIndex === 0) {
  content.classList.add("open");
  setTimeout(() => {
    content.style.height = content.scrollHeight + "px";
  }, 0);
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
/*
function openaAnswer(){
  const faqButtons = document.querySelectorAll('.faq-slide-button');

    faqButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const slide = button.closest('.faq-slide');
        
        // Закрыть другие ответы
        document.querySelectorAll('.faq-slide').forEach(s => {
          console.log(s)
          if (s !== slide) {
            s.classList.remove('open');
          }
        });
      // Переключить текущий
        slide.classList.toggle('open');
        
      });
    });
}
*/
//Открытие вопрос-ответ
function openaAnswer() {
  const faqButtons = document.querySelectorAll('.faq-slide-button');

  faqButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const slide = button.closest('.faq-slide');
      const isOpen = slide.classList.contains('open');

      // Закрываем все слайды
      document.querySelectorAll('.faq-slide').forEach(s => s.classList.remove('open'));

      // Если слайд не был открыт — открываем его с задержкой
      if (!isOpen) {
        setTimeout(() => {
          slide.classList.add('open');
        }, 50); // 50 мс — достаточно для восприятия, но можно и 100 мс
      }
    });
  });
}
//Общий поп-ап
function openGeneralPopUp(){
//Открытие видео поп-ап
function openModal(contentHtml) {
  const modal = document.getElementById('global-modal');
  const body = modal.querySelector('.modal-body');

  body.innerHTML = contentHtml;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('global-modal');
  const body = modal.querySelector('.modal-body');

  modal.style.display = 'none';
  document.body.style.overflow = '';

  // ❗ ВАЖНО: Удаляем контент, чтобы iframe выгрузился
  body.innerHTML = '';
}

// Закрытие
document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeModal);
});

// Универсальный обработчик
document.querySelectorAll('[data-modal-type]').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const type = button.getAttribute('data-modal-type');
    const content = button.getAttribute('data-modal-content');
    let html = '';

    function extractYouTubeId(url) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

    switch (type) {
  case 'video':
    html = `<video controls autoplay src="${content}"></video>`;
    break;

  case 'image':
    html = `<img src="${content}" alt="" style="max-width:100%">`;
    break;

  case 'text':
    const source = document.querySelector(content);
    if (source) html = source.innerHTML;
    break;

  case 'youtube':
    // Получим ID видео из обычной ссылки
    const youtubeId = extractYouTubeId(content);
    if (youtubeId) {
      html = `
        <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
          <iframe
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0"
            style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>`;
    }
    break;

  default:
    html = '<p>Неизвестный тип контента.</p>';
}

    openModal(html);
  });
});
}
//Открытие 
function openPromoDetails(){
// Один общий тултип
const tooltipBox = document.createElement('div');
tooltipBox.className = 'tooltip-box';
document.body.appendChild(tooltipBox);

let activeTrigger = null;

document.addEventListener('click', e => {
  const trigger = e.target.closest('.tooltip-trigger');

  if (trigger) {
    e.preventDefault();

    const tooltipId = trigger.getAttribute('data-tooltip-id');
    const tooltipContentBlock = document.getElementById(tooltipId);

    if (!tooltipContentBlock) return;

    // Повторный клик — закрытие
    if (trigger === activeTrigger) {
      tooltipBox.classList.remove('visible');
      activeTrigger = null;
      return;
    }

    // Установить HTML
    tooltipBox.innerHTML = tooltipContentBlock.innerHTML;

    // Позиционировать
    const rect = trigger.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // Сначала показываем, чтобы получить размеры
    tooltipBox.style.visibility = 'hidden';
    tooltipBox.classList.add('visible');

    requestAnimationFrame(() => {
      const boxRect = tooltipBox.getBoundingClientRect();
      let top = rect.top + scrollY - boxRect.height - 10;
      let left = rect.left + scrollX;

      // Если не помещается сверху — показываем снизу
      if (top < scrollY) {
        top = rect.bottom + scrollY + 10;
      }

      tooltipBox.style.top = `${top}px`;
      tooltipBox.style.left = `${left}px`;
      tooltipBox.style.visibility = 'visible';

      activeTrigger = trigger;
    });

  } else {
    // Клик вне — скрыть
    tooltipBox.classList.remove('visible');
    activeTrigger = null;
  }
});
}
//Попытка поддержки свг в фаерфокс
function svgfetch(){
  fetch('/assets/icons.svg')
    .then(res => res.text())
    .then(data => {
      const div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = data;
      document.body.insertBefore(div, document.body.firstChild);
    });
}



document.addEventListener('DOMContentLoaded', function() {
initMobileMenu();
accordionFooter();
openaAnswer();
openGeneralPopUp();
openPromoDetails();
svgfetch();

}, false);
window.addEventListener('load', () => {
  accordionPricePage();
});