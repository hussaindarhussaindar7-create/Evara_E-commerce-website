/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Menu =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImgs = document.querySelectorAll('.details__small-img');

  if (mainImg && smallImgs.length > 0) {
    smallImgs.forEach((img) => {
      img.addEventListener('click', function () {
        mainImg.src = this.src;
        smallImgs.forEach((i) => i.classList.remove('active-small-img'));
        this.classList.add('active-small-img');
      });
    });
  }
}
imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
if (document.querySelector('.categories__container')) {
  var swiperCategories = new Swiper('.categories__container', {
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.categories .swiper-button-next',
      prevEl: '.categories .swiper-button-prev',
    },
    // Swiper 12 ke apne SVG arrows inject hone se rokein
    navigationSvg: false,
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });
}

/*=============== SWIPER PRODUCTS ===============*/
if (document.querySelector('.new__container')) {
  var swiperProducts = new Swiper('.new__container', {
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.new__arrivals .swiper-button-next',
      prevEl: '.new__arrivals .swiper-button-prev',
    },
    // Swiper 12 ke apne SVG arrows inject hone se rokein
    navigationSvg: false,
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    if (target) {
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab');
      });
      target.classList.add('active-tab');

      tabs.forEach((t) => {
        t.classList.remove('active-tab');
      });
      tab.classList.add('active-tab');
    }
  });
});

/*=============== DETAILS TABS ===============*/
const detailTabs = document.querySelectorAll('[data-detail-target]'),
  detailTabContents = document.querySelectorAll('[data-detail-content]');

detailTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.detailTarget);
    if (target) {
      detailTabContents.forEach((content) => {
        content.classList.remove('active-tab');
      });
      detailTabs.forEach((t) => {
        t.classList.remove('active-tab');
      });
      target.classList.add('active-tab');
      tab.classList.add('active-tab');
    }
  });
});

/*=============== ACCOUNT TABS ===============*/
const accountTabs = document.querySelectorAll('[data-account-target]'),
  accountTabContents = document.querySelectorAll('[data-account-content]');

accountTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.accountTarget);
    if (target) {
      accountTabContents.forEach((content) => {
        content.classList.remove('active-tab');
      });
      accountTabs.forEach((t) => {
        t.classList.remove('active-tab');
      });
      target.classList.add('active-tab');
      tab.classList.add('active-tab');
    }
  });
});

/*=============== QUANTITY SELECTOR ===============*/
document.addEventListener('click', (e) => {
  const minusBtn = e.target.closest('.quantity__minus');
  const plusBtn = e.target.closest('.quantity__plus');

  if (minusBtn) {
    const qtyBox = minusBtn.closest('.quantity');
    const input = qtyBox.querySelector('.quantity__input');
    if (input) {
      let val = parseInt(input.value) || 1;
      if (val > 1) {
        input.value = val - 1;
      }
    }
  }

  if (plusBtn) {
    const qtyBox = plusBtn.closest('.quantity');
    const input = qtyBox.querySelector('.quantity__input');
    if (input) {
      let val = parseInt(input.value) || 1;
      input.value = val + 1;
    }
  }
});
