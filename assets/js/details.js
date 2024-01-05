let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Villa/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML = `
    <div class="stay">     
        <div class="top">
            <img src="${data.image}" alt="">
        </div>
        <div class="bottom">
            <p>${data.desc}</p>
            <h2>${data.name}</h2>
        </div>
    </div>`
})

//--Back--//
let back = document.querySelector("#back");

back.addEventListener("click", ()=> {
    window.location = "./index.html"
})