import "../CSS/style.css";
import {loveinterests} from "./items";

const dom = {
    cardbox: document.querySelector(".cardbox"),
    goback: document.querySelector(".back")

}

/* function characterroute(card){
    
    const name = card.querySelector(".name").innerText;
    const affectionlvl = card.querySelector(".affectionlvl").innerText;
    const gender = card.querySelector(".gender").innerText;
    const maplocation = card.querySelector(".maplocation").innerText;
    const img = card.querySelector(".image").src;

    let character = [
        {name: name,
        affectionlvl: affectionlvl,
        img: img,
        route: "",
        gender: gender,
        maplocation: maplocation,
        }
    ]

    return character
} */


function makecard(character){
    for (let i = 0; i<= character.length - 1; i++){
        dom.cardbox.insertAdjacentHTML("beforeend",
        `
        <button class = "card" id = "${character[i].name}"> 
        <h1 class = "name">${character[i].name}</h1>
        <h5 class = "affectionlvl"> ${character[i].affectionlvl}</h5>
        <h5 class = "gender"> ${character[i].gender}</h5>
        <h5 class = "maplocation"> ${character[i].maplocation}</h5>
        <img src="${character[i].img}" alt="${character[i].name}" class = "image">
        </button>`
        )
    }
}



makecard(loveinterests)
const cards = document.querySelectorAll(".card")



function chosenroute(interest){
    let character = []
    character.push(interest.querySelector(".name").innerHTML)
    loveinterests.forEach((luv) => {
        if (luv.name == character[0]){
            dom.cardbox.innerHTML = " "
            dom.cardbox.insertAdjacentElement("beforeend", interest)
            
        }
    })
}




cards.forEach((card) => {card.addEventListener("click", function(){chosenroute(card)})})