import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__top');
const menuCatalogItem = document.querySelectorAll('.header .is-catalog');
const menuBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header__nav');

const navParrent = document.querySelectorAll('.header__nav-item.is-parrent');
const navCatalog = document.querySelectorAll('.header__nav-item.is-catalog');

const headerSearch = document.querySelector('.header__top .header__search');
const headerSearchInput = headerSearch.querySelector('.header__search-input');
const headerSearchIcon = headerSearch.querySelector('.header__search-icon');
const headerSearchHiddenBox = document.querySelector('.header__top-box.js-search-hidden');

navParrent.forEach((el) => {
  const handler = el.querySelector('.header__nav-item-link');
  handler.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const drop = el.querySelector('.header__nav-item-drop');

    if (drop.classList.contains('is-active')) {
      drop.classList.remove('is-active');
      setTimeout(() => {
        drop.style.maxHeight = '0';
      }, 0);
    } else {
      drop.style.maxHeight = drop.scrollHeight + 'px';
      setTimeout(() => {
        drop.classList.add('is-active');
      }, 300);
    }
  });
});

navCatalog.forEach((el) => {
  const handler = el.querySelector('.header__nav-item-link');
  handler.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const drop = el.querySelector('.header-catalog');

    if (drop.classList.contains('is-active')) {
      drop.classList.remove('is-active');
      setTimeout(() => {
        drop.style.maxHeight = '0';
      }, 0);
    } else {
      drop.style.maxHeight = drop.scrollHeight + 'px';
      setTimeout(() => {
        drop.classList.add('is-active');
      }, 300);
    }
  });
});

menuCatalogItem.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    header.classList.add('is-fill');
  });
  el.addEventListener('mouseout', (e) => {
    e.stopPropagation();
    header.classList.remove('is-fill');
  });
});

const mainSlider = document.querySelector('.main-slider');
const mainDirectionsSection = document.querySelector('.main-directions-section');
gsap.to('body', {
  scrollTrigger: {
    trigger: 'body',
    start: `top+=${window.innerHeight}px top`,
    end: `bottom bottom`,
    onEnter: () => {
      header.classList.add('is-fixed');
      if (mainSlider) {
        mainSlider.classList.add('is-hidden');
      }
      if (mainDirectionsSection) {
        mainDirectionsSection.style.height = `${window.innerHeight - (header.offsetHeight - headerTop.offsetHeight)}px`;
      }
    },
    onLeaveBack: () => {
      header.classList.remove('is-fixed');
      if (mainSlider) {
        mainSlider.classList.remove('is-hidden');
      }
    },
  },
});

/* gsap.to(mainDirectionsSection, {
  scrollTrigger: {
    trigger: mainDirectionsSection,
    start: `top top`,
    end: `bottom+=${window.innerHeight}px bottom`,
    markers: true,
    pin: true,
    scrub: 0.1,
  },
}); */

menuBurger.addEventListener('click', () => {
  if (menuBurger.classList.contains('is-active')) {
    window.showScrollBar();
    menuBurger.classList.remove('is-active');
    headerNav.classList.remove('is-active');
  } else {
    window.hideScrollBar();
    menuBurger.classList.add('is-active');
    headerNav.classList.add('is-active');
  }
});

if (document.querySelector('.page-heading-block.is-transparent')) {
  header.classList.add('is-main-fill');
}

if (document.querySelector('.main-page')) {
  header.classList.add('is-main-page-header');
}

const siblings = (el) => [].slice.call(el.parentNode.children).filter((child) => child !== el);
const catalogCol = document.querySelector('.header-catalog__col');
const catalogItems = document.querySelectorAll('.header-catalog__col-item');

catalogItems.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    if (innerWidth > 1024) {
      const active = catalogCol.querySelector('.header-catalog__col-item.is-active');
      if (active) {
        active.classList.remove('is-active');
      }

      el.classList.add('is-active');
    }
  });
});

catalogItems.forEach((el) => {
  const handler = el.querySelector('.header-catalog__col-item-link');
  if (innerWidth < 1024) {
    el.classList.remove('is-active');
  }

  handler.addEventListener('click', (e) => {
    if (innerWidth > 1024) {
      return false;
    }

    e.preventDefault();

    if (!el.classList.contains('is-active')) {
      const menuItem = el.closest('.header__nav-item.is-catalog');
      if (!menuItem) return false;

      siblings(menuItem).forEach((item) => {
        item.classList.add('hidden');
      });

      const menuItem2 = el.closest('.header-catalog__col-item');
      if (!menuItem2) return false;

      siblings(menuItem2).forEach((item) => {
        item.classList.add('hidden');
      });

      const parrentItem = el.closest('.header-catalog');

      if (parrentItem) {
        siblings(parrentItem).forEach((item) => {
          item.classList.add('hidden');
        });
      }

      const topBox = headerNav.querySelectorAll('.header__top-box');
      const mobileMore = headerNav.querySelector('.mobile-more');

      topBox.forEach((el) => {
        el.classList.add('hidden');
      });

      mobileMore.classList.add('hidden');

      el.classList.add('is-active');
    } else {
      const menuItem = el.closest('.header__nav-item.is-catalog');
      if (!menuItem) return false;

      siblings(menuItem).forEach((item) => {
        item.classList.remove('hidden');
      });

      const menuItem2 = el.closest('.header-catalog__col-item');
      if (!menuItem2) return false;

      siblings(menuItem2).forEach((item) => {
        item.classList.remove('hidden');
      });

      const parrentItem = el.closest('.header-catalog');

      if (parrentItem) {
        siblings(parrentItem).forEach((item) => {
          item.classList.remove('hidden');
        });
      }

      const topBox = headerNav.querySelectorAll('.header__top-box');
      const mobileMore = headerNav.querySelector('.mobile-more');

      topBox.forEach((el) => {
        el.classList.remove('hidden');
      });

      mobileMore.classList.remove('hidden');

      el.classList.remove('is-active');
    }
  });
});

let hidentimeout = null;
function showSearch() {
  headerSearchIcon.classList.add('is-active');
  headerSearchInput.classList.add('is-active');
  headerSearchHiddenBox.classList.add('hidden');
  clearTimeout(hidentimeout);
}

function hideSearch() {
  headerSearchIcon.classList.remove('is-active');
  headerSearchInput.classList.remove('is-active');
  hidentimeout = setTimeout(() => {
    headerSearchHiddenBox.classList.remove('hidden');
  }, 300);
}

headerSearch.addEventListener('mouseenter', (e) => {
  showSearch();
});
headerSearch.addEventListener('mouseleave', (e) => {
  hideSearch();
});
