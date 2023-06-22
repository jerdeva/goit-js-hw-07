import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');


function createMarkupItems(arr) {
  return arr
    .map(
      ({ original, description, preview }) =>
        `<li class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`
    )
    .join('')
}


galleryList.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));

console.log(galleryItems);
