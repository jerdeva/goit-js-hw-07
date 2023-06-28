import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ original, description, preview }) =>
      `      <li class="gallery__item">
          <a class="gallery__link" href="${original}" >
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt = "${description}" />
   </a>
</li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
