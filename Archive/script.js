import planets from './planets.js'
const image = document.getElementById("image-container");
const name = document.getElementById("planetName");
const mass = document.getElementById("planetMass");
const rings = document.getElementById("rings");
const des = document.getElementById("des");

const btnPrev = document.querySelector(".btn.previous");
const btnNext = document.querySelector(".btn.next");

let counter = 0;

function showItem(){
    const item = planets[counter];
    image.src = item.image;
    name.textContent = "Name: "+item.name;
    mass.textContent = "Mass: "+item.mass;
    rings.textContent = "Rings: "+item.hasRings;
    des.textContent = item.description;
}

document.addEventListener("DOMContentLoaded", ()=>{
    showItem();
});

btnPrev.addEventListener('click', ()=>{
    counter--;
    if (counter < 0){
        counter = planets.length -1;
    }
    showItem();
});

btnNext.addEventListener('click', ()=>{
    counter++;
    if (counter > planets.length-1){
        counter = 0;
    }
    showItem();
});

