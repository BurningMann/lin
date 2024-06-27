const popupButtons = document.querySelectorAll('[data-popup]');
const closePopup = document.querySelectorAll('.js-close-popup');
popupButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const popupSlug = el.dataset.popup;

    const popup = document.querySelector(`.${popupSlug}_popup`);
    if (popup) {
      popup.classList.add('is-active');
      window.hideScrollBar();
    }
  });
});

closePopup.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const popup = el.closest('.popup');
    if (popup) {
      popup.classList.remove('is-active');
      window.showScrollBar();
    }
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup') && !e.target.classList.contains('success_popup')) {
    e.target.classList.remove('is-active');
    window.showScrollBar();
  }
});

let toastTimeout = null;
window.activateSuccessPopup = (text, delay) => {
  const popup = document.querySelector('.success_popup');
  if (!popup) return false;

  const toastText = popup.querySelector('.success-popup-message');
  toastText.innerHTML = text;
  popup.classList.add('is-active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    popup.classList.remove('is-active');
    setTimeout(() => {
      toastText.innerHTML = '';
    }, 300);
  }, delay);
};
