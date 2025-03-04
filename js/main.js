// -----------------------------------------------------------------------
// -----  nojs 先移除  ----------------------------------------------------
// -----------------------------------------------------------------------

const windowWidthSmall = 768;
const _webHtml = document.documentElement;
_webHtml.classList.remove('no-js');

// -----------------------------------------------------------------------
// -----  共用效果  -------------------------------------------------------
// -----------------------------------------------------------------------

function jsSlideUp(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display !== 'none') {
    let totalHeight = element.offsetHeight;
    element.style.overflow = 'hidden';

    element.style.height = `${totalHeight}px`;
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideUp(a);
// })

function jsSlideDown(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    element.style.overflow = 'hidden';
    let totalHeight = element.offsetHeight;
    element.style.height = '0px';
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `${totalHeight}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideDown(a);
// })

function jsSlideToggle(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    let totalHeight = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = '0px';
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `${totalHeight}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    let totalHeight2 = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = `${totalHeight2}px`;
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideToggle(a);
// })

function jsSlideToggleWidth(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    let totalWidth = element.offsetWidth;
    element.style.overflow = 'hidden';
    element.style.width = '0px';
    element.style.transitionProperty = 'width';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.width = `${totalWidth}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('width');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    let totalWidth2 = element.offsetWidth;
    element.style.overflow = 'hidden';
    element.style.width = `${totalWidth2}px`;
    element.style.transitionProperty = 'width';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.width = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('width');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideToggleWidth(a);
// })

function jsFadeIn(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display === 'none') {
    display = 'block';
    let opacity = 0;
    element.style.display = display;
    element.style.opacity = 0;

    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `1`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'block';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeIn(a);
// })

function jsFadeOut(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display !== 'none') {
    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `0`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeOut(a);
// })

function jsFadeToggle(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display === 'none') {
    display = 'block';
    let opacity = 0;
    element.style.display = display;
    element.style.opacity = 0;

    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `1`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'block';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `0`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeToggle(a);
// })

function xSlider(elem, con) {
  const targetSelect = document.querySelectorAll(elem);
  targetSelect.forEach((i) => {
    const targetSelectCon = i.parentNode.querySelector(con);
    if (i) {
      i.addEventListener('click', (e) => {
        if (targetSelectCon) {
          jsSlideToggle(targetSelectCon);
        }
      });

      i.addEventListener('keydown', (e) => {
        if (e.which === 9 && !e.shiftKey) {
          //tab
          let target = targetSelectCon.querySelectorAll('a, button');
          if (targetSelectCon) {
            jsSlideToggle(targetSelectCon);
            [...target][target.length - 1].addEventListener('focusout', function (e) {
              jsSlideUp(targetSelectCon);
            });
          }
        } else if (e.which === 9 && e.shiftKey) {
          //tab+shift
        } else if (e.which === 27) {
          jsSlideUp(targetSelectCon);
        }
      });
    }
  });

  // clickOtherPlace;
  window.addEventListener('click', (e) => {
    targetSelect.forEach((i) => {
      const targetSelectCon = i.parentNode.querySelector(con);
      if (e.target !== i) {
        jsSlideUp(targetSelectCon);
      }
    });
  });
}
// 使用方式
// xSlider('.target','.con');

function jsParents(element, elementCheck) {
  //大小寫轉換
  const elementParentsCheck = elementCheck?.toLowerCase() || null;
  const checkType = elementCheck ? elementCheck[0] : null;
  const result = new Set();

  const matched = [];
  const elementArr = typeof element === 'string' ? document.querySelectorAll(element) : element;
  //
  const getParents = (s) => {
    let current = s;
    while (current.parentNode && current.parentNode !== document.documentElement) {
      matched.push(current.parentNode);
      current = current.parentNode;
    }
  };
  elementArr.length > 0 ? elementArr.forEach((s) => getParents(s)) : getParents(element);
  //
  const check = matched.filter((i) => {
    let sortCheck = null;
    if (elementCheck || typeof element === 'string') {
      if (elementCheck[0] === '#') {
        return (sortCheck = i.id === elementCheck.slice(1));
      } else if (elementCheck[0] === '.') {
        return (sortCheck = i.classList.contains(elementCheck.slice(1)));
      }
    }

    //
    return i.localName === elementParentsCheck || sortCheck || elementParentsCheck === null ? i : null;
  });

  check.forEach((item) => (result.has(item) ? null : result.add(item)));
  return [...result].reverse();
}
// 使用方式
// 第一個參數可使用'.target','#target',變數，第二個參數可使用'ul','.out','#out'
// let target = document.querySelector('.target');
// jsParents(target) 變數方式
// jsParents('.target/#target'); 抓取'.target/#target'所有父層
// jsParents('.target/#target','ul'); 抓取'.target/#target'所有tag為ul的父層
// jsParents('.target/#target','.out'); 抓取'.target/#target'所有class為out的父層
// jsParents('.target/#target','#out'); 抓取'.target/#target'所有id為out的父層
// 操作父層
// jsParents('.target/#target').forEach((i) => {});

function jsChildren(element, elementCheck) {
  const elementChildrenCheck = elementCheck?.toLowerCase() || null;
  const elementArr = typeof element === 'string' ? document.querySelectorAll(element) : element;
  const checkType = elementCheck ? elementCheck[0] : null;

  const getChildren = (i) => {
    const children = [...i.childNodes].filter((i, index) => {
      if (i.nodeName !== '#text') {
        let sortCheck = null;
        if (elementCheck || typeof element === 'string') {
          if (elementCheck[0] === '#') {
            sortCheck = childNode.id === elementCheck.slice(1);
          } else if (elementCheck[0] === '.') {
            sortCheck = childNode.classList.contains(elementCheck.slice(1));
          } else {
            sortCheck = i.localName === elementCheck;
          }
        } else {
          sortCheck = true;
        }
        return sortCheck;
      }
    });
    return children;
  };
  const ans = elementArr.length > 0 ? [...elementArr]?.map((i) => getChildren(i)) : getChildren(element);
  return ans.flat();
}
// 使用方式
// 第一個參數可使用'.target','#target',變數，第二個參數可使用'ul','.out','#out'
// let target = document.querySelector('.target');
// jsChildren(target) 變數方式
// jsChildren('.target/#target'); 抓取target所有父層
// jsChildren('.target/#target','ul'); 抓取target下一層所有tag為ul的子層
// jsChildren('.target/#target','.out'); 抓取target下一層所有class為out的子層
// jsChildren('.target/#target','#out'); 抓取target下一層所有id為out的子層
// 操作子層
// jsChildren('.target/#target').forEach((i) => {});

// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 亂數英文字
function randomLetter(max) {
  let text = '';
  let letter = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}
// -----------------------------------------------------------------------
// -----  MENU初始化 ------------------------------------------------------
// -----------------------------------------------------------------------
// function menu() {
//   // menu初始化 新增側欄選單
//   const body = document.querySelector('body');
//   const sidebar = document.createElement('aside');
//   sidebar.className = 'mobileSidebar';
//   sidebar.style = 'opacity:0;';

//   //創建黑色遮罩
//   body.insertAdjacentHTML('beforeend', '<div class="menuOverlay"></div>');
//   sidebar.insertAdjacentHTML('beforeend', '<div class="mobileArea"><button type="button" class="sidebarClose">關閉</button></div>');
//   body.prepend(sidebar);

//   const mainMenu = document.querySelector('.mainMenu');
//   const hasChild = mainMenu.querySelectorAll('li ul');
//   hasChild.forEach((i) => {
//     i.parentNode.classList.add('hasChild');
//   });

//   // menu初始化 新增側欄選單按鈕
//   const sidebarCtrlBtn = document.createElement('button');
//   sidebarCtrlBtn.className = 'sidebarCtrlBtn';
//   sidebarCtrlBtn.setAttribute('type', 'button');

//   const siteHeader = document.querySelector('.header .container');
//   siteHeader.prepend(sidebarCtrlBtn);

//   // menu初始化 複製手機版側欄選單
//   const mobileArea = document.querySelector('.mobileArea');
//   const cloneMenu = mainMenu.cloneNode(true);
//   cloneMenu.classList.add('sideMainMenu');
//   cloneMenu.classList.remove('mainMenu', 'megaMenu', 'menu');
//   mobileArea.append(cloneMenu);
// }
// menu();

// -----------------------------------------------------------------------
// ----- 複製手機版nav選單 -------------------------------------------------
// -----------------------------------------------------------------------

function topNav() {
  const body = document.querySelector('body');
  const mobileArea = document.querySelector('.mobileArea');

  //複製navigation
  const nav = document.querySelector('.navigation');
  if (nav) {
    const cloneNav = nav.cloneNode(true);
    mobileArea.append(cloneNav);

    // 移除手機版字體大小按鈕
    const sideLanguage = document.querySelector('.mobileArea .fontSize');
    if (sideLanguage) {
      sideLanguage.remove();
      body.classList.remove('smallSize', 'largeSize');
      body.classList.add('mediumSize');
    }
  }
}

// -----------------------------------------------------------------------
// ----- webSearch設定 ------------------------------------------------
// -----------------------------------------------------------------------

function webSearch() {
  const siteHeader = document.querySelector('.header .container');
  const webSearch = document.querySelector('.wrapper .webSearch');
  const searchBtn = document.querySelector('.wrapper .webSearchBtn button');
  const menuOverlay = document.querySelector('.menuOverlay');
  const webSearchBtn = document.createElement('button');
  const webSearchB = document.querySelector('.webSearch.typeB');

  const fontSize = document.querySelector('.fontSize');
  const language = document.querySelector('.wrapper .language');

  // webSearchBtn.classList.add('mobileSearchBtn');

  fontSize && webSearchB ? fontSize.querySelector('button').addEventListener('click', (e) => jsSlideUp(webSearchB)) : null;
  language && webSearchB ? language.querySelector('button').addEventListener('click', (e) => jsSlideUp(webSearchB)) : null;

  // siteHeader.append(webSearchBtn);

  if (webSearchBtn) {
    webSearchBtn.addEventListener('click', (e) => {
      jsSlideToggle(webSearch);
      jsFadeToggle(menuOverlay);
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      jsSlideToggle(webSearch);
      // jsFadeToggle(menuOverlay);

      language ? jsSlideUp(language.querySelector('ul')) : null;
      fontSize ? jsSlideUp(fontSize.querySelector('ul')) : null;
    });
    searchBtn.addEventListener('keydown', (e) => {
      let target = webSearch.querySelectorAll('a, button');
      if (e.which === 9 && !e.shiftKey) {
        //tab
        jsSlideToggle(webSearch);
        [...target][target.length - 1].addEventListener('focusout', function (e) {
          jsSlideUp(webSearch);
          jsFadeOut(menuOverlay);
        });
      } else if (e.which === 9 && e.shiftKey) {
      } else if (e.which === 27) {
        jsSlideUp(webSearch);
        jsFadeOut(menuOverlay);
      }
    });
  }

  menuOverlay?.addEventListener('click', (e) => {
    jsSlideUp(webSearch);
    menuOverlay ? menuOverlay.style.removeProperty('z-index') : null;
    jsFadeOut(menuOverlay);
  });
}

// -----------------------------------------------------------------------
// ----- 手機桌機版本切換及手機版menu設定 -------------------------------------
// -----------------------------------------------------------------------

function mainMenuSetup() {
  'use strict';
  // menu初始化 新增側欄選單
  const body = document.querySelector('body');
  const sidebar = document.createElement('aside');
  sidebar.className = 'mobileSidebar';
  sidebar.style = 'opacity:0;';

  //創建黑色遮罩

  body.insertAdjacentHTML('beforeend', '<div class="menuOverlay"></div>');
  sidebar.insertAdjacentHTML('afterbegin', '<div class="mobileArea"><button type="button" class="sidebarClose">關閉</button></div>');
  body.prepend(sidebar);

  const menuOverlay = document.querySelector('.menuOverlay');
  const mainMenu = document.querySelector('.mainMenu');
  const hasChildUl = mainMenu.querySelectorAll('li ul');
  hasChildUl.forEach((i) => {
    i.parentNode.classList.add('hasChild');
  });

  // menu初始化 新增側欄選單按鈕
  const sidebarCtrlBtn = document.createElement('button');
  sidebarCtrlBtn.className = 'sidebarCtrlBtn';
  sidebarCtrlBtn.setAttribute('type', 'button');

  const siteHeader = document.querySelector('.header .container');
  siteHeader.prepend(sidebarCtrlBtn);

  // menu初始化 複製手機版側欄選單
  const mobileArea = document.querySelector('.mobileArea');
  const cloneMenu = mainMenu.cloneNode(true);
  cloneMenu.classList.add('sideMainMenu');
  cloneMenu.classList.remove('mainMenu', 'megaMenu', 'menu');
  mobileArea.append(cloneMenu);

  ////////////////////////////////////////////////////////////////////////////////
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let mode = null;

  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    windowWidth < windowWidthSmall ? (mode = false) : (mode = true);
    jsFadeOut(menuOverlay);
    hideSidebar();
  });
  window.addEventListener('load', () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    windowWidth < windowWidthSmall ? (mode = false) : (mode = true);
  });

  const hasChild = document.querySelectorAll('.mainMenu .hasChild');
  const handleMouseenter = (e) => {
    if (windowWidth < windowWidthSmall) {
      return;
    }
    e.target.classList.add('active');
    const nextUl = e.target.querySelectorAll('ul');
    const hasChildLi = jsParents(nextUl[nextUl.length - 1], 'li');
    const checkUlWidth = hasChildLi[0].offsetWidth * hasChildLi.length - 1 || 0;
    const objectRect = hasChildLi[0].getBoundingClientRect();

    if (windowWidth < objectRect.left + checkUlWidth) {
      hasChildLi[0].classList.add('leftSlider');
    } else {
      hasChildLi[0].classList.remove('leftSlider');
    }
    //
    jsChildren(e.target, 'ul').forEach((i) => {
      const check = isObjectFullyVisible(i);
      let objectRect = i.getBoundingClientRect();

      if (check) {
        i.classList.remove('slideMode');
      } else {
        i.classList.add('slideMode');

        // if (i.offsetHeight > windowHeight - mainMenu.offsetHeight) {
        const menuArrowDown = document.createElement('button');
        menuArrowDown.className = 'menuArrowDown';
        const menuArrowUp = document.createElement('button');
        menuArrowUp.className = 'menuArrowUp';
        menuArrowUp.style.opacity = '0';
        i.parentNode.append(menuArrowDown);
        i.parentNode.append(menuArrowUp);

        menuArrowDown.addEventListener('click', clickGoDown);
        menuArrowUp.addEventListener('click', clickGoUp);
        setTimeout(() => {
          objectRect = i.getBoundingClientRect();
          menuArrowDown.style.left = `${objectRect.left + i.offsetWidth - 40}px`;
          menuArrowDown.setAttribute('noIndex', '-1');
          menuArrowDown.classList.add('active');

          menuArrowUp.style.left = `${objectRect.left + i.offsetWidth - 65}px`;
          menuArrowUp.setAttribute('noIndex', '-1');
          menuArrowUp.classList.add('active');
        }, 200);
      }
    });
  };

  // 出現後使否可以再點選一次
  let countOneForDown = false;
  // 距離li全部出現的百分比
  let leftHeight = 0;

  function clickGoDown(e) {
    const lastLiA = e.target.parentNode.querySelectorAll('a')[e.target.parentNode.querySelectorAll('a').length - 1];
    if (mode) {
      const target = e.target.parentNode.querySelector('.slideMode');
      let ele = parseFloat(window.getComputedStyle(target).top) || 0;
      if (isObjectVisibleB(lastLiA)) {
        leftHeight = lastLiA.getBoundingClientRect().bottom - windowHeight;
        if (!countOneForDown) {
          target.style.top = `${ele - leftHeight}px`;
          countOneForDown = true;
        }
      } else {
        target.style.top = `${ele - 40}px`;
        e.target.nextSibling.style.opacity = '1';
      }
    }
  }

  function clickGoUp(e) {
    if (mode) {
      const target = e.target.parentNode.querySelector('.slideMode');
      let ele = parseFloat(window.getComputedStyle(target).top) || 0;

      if (ele <= -40) {
        target.style.top = `${ele + 40}px`;
      } else {
        let firstUl = document.querySelectorAll('.mainMenu > ul > li > ul');
        if ([...firstUl].indexOf(target) >= 0) {
          target.style.top = `100%`;
        } else {
          target.style.top = `0px`;
        }
      }
    }
  }

  const handleMouseleave = (e) => {
    if (windowWidth < windowWidthSmall) {
      return;
    }
    e.target.classList.remove('active');
    e.target.querySelector('ul').style.removeProperty('top');
    e.target.querySelectorAll('.menuArrowDown')?.forEach((i) => i?.remove());
    e.target.querySelectorAll('.menuArrowUp')?.forEach((i) => i?.remove());
    // e.target.querySelector('.menuArrowDown')?.remove();
    // e.target.querySelector('.menuArrowUp')?.remove();
    countOneForDown = false;
    leftHeight = 0;
  };

  hasChild.forEach((i) => {
    i.addEventListener('mouseenter', handleMouseenter);
    i.addEventListener('mouseleave', handleMouseleave);
  });

  // 鍵盤
  // keyup時
  const control = mainMenu.querySelectorAll('li');

  control.forEach((i) => {
    i.addEventListener('keyup', (e) => {
      if (mode) {
        const siblings = Array.prototype.filter.call(i.parentNode.children, (child) => {
          return child !== i;
        });
        const target = e.target.parentNode.parentNode;
        const hasChildLi = jsParents(e.target, '.hasChild');
        if (hasChildLi.length > 0) {
          const checkUlWidth = hasChildLi[0].offsetWidth * hasChildLi.length - 1 || 0;
          const objectRect = hasChildLi[0].getBoundingClientRect();
          if (windowWidth < objectRect.left + checkUlWidth) {
            hasChildLi[0].classList.add('leftSlider');
          } else {
            hasChildLi[0].classList.remove('leftSlider');
          }
        }

        if (!isObjectFullyVisible(i)) {
          let ele = parseFloat(window.getComputedStyle(target).top) || 0;
          target.style.top = `${ele - 40}px`;
        }

        siblings.forEach((x) => {
          x.classList.remove('active');
          x.querySelectorAll('ul').forEach((s) => {
            s.style.removeProperty('top');
          });
        });
      }
    });
  });

  // 不focus時
  const lastA = mainMenu.querySelectorAll('a').length - 1;
  mainMenu.querySelectorAll('a')[lastA].addEventListener('focusout', () => {
    mainMenu.querySelectorAll('li').forEach((i) => {
      i.classList.remove('active');
    });
    mainMenu.querySelectorAll('ul').forEach((i) => {
      i.style.removeProperty('top');
    });
  });

  // child keyup時
  const childControl = mainMenu.querySelectorAll('li.hasChild > a');

  childControl.forEach((i) => {
    i.addEventListener('keyup', (e) => {
      i.parentNode.querySelector('ul').removeAttribute('style');
      i.parentNode.classList.add('active');
    });
  });

  const sidebarClose = document.querySelector('.sidebarClose');
  const asideMenu = document.querySelector('.sideMainMenu');
  const asideMenuLi = asideMenu.querySelectorAll('li');
  const asideMenuLiHasChild = asideMenu.querySelectorAll('li.hasChild > a');
  const webSearch = document.querySelector('.wrapper .webSearch');

  asideMenuLiHasChild.forEach((i) => {
    i.addEventListener('click', (e) => {
      i.parentNode.classList.contains('hasChild') ? e.preventDefault() : null;
      e.preventDefault();
      toggleAccordion(i, 'ul');
    });
  });

  // 點擊選單按鈕 執行 展開側邊選單函式
  sidebarCtrlBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSidebar();
    jsSlideUp(webSearch);
  });

  function showSidebar() {
    sidebar.style = 'display:block;opacity:1';
    sidebar.style.display = 'block';
    menuOverlay ? (menuOverlay.style.zIndex = '99') : null;

    sidebar.style = `transform: translateX(0px);`;
    setTimeout(() => {
      mobileArea.classList.add('open');
    }, 0);

    body.classList.add('noscroll');
    jsFadeIn(menuOverlay);
  }

  sidebarClose.addEventListener('click', (e) => {
    jsFadeOut(menuOverlay);
    hideSidebar();
    menuOverlay ? menuOverlay.style.removeProperty('z-index') : null;
  });

  // 隱藏側邊選單函式
  function hideSidebar() {
    jsFadeOut(menuOverlay);
    sidebar.style = `transform: translateX(-100%);`;
    setTimeout(() => {
      sidebar.style.removeProperty('transform');
    }, 300);

    mobileArea.classList.remove('open');
    body.classList.remove('noscroll');

    asideMenuLi.forEach((i) => {
      i.classList.remove('active');
    });
  }

  function toggleAccordion(item, con) {
    let content = item.parentElement.querySelector(con);
    jsSlideToggle(content);

    const siblings = Array.prototype.filter.call(item.parentElement.parentElement.children, (child) => {
      return child !== item.parentElement;
    });
    siblings.forEach((v) => {
      if (v.querySelector(con)) {
        let target = v.querySelector(con);
        jsSlideUp(target);
      }
    });
  }

  function isObjectFullyVisible(object) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let objectRect = object?.getBoundingClientRect();
    let objectLeft = objectRect?.left;
    let objectRight = objectRect?.right;
    let objectTop = objectRect?.top;
    let objectBottom = objectRect?.bottom;
    let isFullyVisible = objectLeft >= 0 && objectRight <= windowWidth && objectTop >= 0 && objectBottom <= windowHeight;
    return isFullyVisible;
  }
  function isObjectVisibleT(object) {
    let objectRect = object?.getBoundingClientRect();
    let objectBottom = objectRect?.bottom;
    let isFullyVisible = objectBottom >= 0;
    return isFullyVisible;
  }
  function isObjectVisibleB(object) {
    let windowHeight = window.innerHeight;
    let objectRect = object?.getBoundingClientRect();
    let objectTop = objectRect?.top;
    let isFullyVisible = objectTop <= windowHeight;
    return isFullyVisible;
  }

  menuOverlay?.addEventListener('click', (e) => {
    hideSidebar();
  });
}
mainMenuSetup();

// -----------------------------------------------------------------------
// -----  menu 訊息區塊 sticky  -------------------------------------------
// -----------------------------------------------------------------------

function navSticky() {
  const mainMenu = document.querySelector('.mainMenu');
  const main = document.querySelector('.main');
  let windowWidth = window.outerWidth;
  let menuHeight = Math.floor(mainMenu.offsetHeight);
  let mainMenuTop = Math.floor(mainMenu.getBoundingClientRect().top + window.scrollY);
  let offsetTop = Math.floor(mainMenuTop);

  // 取menu高度
  jsScroll(mainMenuTop);
  jsResize(mainMenuTop);
  reload(mainMenuTop);

  // menu 的 sticky函式
  function sticky(mainMenuTop) {
    offsetTop = Math.floor(mainMenuTop);
    // 如果 offsetTop 不等於 null 則運行下方函式
    if (offsetTop) {
      if (windowWidth >= windowWidthSmall && window.scrollY > offsetTop) {
        mainMenu.classList.add('sticky');
        main.style = `padding-top: ${menuHeight}px`;
      } else {
        mainMenu.classList.remove('sticky');
        main.removeAttribute('style');
      }
    }
  }

  // 當 scroll 觸發
  function jsScroll(mainMenuTop) {
    // scroll 時執行 menu_stickyNavbar 並請傳入 menu 距離上方的高度的參數
    window.addEventListener('scroll', (e) => {
      sticky(mainMenuTop);
    });
  }

  // 當 resize 觸發 判斷 menu的種類
  function jsResize(mainMenuTop) {
    // 如果 有 menu 的話 執行固定 menu_stickyNavbar
    window.addEventListener('resize', (e) => {
      // 算出 menu 距離上方的高度
      offsetTop = Math.floor(mainMenuTop);
      setTimeout(() => {
        main.removeAttribute('style');
        sticky(offsetTop);
      }, 50);
    });
  }

  function reload(mainMenuTop) {
    offsetTop = Math.floor(mainMenuTop);
    window.onload = sticky(offsetTop);
  }
}
// navSticky();

// -----------------------------------------------------------------------
// -----  notice訊息區塊   -------------------------------------------------
// -----------------------------------------------------------------------

document.querySelectorAll('[class*="notice"] a.close')?.forEach((i) => {
  i.addEventListener('click', (e) => {
    i.parentNode.style.display = 'none';
    e.preventDefault();
  });
});

// -----------------------------------------------------------------------
// -----  fatFooter   ----------------------------------------------------
// -----------------------------------------------------------------------

function fatFooter(openCheck = true) {
  const el = document.querySelector('.btnFatFooter') || null; // --- 控制的對象

  if (el !== null) {
    function fatFooterInit() {
      // --- 抓取UI高度 css樣式修改樣式重新抓取高度
      const _navUl = el.parentNode.querySelectorAll('nav ul li ul');
      setTimeout(() => {
        _navUl.forEach((i) => {
          i.setAttribute('style', '');
          let _itemHeight = i.offsetHeight;
          i.dataset.itemHeight = _itemHeight;
          if (Number(_itemHeight) !== 0 && openCheck) {
            i.style.height = `${Number(i.dataset.itemHeight)}px`;
          } else {
            console.log('a');
            i.style.height = '0px';
            el.innerHTML = '收合/CLOSE';
            el.setAttribute('name', '收合選單/CLOSE');
            el.classList.add('close');
          }
        });
      }, 20);
    }

    function toggleFatFooter() {
      const _navUl = el.parentNode.querySelectorAll('nav ul li ul');
      _navUl.forEach((i) => {
        if (i.offsetHeight !== 0) {
          i.style.height = '0px';
          el.innerHTML = '收合/CLOSE';
          el.setAttribute('name', '收合選單/CLOSE');
        } else {
          i.style.height = `${i.dataset.itemHeight}px`;
          el.innerHTML = '展開/OPEN';
          el.setAttribute('name', '展開選單/OPEN');
        }
      });
      el.classList.toggle('close');
    }

    fatFooterInit();
    // --- 點擊時
    el.addEventListener('click', toggleFatFooter);

    window.addEventListener('resize', () => {
      fatFooterInit();
    });
  }
}
// fatFooter();

// -----------------------------------------------------------------------
// -----  多組Tab   ------------------------------------------------------
// -----------------------------------------------------------------------

function tabFunction(obj) {
  'use strict';
  // const tabSet = document.querySelector(obj.target) || null;
  const tabSet = document.querySelectorAll(obj.target) || null;
  const autoClose = obj.autoClose;
  const openSwitch = obj.openSwitch;
  const openFirst = obj.openFirst;
  const modeSwitch = obj.modeSwitch;
  const widthCheck = obj.width;

  if (tabSet) {
    tabSet.forEach((tab) => {
      let id = [];
      let mode = '';
      let modeBBtn;
      const modeABtn = tab.querySelectorAll('.tabItems button');
      const modeAContent = tab.querySelectorAll('.tabContent');
      const modeBContent = tab.querySelectorAll('.content');
      const count = modeABtn.length;
      let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
      const lastTab = modeABtn[modeABtn.length - 1];

      for (let i = 0; i < modeABtn.length; i++) {
        id.push(`tab_${randomLetter(3)}${randomFloor(0, 999)}`);
      }

      // 內容增加標題給模式B使用
      modeABtn.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.classList.add('modeBBtn');
        btn.innerText = item.innerText;
        modeAContent.forEach((content, i) => (i === index ? content.prepend(btn) : null));
      });

      modeBBtn = tab.querySelectorAll('.modeBBtn');

      // 判斷寬度
      const init = () => {
        if (window.innerWidth <= widthCheck && modeSwitch) {
          // 模式B
          mode = 'B';
          if (modeSwitch) {
            modeABtn.forEach((content) => content.classList.remove('active'));
            modeAContent.forEach((content) => content.classList.remove('active'));
            // 移除模式A無障礙設置
            modeABtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeAContent[index].removeAttribute('aria-labelledby');
              modeAContent[index].removeAttribute('role');
              modeAContent[index].removeAttribute('aria-label');
            });
            // 增加模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.setAttribute('aria-controls', id[index]);
              modeBContent[index].setAttribute('aria-labelledby', id[index]);
              modeBContent[index].setAttribute('id', id[index]);
              // item.setAttribute('role', 'tab');
              // modeBContent[index].setAttribute('role', 'tabpanel');
              modeBContent[index].setAttribute('aria-label', item.innerText);
            });

            tab.classList.add('modeB');

            if (nowIndex !== null) {
              modeBBtn[nowIndex].classList.add('active');
              modeBBtn[nowIndex].setAttribute('aria-selected', 'true');
              modeBContent[nowIndex].classList.add('active');
              jsSlideDown(modeBContent[nowIndex]);
            }
          }
          // 模式B
        } else if (window.innerWidth > widthCheck || !modeSwitch) {
          // 模式A
          mode = 'A';

          if (modeSwitch) {
            modeBContent.forEach((item) => item.style.removeProperty('display'));
            modeBBtn.forEach((content) => content.classList.remove('active'));
            modeBContent.forEach((content) => content.classList.remove('active'));

            // 移除模式B無障礙設置
            modeBBtn.forEach((item, index) => {
              item.removeAttribute('aria-controls');
              item.removeAttribute('role');
              modeBContent[index].removeAttribute('aria-labelledby');
              modeBContent[index].removeAttribute('role');
              modeBContent[index].removeAttribute('aria-label');
              modeBContent[index].removeAttribute('id');
            });
          }
          // 增加模式A無障礙設置
          modeABtn.forEach((item, index) => {
            item.setAttribute('aria-controls', id[index]);
            item.setAttribute('role', 'tab');
            item.setAttribute('aria-selected', 'false');
            modeAContent[index].setAttribute('aria-labelledby', id[index]);
            modeAContent[index].setAttribute('role', 'tabpanel');
            modeAContent[index].setAttribute('aria-label', item.innerText);
          });

          tab.classList.remove('modeB');

          nowIndex === null ? (nowIndex = 0) : nowIndex;
          modeABtn[nowIndex].classList.add('active');
          modeAContent[nowIndex].classList.add('active');
          modeABtn[nowIndex].setAttribute('aria-selected', 'true');
          // 模式A
        }
      };
      init();

      // 預先展開模式
      function openCheck() {
        // 預先展開模式
        if (!openFirst && mode === 'B' && nowIndex !== null) {
          const siblings = Array.prototype.filter.call(modeBContent[nowIndex].parentElement.parentElement.children, (child) => {
            return child !== modeBContent[nowIndex].parentElement;
          });
          siblings.forEach((item) => jsSlideUp(item.querySelector('.content')));
        } else if (mode === 'B' && nowIndex === null) {
          modeBContent.forEach((item) => jsSlideUp(item));
        } else {
          modeBContent.forEach((item) => jsSlideDown(item));
        }
      }
      openCheck();

      // 模式A共用
      function modeAFn(item, index) {
        modeABtn.forEach((content) => content.classList.remove('active'));
        modeAContent.forEach((content) => content.classList.remove('active'));
        modeAContent[index].classList.add('active');
        item.classList.add('active');
        modeABtn.forEach((content) => content.setAttribute('aria-selected', 'false'));
        item.setAttribute('aria-selected', 'true');
        nowIndex = index;
      }

      modeAContent.forEach((item, index) => {
        const itemAllTarget = modeAContent[index].querySelectorAll('a,button,input,textarea,select');
        const firstItem = itemAllTarget[1];
        const lastItem = itemAllTarget[itemAllTarget.length - 1];
        const prevItemAllTarget = modeAContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
        const siblings = Array.prototype.filter.call(modeBBtn[index].parentElement.parentElement.children, (child) => {
          return child !== modeBBtn[index].parentElement;
        });

        // 模式A
        if (modeSwitch || mode === 'A') {
          // 模式A點擊
          if (openSwitch) {
            modeABtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              modeAFn(e.target, index);
            });

            // 模式A鍵盤
            modeABtn[index].addEventListener('keydown', (e) => {
              if (e.which === 9 && !e.shiftKey) {
                modeAFn(e.target, index);
                if (itemAllTarget.length > 1 && e.target !== lastTab) {
                  e.preventDefault();
                  firstItem.focus();
                } else if (itemAllTarget.length === 1 && e.target !== lastTab) {
                  e.preventDefault();
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length > 1 && e.target === lastTab) {
                  modeABtn[index + 1]?.focus();
                } else if (itemAllTarget.length === 1 && e.target === lastTab) {
                  setTimeout(() => {
                    lastTab.focus();
                    lastTab.blur();
                  }, 10);
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                modeAFn(modeABtn[index], index);
                lastItem?.focus();
                if (itemAllTarget.length === 1) {
                  modeABtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 模式B
        if (modeSwitch || mode === 'B') {
          // 模式B點擊
          if (openSwitch) {
            modeBBtn[index].addEventListener('click', (e) => {
              e.preventDefault();
              siblings.forEach((content) => content.querySelector('.modeBBtn').classList.remove('active'));
              e.target.classList.toggle('active');
              jsSlideToggle(modeBContent[index]);
              nowIndex = index;

              if (autoClose) {
                siblings.forEach((con) => {
                  jsSlideUp(con.querySelector('.content'));
                  con.classList.remove('active');
                  con.querySelector('.modeBBtn').setAttribute('aria-selected', 'false');
                });
              }
            });

            // 模式B鍵盤
            modeBBtn[index].addEventListener('keydown', (e) => {
              e.target.classList.add('active');
              let firstTabStyle = window.getComputedStyle(modeBContent[index]);
              nowIndex = index;

              if (autoClose & !openFirst) {
                siblings.forEach((content) => {
                  jsSlideUp(content.querySelector('.content'));
                  content.querySelector('.modeBBtn').classList.remove('active');
                  content.querySelector('.modeBBtn').setAttribute('aria-expanded', 'false');
                });
              }

              if (e.which === 9 && !e.shiftKey) {
                jsSlideDown(modeBContent[index]);
                if (index === 0) {
                  e.target.classList.add('active');
                }

                if (itemAllTarget.length > 1) {
                  e.preventDefault();
                  firstItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index]?.focus();
                }
              } else if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                jsSlideDown(modeBContent[index]);
                if (itemAllTarget.length > 1) {
                  lastItem?.focus();
                } else if (itemAllTarget.length === 1) {
                  modeBBtn[index - 1]?.focus();
                }
              }
            });
          }
        }

        // 內容鍵盤遊走
        itemAllTarget.forEach((n, i) => {
          if (i > 0) {
            n.addEventListener('keydown', (e) => {
              if (mode === 'A') {
                if ((e.which === 9 && !e.shiftKey && e.target === lastItem && modeABtn[index] !== lastTab) || (e.which === 9 && e.shiftKey && e.target === firstItem)) {
                  modeABtn[index]?.focus();
                }
              } else if (mode === 'B') {
                if (e.which === 9 && e.shiftKey) {
                  if (e.target === firstItem) {
                    modeBBtn[index]?.focus();
                  } else if (itemAllTarget.length === 1) {
                    modeBBtn[index - 1]?.focus();
                  }
                }
              }
            });
          }
        });
      });

      window.addEventListener('resize', init);
    });
  }
}

// tabFunction({
//   target: '.tabSet',
//   openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
//   openSwitch: true, // 是否可開合/切換
//   autoClose: true, // 自動關閉其他開啟內容
//   modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
//   width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
//   index: 0, // 預設開啟第幾個
// });

// -----------------------------------------------------------------------
// -----  置頂go to top   -------------------------------------------------
// -----------------------------------------------------------------------

function scrollToTop(obj) {
  const el = document.querySelector(obj); // 控制的對象
  const goCenter = document.querySelector('.goCenter');

  function focusTopBtn() {
    const top = window.scrollY;
    if (top > 200) {
      jsFadeIn(el);
    } else {
      jsFadeOut(el);
    }
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  if (el) {
    // window.scrollY 等於零的時候 執行 focus
    window.addEventListener('scroll', focusTopBtn);

    // 滑鼠點擊置頂按鈕
    el.addEventListener('click', (e) => {
      e.preventDefault();
      scrollTop();
      goCenter.focus();
    });

    // 鍵盤點擊置頂按鈕
    el.addEventListener('keydown', (e) => {
      e.preventDefault();
      scrollTop();
      goCenter.focus();
    });
  }
}

scrollToTop('.scrollToTop');

// -----------------------------------------------------------------------
// -----  語言模組 dropdwon   ---------------------------------------------
// -----------------------------------------------------------------------

// class SelectSlider {
//   constructor(obj) {
//     this.name = obj.name || null; // 按鈕列表名稱
//     this.control = obj.control || null; // 控制的對象名稱
//   }
//   // 點擊 語言模組
//   sliderClick() {
//     this.name.forEach((i) => {
//       i.addEventListener('click', (e) => {
//         e.preventDefault();
//         const sliderItem = e.target.nextElementSibling;
//         if (sliderItem === null) {
//           return;
//         } else if (sliderItem.offsetHeight !== 0 || sliderItem.offsetHeight === null) {
//           jsSlideUp(sliderItem, 300);
//         } else {
//           jsSlideDown(sliderItem, 300);
//         }
//         this.sliderClose(e.target);
//       });
//     });
//   }
//   // Keydown
//   sliderKeydown() {
//     this.control.forEach((i) => {
//       i.addEventListener('keydown', (e) => {
//         const sliderItem = e.target.nextElementSibling;
//         if (sliderItem) {
//           jsSlideDown(sliderItem, 300);
//         }
//       });
//     });
//   }
//   // Focusout
//   sliderFocusout() {
//     this.name.forEach((i) => {
//       const nodes = i.querySelectorAll('ul li a,ul li button');
//       const lastNodes = nodes[nodes.length - 1];
//       const sliderItem = i.querySelector('ul');
//       lastNodes.addEventListener('focusout', (e) => {
//         e.preventDefault();
//         jsSlideUp(sliderItem, 300);
//       });
//     });
//   }
//   // 關閉
//   sliderClose(item) {
//     const sliderItem = item.nextElementSibling;
//     const that = this;

//     function clickOtherPlace(e) {
//       const chooseClassName = that.name[0].className;
//       if ((e.target.closest(`.${chooseClassName}`) === null) & (e.target !== item)) {
//         jsSlideUp(sliderItem, 300);
//       } else {
//         return;
//       }
//     }
//     document.addEventListener('touchstart', (e) => {
//       e.preventDefault();
//       clickOtherPlace(e);
//     });
//     document.addEventListener('click', (e) => {
//       clickOtherPlace(e);
//     });
//   }

//   initial() {
//     this.sliderClick();
//     this.sliderKeydown();
//     this.sliderFocusout();
//   }
// }

// const languageSelect = new SelectSlider({
//   name: document.querySelectorAll('.language'), // 控制的對象
//   control: document.querySelectorAll('.language button'), // 監聽的對象
// });
// languageSelect.initial();

// -----------------------------------------------------------------------
// -----  FontSize   -----------------------------------------------------
// -----------------------------------------------------------------------

function fontSize() {
  const el = document.querySelector('.fontSize'); // 控制的對象
  const elB = document.querySelector('.fontSize.typeB'); // 控制的對象
  const list = el.querySelectorAll('ul button');
  const body = document.querySelector('body');
  if (elB) {
    xSlider('.fontSize.typeB > button', '.fontSize ul');
  }
  if (el) {
    list.forEach((v) => {
      v.addEventListener('click', (e) => {
        createCookie('FontSize', `${e.target.className}`, 356);
        toggleClass(e.target.className);
        e.target.classList.add('active');
      });
    });

    // 移除 active 的 class 名稱
    function toggleClass(targetClassName) {
      list.forEach((i) => i.classList.remove('active'));
      switch (targetClassName) {
        case 'small':
          body.classList.remove('largeSize', 'mediumSize');
          body.classList.add('smallSize');
          break;
        case 'medium':
          body.classList.remove('smallSize', 'largeSize');
          body.classList.add('mediumSize');
          break;
        case 'large':
          body.classList.remove('smallSize', 'mediumSize');
          body.classList.add('largeSize');
          break;
      }
    }

    // 創造新的 字體大小設定
    function createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = '; expires=' + _date.toGMTString();
      } else {
        _expires = '';
      }
      document.cookie = name + '=' + value + _expires + '; path=/';
    }

    // 讀取瀏覽器上 字體大小設定
    function readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // 初始化 字體大小設定
    let cookie = readCookie('FontSize');
    // 如果沒有cookie 則預設值為'medium'
    if (!cookie) {
      cookie = 'medium';
    }
    document.querySelectorAll(`.${cookie}`).forEach((i) => {
      i.classList.add('active');
      body.classList.add(`${cookie}Size`);
    });
  }
}

// window.addEventListener('load', function (e) {
//   console.log('a');
// });
// -----------------------------------------------------------------------
// -----  分享按鈕 share dropdwon   ---------------------------------------
// -----------------------------------------------------------------------

function shareBtnFunction() {
  // 創造一個a連結的按鈕
  const shareUl = document.querySelector('.share');
  if (shareUl) {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'shareButton');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.textContent = 'share分享按鈕';
    shareUl.insertBefore(btn, shareUl.childNodes[0]);
  }

  xSlider('.share > button', '.share ul');
}
// shareBtnFunction();

// -----------------------------------------------------------------------
// -----  form表單 單個檔案上傳+多個檔案上傳   --------------------------------
// -----------------------------------------------------------------------

function addFile() {
  const addFileName = document.querySelectorAll('.check_file');
  addFileName.forEach((i) => {
    i.addEventListener('change', pushFileName);
  });

  function pushFileName(e) {
    const fileLen = e.target.files.length;
    let fileName = '';
    const uploadInput = e.target.parentNode.closest('.uploadGrp').querySelector('.upload_file');
    if (fileLen > 1) {
      fileName = `${fileLen} files selected`;
    } else {
      fileName = e.target.files[0].name;
    }
    uploadInput.value = fileName;
  }
}
addFile();

// -----------------------------------------------------------------------
// -----  checkboxBlur 失去焦點   -----------------------------------------
// -----------------------------------------------------------------------

function checkboxBlur() {
  const checkboxList = document.querySelectorAll('input[type="checkbox"]');
  checkboxList.forEach((i) => {
    i.addEventListener('click', (e) => {
      e.target.blur();
    });
  });
}
checkboxBlur();

// -----------------------------------------------------------------------
// -----  category active    ---------------------------------------------
// -----------------------------------------------------------------------

// function categoryActive() {
//   const categoryList = document.querySelectorAll('.category');
//   categoryList.forEach((i) => {
//     const item = i.querySelectorAll('a');
//     item.forEach((tag) => {
//       tag.addEventListener('click', (e) => {
//         e.preventDefault();
//         removeClass(item);
//         e.target.classList.add('active');
//       });
//     });
//   });

//   function removeClass(item) {
//     item.forEach((i) => {
//       i.classList.remove('active');
//     });
//   }
// }
// categoryActive();

// -----------------------------------------------------------------------
// -----  gotoCenter on focus跳到 content   ------------------------------
// -----------------------------------------------------------------------

function gotoCenter() {
  const goCenterTag = document.querySelector('a.goCenter');
  const acTag = document.querySelector('#aC');
  const mainAccessKey = document.querySelector('.main .accessKey');
  const headerHeight = document.querySelector('.header').offsetHeight;
  //  .accessKey 到top 的距離等於 header + .accessKey到父層上方的距離
  let distance = headerHeight + mainAccessKey?.offsetTop;
  if (goCenterTag) {
    goCenterTag.addEventListener('keydown', (e) => {
      if (e.which === 13) {
        acTag.focus();
        window.scrollTo({
          top: distance,
          left: 0,
          behavior: 'smooth',
        });
      }
    });
  }
}
gotoCenter();

// -----------------------------------------------------------------------
// -----  無障礙快捷鍵盤組合 a11yKeyCode   ----------------------------------------------
// -----------------------------------------------------------------------

function a11yKeyCode() {
  let search = document.querySelector('.webSearch input[type="text"]');
  let header = document.querySelector('.header .accessKey');
  let main = document.querySelector('.main .accessKey');
  let footer = document.querySelector('footer .accessKey');
  let distance = 0;

  // focus element
  function focusElem(distance, el) {
    if (window.scrollY === distance) {
      el.focus();
    }
  }

  // scroll to element position
  function scrollAnime(distance, el) {
    window.scrollTo({
      top: distance,
      behavior: 'smooth',
    });
    window.addEventListener('scroll', () => {
      focusElem(distance, el);
    });
  }

  // click a11 button
  document.addEventListener('keydown', (e) => {
    switch (e.altKey && e.code) {
      // alt+S 查詢
      case true && 'KeyS':
        scrollAnime(0, search);
        focusElem(0, search);
        break;
      // alt+U header
      case true && 'KeyU':
        scrollAnime(0, header);
        focusElem(0, header);
        break;
      // alt+C 主要內容區
      case true && 'KeyC':
        main.focus();
        let _headerHeight = document.querySelector('header').offsetHeight;
        scrollAnime(_headerHeight, main);
        focusElem(_headerHeight, main);
        break;
      // alt+Z footer
      case true && 'KeyZ':
        let _bodyScrollHeight = document.documentElement.scrollHeight;
        let _bodyClientHeight = document.documentElement.clientHeight;
        let _distance = _bodyScrollHeight - _bodyClientHeight;
        scrollAnime(_distance, footer);
        focusElem(_distance, footer);
        break;
    }
  });
}
a11yKeyCode();

// -----------------------------------------------------------------------
// -----  無障礙錨點切換語系   ----------------------------------------------
// -----------------------------------------------------------------------
// 無障礙錨點切換語系，更改accessKey的title名稱

function switchA11TitleName() {
  const webLang = document.querySelector('html').getAttribute('lang');
  const headerTitle = document.querySelector('.header .accessKey');
  const mainTitle = document.querySelector('.main .accessKey');
  const footerTitle = document.querySelector('footer .accessKey');
  const searchTitle = document.querySelector('.search');
  let lang = webLang.substring(0, 2);
  if (lang === 'zh') {
    headerTitle?.setAttribute('title', '上方功能區塊');
    mainTitle?.setAttribute('title', '中央內容區塊');
    footerTitle?.setAttribute('title', '下方功能區塊');
  } else {
    headerTitle?.setAttribute('title', 'header');
    mainTitle?.setAttribute('title', 'content');
  }
  if (searchTitle !== null) {
    if (lang === 'zh') {
      searchTitle?.setAttribute('title', '關鍵字搜尋：文章關鍵字搜尋');
    } else {
      searchTitle?.setAttribute('title', 'footer');
      searchTitle?.setAttribute('title', 'search');
    }
  }
  if (footerTitle !== null) {
    footerTitle?.setAttribute('title', '下方功能區塊');
  }
}
switchA11TitleName();

// -----------------------------------------------------------------------
// -----   tableList樣式 加上 data-title   -------------------------------
// -----------------------------------------------------------------------

function tableAddDataAttributes(obj) {
  const el = document.querySelectorAll(obj.elemClass);
  el.forEach((i) => {
    const tableItem = i.querySelectorAll('table');
    tableItem.forEach((i) => {
      setTrAttr(i);
    });
    i.classList.add('loaded');
  });
  function setTrAttr(i) {
    const thList = i.querySelectorAll('th');
    const trList = i.querySelectorAll('tr');
    trList.forEach((trItem) => {
      const tdList = trItem.querySelectorAll('td');
      tdList.forEach((i, idx) => {
        tdList[idx].setAttribute(`data-${obj.dataName}`, `${thList[idx].textContent}`);
      });
    });
  }
}
// tableAddDataAttributes({
//   elemClass: '.tableList',
//   dataName: 'title',
// }); // tableList樣式 加上 data-title

// -----------------------------------------------------------------------
// -----   scrollTables   ------------------------------------------------
// -----------------------------------------------------------------------

function scrollTables(obj) {
  let el = document.querySelectorAll(obj) || null; // 按鈕列表名稱
  let realTable = [];

  // scrollTables 初始化
  function appendEle() {
    el.forEach((i) => {
      i.style.position = 'relative';
      const table = i.querySelector('table');
      const wrapElement = document.createElement('div');
      wrapElement.className = 'tableScroll';

      table.replaceWith(wrapElement);
      wrapElement.appendChild(table);

      // 產生左邊按鈕
      let appendLeftEle;
      let leftBtn;
      appendLeftEle = document.createElement('div');
      appendLeftEle.setAttribute('class', 'scrollTableNav scrollTableNavLeft');
      appendLeftEle.style.height = `${i.clientHeight}px`;
      leftBtn = document.createElement('div');
      leftBtn.setAttribute('class', 'scrollTableLeftBtn');
      appendLeftEle.appendChild(leftBtn);

      // 產生右邊按鈕
      let appendRightEle;
      let rightBtn;
      appendRightEle = document.createElement('div');
      appendRightEle.setAttribute('class', 'scrollTableNav scrollTableNavRight');
      appendRightEle.style.height = `${i.clientHeight}px`;
      rightBtn = document.createElement('div');
      rightBtn.setAttribute('class', 'scrollTableRightBtn');
      appendRightEle.appendChild(rightBtn);

      // 新增按鈕
      i.prepend(appendLeftEle, appendRightEle);

      realTable.push(i);
      displayNoneEle(i);
    });
  }

  // 開關遮罩功能
  function displayNoneEle(i) {
    // 父層元素的寬;
    let table = i.querySelector('.tableScroll').clientWidth || 200;
    // 子層元素的寬
    let tableItem = i.querySelector('.tableScroll').scrollWidth;
    // 左邊遮罩
    let rightEle = i.querySelector('.scrollTableNavRight');
    // 右邊遮罩
    let leftEle = i.querySelector('.scrollTableNavLeft');
    // 如果沒有建立遮罩
    if (rightEle == null) {
      return;
    }
    // 如果子層跟父層一樣寬度
    if (table === tableItem) {
      leftEle.style.display = 'none';
      rightEle.style.display = 'none';
    } else {
      i.parentElement.scrollLeft = '0';
      rightEle.style.display = 'block';
      rightEle.style.opacity = '1';
    }
    eleScroll();
  }
  // 當父層滾輪滾動
  function eleScroll() {
    el.forEach((i) => {
      i.querySelector('.tableScroll').addEventListener('scroll', () => {
        // 父層元素的寬
        let table = i.querySelector('.tableScroll').clientWidth;
        // 子層元素的寬
        let tableItem = i.querySelector('.tableScroll').scrollWidth;
        // 左邊遮罩
        let rightEle = i.querySelector('.scrollTableNavRight');
        // 右邊遮罩
        let leftEle = i.querySelector('.scrollTableNavLeft');
        // 捲軸位置
        let scrollPosition = i.querySelector('.tableScroll').scrollLeft;

        if (scrollPosition === 0) {
          leftEle.style.opacity = 0;
          rightEle.style.opacity = 1;
        }
        // 如果捲軸位置還沒到底
        if (scrollPosition > 0) {
          leftEle.style.opacity = 1;
        }
        // 如果捲軸位置＋父層寬度 ＝ 子層寬度
        if (scrollPosition + table === tableItem) {
          rightEle.style.opacity = 0;
          leftEle.style.opacity = 1;
          leftEle.style.display = 'block';
        }
        // 如果捲軸位置＋父層寬度 < 子層寬度
        if (scrollPosition + table < tableItem) {
          rightEle.style.opacity = 1;
        }
      });
    });
  }

  // 點擊左右按鈕時滾動畫面
  function clickEleBtn() {
    // 點擊左邊按鈕
    const leftBtn = document.querySelectorAll('.scrollTableLeftBtn');
    if (leftBtn.length !== 0) {
      leftBtn.forEach((i) => {
        i.addEventListener('click', (item) => {
          i.parentElement.parentElement.querySelector('.tableScroll').scrollLeft -= 200;
        });
      });
    }
    // 點擊右邊按鈕
    const rightBtn = document.querySelectorAll('.scrollTableRightBtn');
    rightBtn?.forEach((i) => {
      i.addEventListener('click', (item) => {
        i.parentElement.parentElement.querySelector('.tableScroll').scrollLeft += 200;
      });
    });
  }

  appendEle();
  clickEleBtn();
  // resize
  window.addEventListener('resize', () => {
    el.forEach((i) => {
      displayNoneEle(i);
    });
  });
}
// scrollTables();

// -----------------------------------------------------------------------
// -----   lazy load   ---------------------------------------------------
// -----------------------------------------------------------------------

let lazyLoadInstance = new LazyLoad({
  elements_selector: 'img.lazy',
  placeholder: '/images/basic/placeholder.gif',
  effect: 'fadeIn',
  fadeTime: 600,
  threshold: 0,
});

// -----------------------------------------------------------------------
// -----   Accordion設定   ------------------------------------------------
// -----------------------------------------------------------------------

function accordionFunction(obj) {
  'use strict';
  const accordion = document.querySelector(obj.target);
  const autoClose = obj.autoClose;
  const openSwitch = obj.openSwitch;
  const openFirst = obj.openFirst;
  const { open, close } = obj.info;

  if (accordion) {
    let id = [];
    let accordionState;
    const accordionList = accordion.querySelectorAll('.accordionList');
    const accordionBtn = accordion.querySelectorAll('.accordionBtn');
    const accordionContent = accordion.querySelectorAll('.accordionContent');

    const count = accordionList.length;
    let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
    const lastTab = accordionList[accordionList.length - 1];

    for (let i = 0; i < accordionList.length; i++) {
      id.push(`accordion_${randomLetter(3)}${randomFloor(0, 999)}`);
    }

    const init = () => {
      accordionList.forEach((content) => content.classList.remove('active'));
      // 增加無障礙設置
      accordionList.forEach((item, index) => {
        accordionBtn[index].insertAdjacentHTML('beforeend', `<span class="accordionState">${open}</span>`);
        accordionBtn[index].insertAdjacentHTML('beforeend', `<span class="accordionArrow"></span>`);
        accordionBtn[index].setAttribute('aria-expanded', 'false');
        accordionBtn[index].setAttribute('aria-controls', id[index]);
        accordionBtn[index].setAttribute('role', 'button');
        accordionContent[index].setAttribute('id', id[index]);
        accordionContent[index].setAttribute('aria-labelledby', id[index]);
        accordionState = accordion.querySelectorAll('.accordionState');
      });

      if (nowIndex !== null) {
        accordionList[nowIndex].classList.add('active');
        accordionBtn[nowIndex].setAttribute('aria-expanded', 'true');
        jsSlideDown(accordionContent[nowIndex]);
        accordionState[nowIndex].textContent = close;
      }
    };

    init();

    // 預先展開模式
    function openCheck() {
      if (!openFirst && nowIndex !== null) {
        const siblings = Array.prototype.filter.call(accordionContent[nowIndex].parentElement.parentElement.children, (child) => {
          return child !== accordionContent[nowIndex].parentElement;
        });
        siblings.forEach((item) => jsSlideUp(item.querySelector('.accordionContent')));
      } else if (!openFirst && nowIndex === null) {
        accordionContent.forEach((item) => jsSlideUp(item));
      } else {
        accordionState.forEach((item) => (item.textContent = close));
        accordionContent.forEach((item) => jsSlideDown(item));
        // 預先展開模式
        openFirst ? accordionList.forEach((item) => item.classList.add('active')) : null;
      }
    }
    openCheck();

    accordionList.forEach((item, index) => {
      const itemAllTarget = accordionContent[index].querySelectorAll('a,button,input,textarea,select');
      const firstItem = [...itemAllTarget][0];
      const lastItem = [...itemAllTarget][itemAllTarget.length - 1];
      const prevItemAllTarget = accordionContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
      const siblings = Array.prototype.filter.call(accordionList[index].parentElement.children, (child) => {
        return child !== accordionList[index];
      });

      // 點擊
      if (openSwitch) {
        accordionBtn[index].addEventListener('click', (e) => {
          e.preventDefault();
          siblings.forEach((content) => content.classList.remove('active'));
          accordionList[index].classList.toggle('active');
          jsSlideToggle(accordionContent[index]);
          accordionState[index].textContent === close ? (accordionState[index].textContent = open) : (accordionState[index].textContent = close);

          nowIndex = index;

          if (autoClose) {
            siblings.forEach((con) => {
              jsSlideUp(con.querySelector('.accordionContent'));
              con.classList.remove('active');
              con.querySelector('.accordionBtn').setAttribute('aria-expanded', 'false');
            });
          }
        });

        // 鍵盤
        accordionBtn[index].addEventListener('keydown', function (e) {
          accordionList[index].classList.add('active');
          accordionState[index].textContent = close;
          nowIndex = index;

          if (autoClose & !openFirst) {
            siblings.forEach((con) => {
              siblings.forEach((content) => content.classList.remove('active'));
              jsSlideUp(con.querySelector('.accordionContent'));
              con.querySelector('.accordionState').textContent = open;
              con.classList.remove('active');
            });
          }

          if (e.which === 9 && !e.shiftKey) {
            jsSlideDown(accordionContent[index]);
            if (itemAllTarget.length > 0) {
              e.preventDefault();
              firstItem?.focus();
            } else if (itemAllTarget.length === 0) {
              accordionList[index + 1]?.focus();
            }
          } else if (e.which === 9 && e.shiftKey) {
            e.preventDefault();
            jsSlideDown(accordionContent[index]);
            if (itemAllTarget.length > 0) {
              lastItem?.focus();
            } else if (itemAllTarget.length === 0) {
              accordionBtn[index - 1]?.focus();
            }
          }
        });
      }

      // 內容鍵盤遊走
      itemAllTarget.forEach((n, i) => {
        if (n) {
          n.addEventListener('keydown', function (e) {
            if (e.which === 9 && e.shiftKey) {
              if (e.target === firstItem) {
                accordionBtn[index]?.focus();
              } else if (itemAllTarget.length === 0) {
                accordionBtn[index - 1]?.focus();
              }
            }
          });
        }
      });
    });
  }
}

// accordionFunction({
//   target: '.accordion',
//   openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
//   autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
//   openSwitch: true, // 是否可開合
//   index: 0, // 預設開啟第幾個
//   info: {
//     open: '展開', // 收合時顯示
//     close: '收合', // 展開時顯示
//   },
// });
// -----------------------------------------------------------------------
// -----   版型切換   -----------------------------------------------------
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// -----   swiper 箭頭設定 / 手機版主選單語系設定   ------------------------------------------------
// -----------------------------------------------------------------------
function langFunction(obj) {
  const nextClass = document.querySelectorAll(obj.swiper.next);
  const prevClass = document.querySelectorAll(obj.swiper.prev);
  const documentHtml = document.querySelector('html');
  const sidebarCtrlBtn = document.querySelector('.sidebarCtrlBtn');
  const searchCtrlBtn = document.querySelector('.searchCtrlBtn') || null;
  const webLang = documentHtml.getAttribute('lang');
  if (webLang) {
    obj.swiper.data.forEach((s) => {
      if (webLang.slice(0, 2) == s.lang) {
        nextClass.forEach((v) => v.setAttribute('title', s.nextText));
        prevClass.forEach((v) => v.setAttribute('title', s.prevText));
      } else {
        nextClass.forEach((v) => v.setAttribute('title', obj.swiper.default.nextText));
        prevClass.forEach((v) => v.setAttribute('title', obj.swiper.default.prevText));
      }
    });

    obj.mobileBtn.data.forEach((s) => {
      if (webLang.slice(0, 2) == s.lang) {
        sidebarCtrlBtn.textContent = s.text;
      } else {
        sidebarCtrlBtn.textContent = obj.mobileBtn.default;
      }
    });
  }
}

langFunction({
  swiper: {
    next: '.nextSlider',
    prev: '.prevSlider',
    data: [
      {
        lang: 'zh',
        nextText: '下一筆',
        prevText: '上一筆',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: {
      nextText: 'next',
      prevText: 'previous',
    },
  },
  mobileBtn: {
    data: [
      {
        lang: 'zh',
        text: '側欄選單',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: 'SideButton',
  },
  searchBtn: {
    data: [
      {
        lang: 'zh',
        text: '查詢',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: 'Search',
  },
});

function formEye(obj) {
  const documentHtml = document.querySelector('html');
  const webLang = documentHtml.getAttribute('lang');
  // form password eyes
  let checkEye = document.querySelectorAll('.passwordEye');
  checkEye.forEach((item) => {
    let passwordInput = item.parentNode.querySelector('[type="password"]');
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('hide')) {
        //換class / type
        e.target.classList.remove('hide');
        e.target.classList.add('show');
        if (webLang) {
          obj.password.data.forEach((s) => {
            if (webLang.slice(0, 2) == s.lang) {
              e.target.textContent = s.hide;
            }
          });
        }
        passwordInput.setAttribute('type', 'text');
      } else {
        passwordInput.setAttribute('type', 'password');
        e.target.classList.remove('show');
        e.target.classList.add('hide');
        e.target.textContent = obj.show;
        if (webLang) {
          obj.password.data.forEach((s) => {
            if (webLang.slice(0, 2) == s.lang) {
              e.target.textContent = s.show;
            }
          });
        }
      }
    });
  });
}

formEye({
  password: {
    data: [
      {
        lang: 'zh',
        show: '顯示密碼',
        hide: '隱藏密碼',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: {
      show: 'show',
      hide: 'hide',
    },
  },
});

// -----------------------------------------------------------------------
// -----   a標籤無障礙判斷   -----------------------------------------------
// -----------------------------------------------------------------------
// 2022/01/10
(function () {
  let a = document.querySelectorAll('a');
  a.forEach((item) => {
    if (!item.getAttribute('href')) {
      item.setAttribute('tabindex', 0);
    }
  });
})();

// -----------------------------------------------------------------------
// -----   fancyBox新增需要綁定才有效果   -----------------------------------
// -----------------------------------------------------------------------
if (document.querySelectorAll('[data-fancybox]').length > 0) {
  Fancybox.bind('[data-fancybox]', {
    l10n: Fancybox.l10n.zh_TW,
  });
}
