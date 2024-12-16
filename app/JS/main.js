import "../CSS/style.css";
import {loveinterests} from "./items";

const dom = {
    cardbox: document.querySelector(".cardbox")

}



function characterroute(name, img, route, affectionlvl){
    let character = [
        {name: name,
         img: img,
         route: route,
         affection: affectionlvl
        }
    ]

    return character
}

function makecard(character){
    for (let i = 0; i<= character.length - 1; i++){
        dom.cardbox.insertAdjacentHTML("beforeend",
        `<div class = "card"> 
        <h1 class = "name">${character[i].name}</h1>
        <h5 class = "affectionlvl"> ${character[i].affectionlvl}</h5>
        <img src="${character[i].img}" alt="${character[i].name}" class = "image">
        </div>`
        )
    }
}


makecard(loveinterests)