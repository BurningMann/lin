const mainSlider = document.querySelectorAll('.main-slider');
mainSlider.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    /* effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }, */

    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
  });
});

const objectsSLiders = document.querySelectorAll('.object-section .swiper');
objectsSLiders.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: '1',
    loop: false,
    speed: 700,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 'auto',
      },
    },
  });
});

const objectSLiderContainer = document.querySelectorAll('.object-slider-container');

objectSLiderContainer.forEach((el) => {
  const objectSLider = el.querySelector('.object-slider .swiper');
  /* const objectSLiderThumb = el.querySelector('.object-slider-thumbs .swiper'); */

  /*   const swiperThumb = new Swiper(objectSLiderThumb, {
    slidesPerView: 'auto',
    loop: true,
    speed: 700,
    spaceBetween: 30,
  }); */
  const swiper = new Swiper(objectSLider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: objectSLider.querySelector('.swiper-arrow.is-prev'),
      nextEl: objectSLider.querySelector('.swiper-arrow.is-next'),
    },
  });
});

const productsSLiders = document.querySelectorAll('.products-slider .swiper');
productsSLiders.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: '1',
    loop: false,
    speed: 700,
    spaceBetween: 30,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

const objectsSLiders2 = document.querySelectorAll('.objects-slider-2 .swiper');
objectsSLiders2.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: '1',
    loop: false,
    speed: 700,
    spaceBetween: 30,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

const newsSLiders = document.querySelectorAll('.news-slider .swiper');
newsSLiders.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: '1',
    loop: false,
    speed: 700,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

const reviewsSLiders = document.querySelectorAll('.reviews-slider .swiper');
reviewsSLiders.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: 3,
    loop: false,
    speed: 700,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
    pagination: {
      el: el.querySelector('.swiper__pagination'),
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 8,
      },
    },
  });
});

const productSLiderContainer = document.querySelectorAll('.product-slider-container');
productSLiderContainer.forEach((el) => {
  const objectSLider = el.querySelector('.product-slider .swiper');
  const objectSLiderThumb = el.querySelector('.product-slider-thumbs .swiper');

  const swiperThumb = new Swiper(objectSLiderThumb, {
    slidesPerView: '6',
    loop: true,
    speed: 700,
    spaceBetween: 20,
    navigation: {
      prevEl: el.querySelector('.swiper-arrow.is-prev'),
      nextEl: el.querySelector('.swiper-arrow.is-next'),
    },
  });
  const swiper = new Swiper(objectSLider, {
    slidesPerView: '1',
    loop: true,
    speed: 700,
    thumbs: {
      swiper: swiperThumb,
    },
  });
});
