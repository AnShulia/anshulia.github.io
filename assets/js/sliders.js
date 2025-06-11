//Слайдеры на страницах
//Ответы на вопросы
function sliderFaq(){
  const swiperFAQ = new Swiper('.mySwiperFAQ', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 20,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 20,
      slidesPerView: 4.3,
    },
    768: {
      slidesOffsetBefore: 20,
      slidesPerView: 4.3,
    },
    1220: {
      slidesOffsetBefore: 64,
      slidesPerView: 4.5,
    },
  },
    navigation: {
      nextEl: '.faq-slider-controls .swiper-button-next',
      prevEl: '.faq-slider-controls .swiper-button-prev',
    },
  });
}
//Секция видео
function sliderVideoSection() {
  const sliderEl = document.querySelector(".PageVideoSwiper");
  const progressFill = document.querySelector(".progress-fill");
  const progressBar = document.querySelector(".progress-bar");
  const customPagination = document.querySelector(".custom-pagination");

  // Проверка наличия всех нужных элементов
  if (!sliderEl || !progressFill || !progressBar || !customPagination) return;

  const swiper = new Swiper(sliderEl, {
    slidesPerView: 1.2,
    slidesOffsetBefore: 120,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesOffsetBefore: 23,
      },
      768: {
        slidesOffsetBefore: 120,
      },
    },
    pagination: {
      el: ".pagination-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        updateProgressBarPosition(this);
      },
      init: function () {
        updateProgressBarPosition(this);
      },
    },
  });

  // Прогресс-бар
  let progressInterval;
  let progress = 0;
  const delay = swiper.params.autoplay.delay;

  function startProgress() {
    clearInterval(progressInterval);
    progress = 0;
    progressFill.style.width = "0%";
    const stepTime = 50;
    const steps = delay / stepTime;
    progressInterval = setInterval(() => {
      progress += 100 / steps;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }
      progressFill.style.width = progress + "%";
    }, stepTime);
  }

  function updateProgressBarPosition(swiperInstance) {
    customPagination.classList.remove(
      "custom-pagination-default",
      "custom-pagination-end"
    );
    if (swiperInstance.isEnd) {
      customPagination.classList.add("custom-pagination-end");
    } else {
      customPagination.classList.add("custom-pagination-default");
    }
  }

  startProgress();

  swiper.on("slideChangeTransitionStart", () => {
    startProgress();
  });

  swiper.on("autoplayStop", () => {
    clearInterval(progressInterval);
  });

  window.addEventListener("resize", () => {
    updateProgressBarPosition(swiper);
  });
}     
//Секция базы
function sliderBaseSection(){
const baseSwiper = new Swiper('.base-swiper', {
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesOffsetBefore: 160, // для мобилок до 768px
      slidesPerView: 1.6,
    },
    768: {
      slidesOffsetBefore: 200, // начиная с 768px
      slidesPerView: 1.5,
    },
    1024:{
      slidesOffsetBefore: 300,
    },
    1440: {
      slidesOffsetBefore: 400,
    }
  },
  on: {
    slideChange: function () {
      const index = this.activeIndex;
      document.querySelectorAll('.toggle-button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
    }
  }
});

