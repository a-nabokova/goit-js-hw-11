// У файлі render-functions.js створено екземпляр SimpleLightbox та є функції для відображення елементів інтерфейсу: createGallery(images), clearGallery(),  showLoader(),  hideLoader()

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { loader } from '../main';
 
export const gallery = document.querySelector('.gallery');


  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });


export function createGallery(images) {
   const markup =  images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return ` <li class="gallery-item">
        <div class="photo-card">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${downloads}</span>
            </p>
          </div>
        </div>
      </li>`
     }
    ).join('');

      gallery.insertAdjacentHTML('beforeend', markup);


 lightbox.refresh();


}


export function clearGallery() {
    return gallery.innerHTML = '';
 
}

export function showLoader() {
     loader.classList.remove('hidden');

}

export function hideLoader() {
    loader.classList.add('hidden');
}