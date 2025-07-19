import{S as d,a as f,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),m=new d(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function h(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:p})=>` <li class="gallery-item">
        <div class="photo-card">
          <a href="${i}" class="gallery-link">
            <img src="${r}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span class="info-span">${t}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span class="info-span">${n}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span class="info-span">${u}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span class="info-span">${p}</span>
            </p>
          </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){return c.innerHTML=""}function g(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const L="43833288-fbb1d2e0a0a3e0585e57923e3";function v(s){return f("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o)}).finally(()=>{b()})}const w=document.querySelector(".form"),S=document.querySelector(".input-js"),l=document.querySelector(".loader");w.addEventListener("submit",P);function P(s){s.preventDefault();const o=S.value.trim();if(o===""){a.show({message:"Please fill in the field",color:"red",position:"topRight"});return}y(),g(),v(o).then(r=>{if(r.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}h(r)}).catch(r=>{a.show({message:"Something went wrong",color:"red"})})}
//# sourceMappingURL=index.js.map
