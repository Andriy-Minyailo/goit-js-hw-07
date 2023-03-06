import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.map(({preview, original, description}) => 
        `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a></li>`).join("");

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });





