// У файлі main.js описана вся логіка роботи додатку
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api'
import {createGallery } from './js/render-functions'
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';



const form = document.querySelector('.form');
const input = document.querySelector('.input-js');
export const loader = document.querySelector('.loader');

  
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 
    const valueToShow = input.value.trim();
     
    if (valueToShow === '') {
        iziToast.show({
          message: 'Please fill in the field',
          color: 'red',
          position: 'topRight',

        }) 
        return;
    }  

     clearGallery();
     showLoader();
    

    getImagesByQuery(valueToShow)
        .then((items) => {
            if (items.length === 0) {
            iziToast.show({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              color: 'red',
              position: 'topRight',
        });
        return;
            }
            createGallery(items);
        })
        .catch((error) => {
        iziToast.show({
        message: 'Something went wrong',
        color: 'red',
      });
    })
     
}
