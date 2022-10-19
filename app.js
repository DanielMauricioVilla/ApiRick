const input = document.getElementById("filter");
const cardContainer = document.getElementById("character");


window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://rickandmortyapi.com/api/character';
    dataRequest(URL)
})

input.addEventListener("keyup", () => {
    let URLF = `https://rickandmortyapi.com/api/character/?name=${input.value}`
    dataRequest(URLF);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        cardContainer.textContent=(null)
        data.results.map( element => createCards(element));
    });
}


function createCards(element) {
    const containerText = document.createElement ("div")
    const card = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const gender = document.createElement("p");
    const origin = document.createElement ("p")
    
    img.src = element.image;
    img.setAttribute('alt', element.name);
    name.textContent = element.name;
    gender.textContent = element.gender;
    origin.textContent =element.origin.name;
    
    containerText.classList = "divText";
    card.classList = "divCard";
    
    containerText.appendChild(name);
    containerText.appendChild(gender);
    containerText.appendChild(origin);
    card.appendChild(img);
    card.appendChild(containerText);
    cardContainer.appendChild(card);
}