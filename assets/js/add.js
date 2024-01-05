let form = document.querySelector("form");
let image = document.querySelector("#img");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let name = document.querySelector("#name");

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

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let obj = {};
    let reader = new FileReader();
    let src = file.files[0];
    reader.onload = (e)=> {
        obj = {
            image: e.target.result,
            desc: desc.value,
            name: name.value
        }
        axios.post("http://localhost:3000/Villa", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    reader.readAsDataURL(src);
})

//--Back--//
let back = document.querySelector("#back");

back.addEventListener("click", ()=> {
    window.location = "./index.html"
})