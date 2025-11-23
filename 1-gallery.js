import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as g,S as d,i}from"./assets/vendor-T30tK-qB.js";const y="https://pixabay.com/api/",h="53361848-9c0672c52b1512c0ed401e412";async function f(a){const s={key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:e}=await g.get(y,{params:s});return e}const l=document.querySelector(".gallery"),n=document.querySelector(".loader"),b=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(a){const s=a.map(({webformatURL:e,largeImageURL:o,tags:t,likes:c,views:m,comments:p,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${e}" alt="${t}" loading="lazy" />
        </a>
        <div class="meta">
          <div class="meta-item">
            <span class="meta-label">Likes</span>
            <span class="meta-value">${c}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Views</span>
            <span class="meta-value">${m}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Comments</span>
            <span class="meta-value">${p}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Downloads</span>
            <span class="meta-value">${u}</span>
          </div>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),b.refresh()}function w(){l.innerHTML=""}function L(){n.classList.remove("hidden"),n.setAttribute("aria-busy","true")}function S(){n.classList.add("hidden"),n.setAttribute("aria-busy","false")}const r=document.querySelector(".form");r.addEventListener("submit",async a=>{a.preventDefault();const e=(new FormData(r).get("search-text")||"").trim();if(!e){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight",timeout:2500});return}L(),w();try{const o=await f(encodeURIComponent(e)),{hits:t=[]}=o;if(!t.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fafafb",messageSize:"16",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3,maxWidth:432});return}v(t),i.success({title:"Success",message:`Found ${t.length} images for "${e}".`,position:"topRight",timeout:2e3})}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{S(),r.reset()}});
//# sourceMappingURL=1-gallery.js.map
