import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import tippy from 'tippy.js';

gsap.registerPlugin(ScrollTrigger);

window.showScrollBar = () => {
  window.lenis = new Lenis();
  document.querySelector('html').classList.remove('noskroll');
  document.querySelector('body').classList.remove('noskroll');

  window.lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

window.hideScrollBar = () => {
  window.lenis.destroy();
  document.querySelector('html').classList.add('noskroll');
  document.querySelector('body').classList.add('noskroll');
};

setTimeout(() => {
  window.showScrollBar();
}, 0);

/* navigation */
const navLinks = document.querySelectorAll('.js-navigate-link');
navLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const id = el.getAttribute('href')?.slice(1);
    if (!id) return;
    const offset = el.dataset.headerOffset ? 0 - document.querySelector('.header').offsetHeight : 0;
    const target = id === 'start' ? document.querySelector('body') : document.getElementById(id);
    window.lenis.scrollTo(target, { offset });
  });
});

Fancybox.bind('[data-fancybox]', {
  Hash: false,
});

tippy('[data-tippy-content]');

/* Accordion */

function accordionOpen(header, content) {
  header.classList.add('is-active');
  content.style.maxHeight = content.scrollHeight + 'px';
  setTimeout(() => {
    content.classList.add('is-active');
  }, 300);
}

function accordionClose(header, content) {
  content.classList.remove('is-active');
  header.classList.remove('is-active');
  setTimeout(() => {
    content.style.maxHeight = '0';
  }, 0);
}

/* function accordionToggle(header, content) {
  if (header.classList.contains('is-active')) {
    content.classList.remove('is-active');
    header.classList.remove('is-active');
    setTimeout(() => {
      content.style.maxHeight = '0';
    }, 0);
  } else {
    header.classList.add('is-active');
    content.style.maxHeight = content.scrollHeight + 'px';
    setTimeout(() => {
      content.classList.add('is-active');
    }, 300);
  }
} */

function filterAccordionToggle(items, status) {
  items.forEach((el) => {
    const header = el.querySelector('.js-accordion-item-header');
    const content = el.querySelector('.js-accordion-item__content');
    if (!header && !content) return false;
    if (status) {
      accordionClose(header, content);
    } else {
      accordionOpen(header, content);
    }
  });
}

(() => {
  const accordionItems = document.querySelectorAll('.js-accordion-item');
  accordionItems.forEach((el) => {
    const header = el.querySelector('.js-accordion-item-header');
    const content = el.querySelector('.js-accordion-item__content');
    if (!header && !content) return false;
    header.addEventListener('click', () => {
      if (window.innerWidth > 1024 && header.classList.contains('is-large')) {
        const innerItems = content.querySelectorAll('.js-accordion-item');
        filterAccordionToggle(innerItems, header.classList.contains('is-active'));
        header.classList.toggle('is-active');
      } else if (!header.classList.contains('is-active')) {
        accordionOpen(header, content);
      } else if (header.classList.contains('is-active')) {
        accordionClose(header, content);
      }
    });
    if (el.classList.contains('is-default-open') && window.innerWidth > 1024) {
      accordionOpen(header, content);
    }
  });
})();

/* Tabs */
(() => {
  const tabsSections = document.querySelectorAll('.tabs');
  tabsSections.forEach((el) => {
    const tabBtn = el.querySelectorAll('.tabs__button');
    const content = el.querySelector('.tabs__content');

    tabBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        if (!tabId) return false;

        if (el.querySelector('.tabs__button.is-active')) {
          el.querySelector('.tabs__button.is-active').classList.remove('is-active');
        }

        btn.classList.add('is-active');

        const result = content.querySelector(`.is-tab-${tabId}`);

        if (el.querySelector('.tabs__content-box.is-active')) {
          el.querySelector('.tabs__content-box.is-active').classList.remove('is-active');
        }

        if (!result) return false;

        result.classList.add('is-active');
      });
    });
  });
})();

