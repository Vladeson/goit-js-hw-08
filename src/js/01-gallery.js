import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery")

gallery.style.listStyleType = "none";

galleryItems.forEach(({preview, original, description})=> {
    gallery.insertAdjacentHTML("beforeend", 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`)
})

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});

gallery.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }

    lightbox.open()
})

console.log(galleryItems);
