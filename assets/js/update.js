let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("form");
let image = document.querySelector("#img");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let name = document.querySelector("#name");

fetch(`http://localhost:3000/Villa/${id}`)
.then(res => res.json())
.then(data => {
    image.src = data.image;
    desc.value = data.desc;
    name.value = data.name
})

file.addEventListener("input", (e)=> {
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=> {
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {
        image: image.src,
        desc: desc.value,
        name: name.value
    }
    axios.patch(`http://localhost:3000/Villa/${id}`, obj)
    .then(res => {
        window.location = "./index.html"
    })
})

//--Back--//
let back = document.querySelector("#back");

back.addEventListener("click", ()=> {
    window.location = "./index.html"
})