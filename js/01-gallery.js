import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createMarkupItems(arr) {
  return arr
    .map(
      ({ original, description, preview }) =>
        `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`
    )
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));

galleryList.addEventListener('click', hadlerClickCard);

function hadlerClickCard() {
  console.log('It was click in the card');
}

galleryList.onclick = event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox
    .create(
      `
        <img width = "1400" height= "900" src ="${event.target.dataset.source}">`
    )
    .show();

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
};
