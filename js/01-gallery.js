import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onModalImage);

// ------I short code------
galleryContainer.innerHTML = galleryItems.map(({preview, original, description}) => 
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

// --------II long code-------
// GalleryCard(galleryItems);

// function GalleryCard (imeges) {
//     const galleryLayout = imeges.map(({preview, original, description}) => 
//         `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//     ).join("");
//     galleryContainer.innerHTML = galleryLayout;
// }

function onModalImage(event) {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
    return;
  }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`, {
      onShow: () => galleryContainer.addEventListener('keydown', onCloseModal),
      onClose: () => galleryContainer.removeEventListener('keydown', onCloseModal),
    }
    )
  instance.show();
  function onCloseModal(event) {
      if (event.key === 'Escape') {
    instance.close();
    }
  }
}

