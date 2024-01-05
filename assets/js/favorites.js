let favorite = document.querySelector("#favorites");

fetch("http://localhost:3000/Favorite")
.then(res => res.json())
.then(data => {
    data.forEach((element)=> {
        favorite.innerHTML += `
            <div class="stay">
                <i class="bi bi-heart-fill"></i>
                <div class="top">
                    <img src="${element.image}" alt="">
                </div>
                <div class="bottom">
                    <p>${element.desc}</p>
                    <h2>${element.name}</h2>
                    <div class="btn">
                        <button onclick="deleteFav(${element.id})">Delete</button>
                    </div>
                </div>
            </div>
        `
    })
})

function deleteFav(id) {
    axios.delete(`http://localhost:3000/Favorite/${id}`);
    window.location.reload();
}

//--Back--//
let back = document.querySelector("#back");

back.addEventListener("click", ()=> {
    window.location = "./index.html"
})