document.querySelectorAll('.toggle-button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    baseSwiper.slideTo(index);
  });
});

}
//Секция забронировать
function sliderZabronirovat() {
  const horizontalEl = document.querySelector('.book-slider-horizontal');
  const verticalEl = document.querySelector('.book-slider-vertical');
  const select = document.getElementById('route-select');
  const count = document.getElementById('people-count');
  const priceDisplay = document.getElementById('total-price');

  // Если ни одного нужного элемента нет — не инициализируем
  if (!horizontalEl && !verticalEl && !select && !count && !priceDisplay) return;

  if (horizontalEl) {
    new Swiper(horizontalEl, {
      slidesPerView: 1,
      watchOverflow: false,
      navigation: {
        nextEl: '.horizontal-slider .swiper-button-next',
        prevEl: '.horizontal-slider .swiper-button-prev',
      },
    });
  }

  if (verticalEl) {
    new Swiper(verticalEl, {
      direction: 'vertical',
      slidesPerView: 5,
      spaceBetween: 0,
      watchOverflow: false,
      navigation: {
        nextEl: '.vertical-slider .swiper-button-next',
        prevEl: '.vertical-slider .swiper-button-prev',
      },
      mousewheel: true,
    });
  }

  // Проверка и расчёт цены
  if (select && count && priceDisplay) {
    function updatePrice() {
      const base = parseInt(select.value);
      const people = parseInt(count.value);
      const total = base + people * 20;
      priceDisplay.textContent = total + ' BYN';
    }

    select.addEventListener('change', updatePrice);
    count.addEventListener('input', updatePrice);
    updatePrice(); // стартовое обновление
  }
}
//Секция места отдыха
function sliderMesta(){
new Swiper('.after-slider-vip', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1000: {
      slidesPerView: 2,
    },
    1220: {
      slidesOffsetBefore: 120,
      slidesPerView: 3.2,
    },
  },
    navigation: {
      nextEl: '.after-slider-vip .swiper-button-next',
      prevEl: '.after-slider-vip .swiper-button-prev',
    },
  });
  new Swiper('.after-slider-bannyy-kompleks', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1000: {
      slidesOffsetBefore: 120,
      slidesPerView: 2,
    },
    1220: {
      slidesOffsetBefore: 120,
      slidesPerView: 3.2,
    },
  },
    navigation: {
      nextEl: '.after-slider-bannyy-kompleks .swiper-button-next',
      prevEl: '.after-slider-bannyy-kompleks .swiper-button-prev',
    },
  });
  new Swiper('.after-slider-shater', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1000: {
      slidesOffsetBefore: 120,
      slidesPerView: 2,
    },
    1220: {
      slidesOffsetBefore: 120,
      slidesPerView: 3.2,
    },
  },
    navigation: {
      nextEl: '.after-slider-shater .swiper-button-next',
      prevEl: '.after-slider-shater .swiper-button-prev',
    },
    
  });
  new Swiper('.after-slider-besedki', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1000: {
      slidesOffsetBefore: 120,
      slidesPerView: 2,
    },
    1220: {
      slidesOffsetBefore: 120,
      slidesPerView: 3.2,
    },
  },
    navigation: {
      nextEl: '.after-slider-besedki .swiper-button-next',
      prevEl: '.after-slider-besedki .swiper-button-prev',
    },
    
  });
}
//Секция попробывать после
function sliderAfterTry(){
const pageAfterTryWrapperSwiper = new Swiper('.after-try-swiper', {
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1220: {
      slidesPerView: 3,
    },
    1640: {
      slidesOffsetBefore: 220,
      slidesPerView: 3,
    },
  },
    navigation: {
      nextEl: '.page-after-try-buttons .swiper-button-next',
      prevEl: '.page-after-try-buttons .swiper-button-prev',
    },

  });
}
function sliderDopGame(){
  const bookSwiper = new Swiper('.book-slider', {
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 2,
    },
    1220: {
      slidesPerView: 3,
    },
    1640: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.book-button-next',
    prevEl: '.book-button-prev'
  },
});
}

function sliderInteres(){
const swiper = new Swiper('.page-interest-slider', {
  slidesPerView: 4.5,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1220: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 4.5,
    },
  },
  navigation: {
    nextEl: '.page-interest-slider .swiper-button-next',
    prevEl: '.page-interest-slider .swiper-button-prev',
  },
});

// Логика переключения иконок
const addToCartBtn = document.querySelector('.add-to-cart-icon');

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function () {
    const plus = this.querySelector('.icon-plus');
    const check = this.querySelector('.icon-check');

    const added = this.dataset.added === "true";

    if (!added) {
      if (plus) plus.style.display = 'none';
      if (check) check.style.display = 'block';
      this.dataset.added = "true";
      console.log('Товар добавлен в корзину');
    } else {
      if (plus) plus.style.display = 'block';
      if (check) check.style.display = 'none';
      this.dataset.added = "false";
      console.log('Товар удалён из корзины');
    }
  });
}
}
//Секция сценарии
function sliderScenarii(){
     const ekipirovkaSlider = new Swiper('.ekipirovka-slider', {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    480: {
      slidesOffsetBefore: 104,
      slidesPerView: 1.4,
    },
    768: {
      slidesOffsetBefore: 50,
      slidesPerView: 1.4,
    },
    1000: {
      slidesPerView: 2,
    },
    1220: {
      slidesOffsetBefore: 120,
      slidesPerView: 3.2,
    },
  },
    navigation: {
      nextEl: '.ekipirovka-slider .swiper-button-next',
      prevEl: '.ekipirovka-slider .swiper-button-prev',
    },
  });
}
//Секция ДопЭкипировка
function sliderEkipirovkaDopPay(){
 const dopOborSlider = new Swiper('.page-dop-obor-slider', {
spaceBetween: 20,
breakpoints: {
320: {
  slidesOffsetBefore: 0,
  slidesPerView: 1,
},
480: {
  slidesOffsetBefore: 104,
  slidesPerView: 1.4,
},
768: {
  slidesOffsetBefore: 50,
  slidesPerView: 1.4,
},
1000: {
  slidesPerView: 2,
},
1366: {
  slidesOffsetBefore: 120,
  slidesPerView: 2,
},
1370: {
  slidesOffsetBefore: 120,
  slidesPerView: 3,
},
},
  navigation: {
    nextEl: '.page-dop-obor-slider .swiper-button-next',
    prevEl: '.page-dop-obor-slider .swiper-button-prev',
  },
});
}
//Секция function slider(){}
function sliderMainNews(){
  const swiperNEWS = new Swiper('.mySwiperNEWS', {
    spaceBetween: 20,
    breakpoints: {
        320: {
          slidesOffsetBefore: 104,
          slidesPerView: 1.5,
        },
        768: { 
          slidesOffsetBefore: 104,
          slidesPerView: 1.5,
        },
        1220: {
          slidesOffsetBefore: 220,
          slidesPerView: 3,
        },
      },
    navigation: {
      nextEl: '.swiper-button-next-news',
      prevEl: '.swiper-button-prev-news',
    },
  });
}
//Main Квест
function sliderMainKvest(){
         
     const kvestThumbSwiper = new Swiper('.kvest-thumb-swiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {slidesPerView: 2.5},
    1024: { slidesPerView: 4.5 }
  }
});

