import { galleryItems } from './gallery-items.js';
// Change code below this line

const body = document.body;
const galleryEl = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({preview, original, description}) => 
 `<li class="gallery__item">
    <a class="gallery__link"  href="${original}">
      <img
        loading="lazy" 
        width="354" 
        height="240"
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
)
.join("");
galleryEl.insertAdjacentHTML("afterbegin", markupGallery);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});


console.log(galleryItems);
