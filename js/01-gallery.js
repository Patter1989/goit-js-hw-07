import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
function newGalleryList(items) {
  return items
		.map(
			(item) => `<li class="gallery__item">
  <a class="gallery__link" href = ${item.original}>
  <img class="gallery__image"
  src = '${item.preview}'
  data-source = '${item.original}'
  alt = '${item.description}'/>
  </a>
  </li>`
		)
		.join("");
}

const addGalleryMarkup = newGalleryList(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;
galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  blockAction(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
		`<img src = '${event.target.dataset.source}'>`
	);
  instance.show();


  galleryEl.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
function blockAction(event) {
  event.preventDefault();
};