const kvestMainSwiper = new Swiper('.kvest-main-swiper', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.kvest-next',
    prevEl: '.kvest-prev'
  },
  thumbs: {
    swiper: kvestThumbSwiper
  }
});

kvestMainSwiper.on('slideChange', () => {
  const realIndex = kvestMainSwiper.realIndex;
  kvestThumbSwiper.slideTo(realIndex);
});
}
//Main Активности
function sliderMainAktivnosti(){
    const swiperActivnosti = new Swiper('.mySwiperActivnosti', {
     
      breakpoints: {
          320: {slidesPerView: 1.2},
          1024: { slidesPerView: 1.5, }
      },
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.mySwiperActivnosti .swiper-button-next',
        prevEl: '.mySwiperActivnosti .swiper-button-prev',
      },
    });

    document.querySelector('.extra-next').addEventListener('click', () => swiperActivnosti.slideNext());
    document.querySelector('.extra-prev').addEventListener('click', () => swiperActivnosti.slidePrev());
}
//Страница цены
//Слайдер
function sliderPagePrice() {
  // === Color slider ===
document.querySelectorAll('.color-slider').forEach((slider, index) => {
  new Swiper(slider, {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true,
      renderBullet: function (i, className) {
        const colors = ['#FF5E5E', '#5EAEFF', '#5EFFA1', '#FFA95E'];
        return `<span class="${className}" style="background-color: ${colors[i % colors.length]}"></span>`;
      }
    }
  });
});

// === Quest toggle logic ===
document.querySelectorAll(".quest-box").forEach((questBox) => {
  const questListWrapper = questBox.querySelector(".quest-list-wrapper");
  const questList = questBox.querySelector(".quest-list");
  const toggleBtn = questBox.querySelector(".toggle-btn");

  if (!questListWrapper || !questList || !toggleBtn) return;

  const checkOverflow = () => {
    if (questList.scrollHeight > questListWrapper.clientHeight) {
      toggleBtn.style.visibility = "visible";
    } else {
      toggleBtn.style.visibility = "hidden";
    }
  };

  checkOverflow();
  window.addEventListener("resize", checkOverflow);

  toggleBtn.addEventListener("click", () => {
    questBox.classList.toggle("expanded");
    toggleBtn.textContent = questBox.classList.contains("expanded")
      ? "Скрыть ⤒"
      : "смотреть все квесты ⤋";
  });
});

// === Tooltip behavior ===
document.querySelectorAll('.tooltip').forEach((tooltip) => {
  tooltip.addEventListener('click', (e) => {
    const tooltipText = tooltip.querySelector('.tooltip-text');
    if (!tooltipText) return;

    // Скрыть все остальные
    document.querySelectorAll('.tooltip-text.visible').forEach(t => {
      if (t !== tooltipText) t.classList.remove('visible');
    });

    // Показать/скрыть текущий
    tooltipText.classList.toggle('visible');
    e.stopPropagation();
  });
});

// Скрыть все тултипы при клике вне
document.addEventListener('click', () => {
  document.querySelectorAll('.tooltip-text.visible').forEach(t => t.classList.remove('visible'));
});

// === Скрыть пустые элементы .quest-box-info ===
document.querySelectorAll(".quest-box-info").forEach((el) => {
  if (!el.textContent.trim()) {
    el.style.visibility = "hidden";
  }
});

//Слайдер комплекс
document.querySelectorAll('.sliderComplexPrice').forEach((sliderEl) => {
  new Swiper(sliderEl, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: sliderEl.querySelector('.swiper-button-next'),
      prevEl: sliderEl.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: sliderEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3.2,
      },
      480: {
        slidesOffsetBefore: 104,
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });
});


}



document.addEventListener('DOMContentLoaded', function() {
  //main
sliderFaq();
sliderMainNews();
sliderMainKvest();
sliderMainAktivnosti();
//
sliderVideoSection();
sliderBaseSection();
sliderZabronirovat();
sliderMesta();
sliderAfterTry();
sliderDopGame();
sliderInteres();
sliderScenarii();
sliderEkipirovkaDopPay();
//Страница цены
sliderPagePrice();

}, false);