/* toTop btn */
(() => {
  const btn = document.querySelectorAll('.to-top');
  btn.forEach((el) => {
    el.addEventListener('click', () => {
      window.lenis.scrollTo(document.querySelector('body'));
    });

    gsap.to('body', {
      scrollTrigger: {
        trigger: 'body',
        start: `top+=${window.innerHeight}px top`,
        end: `bottom bottom`,
        onEnter: () => {
          el.classList.add('is-visible');
        },
        onLeaveBack: () => {
          el.classList.remove('is-visible');
        },
      },
    });
  });
})();

(() => {
  const catalogGrid = document.querySelector('.catalog-grid');
  const container = document.querySelector('.catalog-grid-type');
  if (!container) return false;
  const items = container.querySelectorAll('.catalog-grid-type__item');
  items.forEach((el) => {
    el.addEventListener('click', () => {
      const type = el.dataset.type;
      container.querySelector('.is-active').classList.remove('is-active');
      el.classList.add('is-active');
      if (type === 'grid') {
        catalogGrid.classList.remove(`is-list`);
      } else {
        catalogGrid.classList.add(`is-list`);
      }
    });
  });
})();

/* Select */

if (typeof require !== 'undefined') {
  var customSelect = require('custom-select').default;
}
const mySelects = customSelect('select');

/* Zoom IMage */
const productSliderImages = document.querySelectorAll('.js-zoom');
productSliderImages.forEach((el) => {
  new ImageZoom(el, {
    /* offset: { vertical: 50, horizontal: 10 }, */
    zoomPosition: 'original',
    /* scale: '2', */
    /*  height: 233,
    width: 350, */
  });
});

/* Start phone mask */

import { MaskInput } from 'maska';

(() => {
  const maskList = [
    {
      name: 'Russia',
      code: '+7',
      iso: 'RU',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/ru.svg',
      mask: '(###)###-##-##',
    },
    /*     {
      name: 'Belarus',
      code: '+375',
      iso: 'BY',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/by.svg',
      mask: '(##)###-##-##',
    }, */
  ];

  const phoneInputs = document.querySelectorAll('.phone-input');

  phoneInputs.forEach((el) => {
    const input = el.querySelector('.input');
    /*  const dropdown = el.querySelector('.phone-input__mask-switch-dropdown');
    const current = el.querySelector('.phone-input__mask-switch-current'); */
    let mask = null;
    function setMask(maskItem) {
      mask = new MaskInput(input, {
        mask: `${maskItem.code}${maskItem.mask}`,
        eager: true,
        onMaska: (detail) => {
          if (detail.completed) {
            el.classList.add('is-valid');
          } else {
            el.classList.remove('is-valid');
          }
        },
      });
    }
    setMask(maskList[0]);

    /*     maskList.forEach((item) => {
      var div = document.createElement('div');
      div.innerHTML = `<div class="phone-input__dropdown-item"><img src="${item.flag}" class="phone-input__main-icon"> ${item.name} ${item.code}</div>`;
      dropdown.appendChild(div);

      div.addEventListener('click', (e) => {
        current.innerHTML = `<img src="${item.flag}" class="phone-input__main-icon">`;
        input.value = '+';
        mask.destroy();
        setMask(item);
      });
    });
    current.innerHTML = `<img src="${maskList[0].flag}" class="phone-input__main-icon">`; */

    /*     current.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('is-active');
    }); */

    input.addEventListener('focus', () => {
      if (!input.value) {
        input.value = '+';
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.phone-input__mask-switch')) {
      document
        .querySelectorAll('.phone-input__mask-switch-dropdown.is-active')
        .forEach((el) => el.classList.remove('is-active'));
    }
  });
})();

(() => {
  const productSection1 = document.querySelector('.product-page__main-info');
  const teleportTarget = document.querySelector('.product-page-tabs');

  if (!productSection1 && !teleportTarget) return false;

  var parentDiv = teleportTarget.parentNode;
  if (window.innerWidth <= 1024) {
    parentDiv.insertBefore(productSection1, teleportTarget);
  }
})();

import './import/modules';
import './import/components';
import './components/sliders';
import './components/map';
