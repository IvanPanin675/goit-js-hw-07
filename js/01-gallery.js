import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({preview, description}) => 
 `   <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`
)
.join("");
galleryEl.insertAdjacentHTML("afterbegin", markupGallery);
galleryEl.addEventListener("click", (event) => {
    event.preventDefault();
  });
console.log(galleryItems);
