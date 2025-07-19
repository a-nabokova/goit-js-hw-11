//  У файлі  pixabay-api.js є функція getImagesByQuery(query) для виконання HTTP-запитів. Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.


 import axios from "axios";

const API_KEY = '43833288-fbb1d2e0a0a3e0585e57923e3'; 

import { createGallery } from '../js/render-functions';
import { hideLoader } from "../js/render-functions";
 
export function getImagesByQuery(query) {

    

   return axios('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(res => {
            const items = res.data.hits; 
            return items; 
            
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
        hideLoader()
    })
    
    

}