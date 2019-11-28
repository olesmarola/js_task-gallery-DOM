'use strict';

// eslint-disable-next-line no-shadow
function changeImg(event) {
  const img = event.target.closest('img');

  if (!img || !list.contains(img)) {
    return;
  }

  const largeImg = document.querySelector('.gallery__large-img');

  largeImg.src = img.src.replace('-thumb.jpeg', '.png');
  largeImg.alt = img.alt;
  event.preventDefault();
}

const list = document.querySelector('#thumbs');

list.addEventListener('click', changeImg);
