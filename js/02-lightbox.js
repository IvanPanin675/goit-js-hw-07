import { galleryItems } from './gallery-items.js';
// Change code below this line

const body = document.body;
const galleryEl = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({preview, original, description}) => 
 `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
)
.join("");
galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

console.log(galleryItems);
