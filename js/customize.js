// -----  基本功能開關   ---------------------------------------------------
window.addEventListener('load', () => {
  topNav(); // 手機版顯示nav選單
  navSticky(); // 捲動時固定主選單
  xSlider('.language button', '.language ul'); //語系
  // fontSize(); // 全站字體
  fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  webSearch();

  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    spaceBetween: 20,
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });

  //lp
  function accordionFunctions(obj) {
    'use strict';
    const accordion = document.querySelector(obj.accordion);
    const accordionItem = accordion ? accordion.querySelectorAll('.accordionList') : '';
    const autoClose = obj.autoClose;
    const duration = obj.duration;
    const openFirst = obj.openFirst;
    const { open, close } = obj.info;

    function a11y() {
      if (Boolean(accordionItem)) {
        accordionItem.forEach((item, index) => {
          if (item.nextElementSibling === null) {
            return;
          }
          let content = item.nextElementSibling.querySelectorAll('a,input,select,textarea');

          let firstItem = false;

          if (!openFirst) {
            item.addEventListener('keydown', function (e) {
              if (e.which === 9 && !e.shiftKey) {
                autoClose && !openFirst ? closeOther(this) : '';
                openTarget(this);
                firstItem = false;
              } else if (e.which === 9 && e.shiftKey && !firstItem) {
                e.preventDefault();
                openTarget(this);
                autoClose && !openFirst ? closeOther(this) : '';

                if (content.length == 0) {
                  accordionItem[index - 1].focus();
                } else if (content.length > 0) {
                  content[content.length - 1].focus();
                }
              }
            });
            if (content.length !== 0) {
              content[0].addEventListener('keydown', function (e) {
                if (e.which === 9 && e.shiftKey && index !== 0) {
                  e.preventDefault();
                  accordionItem[index - 1].focus();
                } else if (e.which === 9 && e.shiftKey && index == 0) {
                  firstItem = true;
                  autoClose && !openFirst ? openTarget(accordionItem[0]) : '';
                }
              });
            }
          }
        });
      }
    }
    function info() {
      if (Boolean(accordionItem)) {
        accordionItem.forEach((item, index) => {
          let random = `accordion_${randomLetter(4)}${randomFloor(0, 9999)}`;
          item.innerHTML += `<span class="accordionState">${open}</span>`;
          item.innerHTML += `<span class="accordionArrow"></span>`;
          item.setAttribute('aria-expanded', 'false');
          item.setAttribute('aria-controls', random);
          if (item.parentElement.querySelector('.accordionContent') === null) {
            hideArrow(item);
            return;
          }
          item.parentElement.querySelector('.accordionContent').setAttribute('id', random);
          if (openFirst) {
            item.nextElementSibling.style.display = `block`;
          }
        });
      }
    }
    function clickFunction() {
      if (Boolean(accordionItem)) {
        accordionItem.forEach((item, index) => {
          item.addEventListener('click', function () {
            autoClose && !openFirst ? closeOther(this) : '';
            openTarget(this);
          });
        });
      }
    }
    function hideArrow(item) {
      let arrow = item.querySelector('.accordionArrow');
      arrow.classList.add('noItem');
    }
    function openTarget(item) {
      let content = item.nextElementSibling;
      if (content === null) {
        return;
      }
      let display = window.getComputedStyle(content).display;
      content.style.display = display;

      if (display === 'none') {
        display = 'block';
        item.parentNode.classList.add('active');
        item.setAttribute('aria-expanded', 'true');
        content.style.display = 'block';
        let contentHeight = content.scrollHeight;
        content.style.height = '0';
        content.style.transitionProperty = 'height';
        content.style.transitionDuration = `${duration}ms`;
        content.scrollHeight;
        item.querySelector('.accordionState').innerHTML = `${close}`;
        content.style.height = `${contentHeight}px`;
        setTimeout(() => {
          content.style.removeProperty('height');
          content.style.removeProperty('transition-duration');
          content.style.removeProperty('transition-property');
        }, duration);
      } else {
        let contentHeight = content.scrollHeight;
        content.style.height = `${contentHeight}px`;
        content.style.transitionProperty = 'height';
        content.style.transitionDuration = `${duration}ms`;
        content.scrollHeight;
        content.style.height = '0';
        item.querySelector('.accordionState').innerHTML = `${open}`;
        item.parentNode.classList.remove('active');
        item.setAttribute('aria-expanded', 'false');
        setTimeout(() => {
          content.style.removeProperty('height');
          content.style.removeProperty('display');
          content.style.removeProperty('transition-duration');
          content.style.removeProperty('transition-property');
        }, duration);
      }
    }
    function closeOther(item) {
      const siblings = [...item.parentNode.parentNode.children].filter((child) => {
        return child !== item.parentNode;
      });
      siblings.forEach((otherItem, index) => {
        let content = otherItem.querySelector('.accordionContent');
        if (content === null) {
          return;
        }
        if (content.style.Height !== 0 || content.style.Height !== null) {
          otherItem.querySelector('.accordionState').innerHTML = `${open}`;
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordionList').setAttribute('aria-expanded', 'false');
          let contentHeight = content.scrollHeight;
          content.style.height = `${contentHeight}px`;
          content.style.transitionProperty = 'height';
          content.style.transitionDuration = `${duration}ms`;
          content.scrollHeight;
          content.style.height = '0';
          setTimeout(() => {
            content.style.removeProperty('height');
            content.style.removeProperty('display');
            content.style.removeProperty('transition-duration');
            content.style.removeProperty('transition-property');
          }, duration);
        }
      });
    }
    (function () {
      clickFunction();
      a11y();
      info();
    })();
  }
  accordionFunctions({
    accordion: '.questionAccordion .accordion',
    openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
    autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
    duration: 200,
    index: 0, // 預設開啟第幾個
    info: {
      open: '', // 收合時顯示
      close: '', // 展開時顯示
    },
  });
})();
