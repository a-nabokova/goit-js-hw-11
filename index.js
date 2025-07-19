import{S as f,a as m,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery");function h(s){const o=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:u,comments:p,downloads:d})=>` <li class="gallery-item">
        <div class="photo-card">
          <a href="${e}" class="gallery-link">
            <img src="${i}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${n}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${u}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${p}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${d}</span>
            </p>
          </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),new f(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}function g(){return c.innerHTML=""}function y(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const L="43833288-fbb1d2e0a0a3e0585e57923e3";function v(s){return m("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o)}).finally(()=>{b()})}const w=document.querySelector(".form"),S=document.querySelector(".input-js"),l=document.querySelector(".loader");w.addEventListener("submit",P);function P(s){s.preventDefault();const o=S.value.trim();if(o===""){a.show({message:"Please fill in the field",color:"red",position:"topRight"});return}g(),y(),v(o).then(r=>{if(r.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}h(r)}).catch(r=>{a.show({message:"Something went wrong",color:"red"})})}
//# sourceMappingURL=index.js.map
