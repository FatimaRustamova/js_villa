//---Data---//
let villa = document.querySelector(".villa");
let page = 3;
let arr = [];
let search = document.querySelector("input[type=search]");

function getAllData() {
    fetch("http://localhost:3000/Villa")
    .then(res => res.json())
    .then(data => {
        villa.innerHTML = "";
        arr = arr.length || search.value ? arr : data;
        arr.slice(0, page).forEach((element)=> {
            villa.innerHTML += `
                <div class="stay">
                    <i class="bi bi-heart" onclick="goFavorite(${element.id})"></i>
                    <div class="top">
                        <img src="${element.image}" alt="">
                    </div>
                    <div class="bottom">
                        <p>${element.desc}</p>
                        <h2>${element.name}</h2>
                        <div class="btn">
                            <button onclick="viewDetails(${element.id})">View Details</button>
                            <button onclick="deleteEl(${element.id})">Delete</button>
                            <button onclick="updateEl(${element.id})">Update</button>
                        </div>
                    </div>
                </div>
            `
        })
    })
}

getAllData();

//--View Details--//
function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}

//--Delete--//
function deleteEl(id) {
    axios.delete(`http://localhost:3000/Villa/${id}`);
    window.location.reload();
}

//--Update--//
function updateEl(id) {
    window.location = `./update.html?id=${id}`
}

//--Favorite--//
function goFavorite(id) {
    axios.get(`http://localhost:3000/Villa/${id}`)
    .then(res => {
        axios.post("http://localhost:3000/Favorite", res.data);
        alert("Your chosen data has been sent Favorite page!")
    })
}

//---Load More--//
let load = document.querySelector("#load");

load.addEventListener("click", ()=>{
    if(load.innerText == "Load More"){
        page +=3;
        villa.innerHTML = "";
        getAllData();
        load.innerText = "Less More";
    }
    else{
        page -=3;
        villa.innerHTML = "";
        getAllData();
        load.innerText = "Load More";
    }
})

//--Search--//
search.addEventListener("input", (e)=> {
    arr = arr.filter((el)=> {
        el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    });
    getAllData();
})

//---Modal---//
let list = document.querySelector("#list");
let modal = document.querySelector(".modal");
let clos = document.querySelector("#clos");
let nav = document.querySelector("nav");

list.addEventListener("click", ()=> {
    modal.style.display = "flex";
    list.style.display = "none";
    nav.style.display = "none";
})

clos.addEventListener("click", ()=> {
    modal.style.display = "";
    list.style.display = "";
    nav.style.display = "";
})

//---Hurricane---//
let hurricane = document.querySelector(".hurricane");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 250){
        hurricane.style.visibility = "visible"
    }
    else{
        hurricane.style.visibility = ""
    }
})

hurricane.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})