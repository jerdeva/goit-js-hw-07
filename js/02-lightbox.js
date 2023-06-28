import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ original, description, preview }) =>
      `      <li class="gallery__item">
   <a class="gallery__link"  href="${original}" title=""${description}>
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt
                  title = "${description}" />
   </a>
</li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a');


galleryList.onclick = event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      gallery.close();
    }
  });
};
