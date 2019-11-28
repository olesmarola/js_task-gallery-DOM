'use strict';

// eslint-disable-next-line no-shadow
function changeImg(event) {
  const img = event.target.closest('img');
  const link = event.target.closest('a');

  if (!img || !list.contains(img)) {
    return;
  }

  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = link.href;
  largeImg.alt = link.title;
  event.preventDefault();
}

const list = document.querySelector('#thumbs');

list.addEventListener('click', changeImg);
