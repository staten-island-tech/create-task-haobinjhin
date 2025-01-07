import "../CSS/style.css";
import {loveinterests} from "../JS/items.js";
import { datingsimroute } from "../JS/luvinterestroute.js";

const dom = {
    cardbox: document.querySelector(".cardbox"),
    goback: document.querySelector("#back"),
    malebtn: document.querySelector("#male"),
    femalebtn: document.querySelector("#female"),
    nonbinarybtn: document.querySelector("#nonbinary"),
    option1btn: document.querySelector('#option1'),
    option2btn: document.querySelector('#option2'),
    option3btn: document.querySelector('#option3'),
}




function makecard(character){
    
    for (let i = 0; i<= character.length - 1; i++){
        dom.cardbox.insertAdjacentHTML("beforeend",
        `
        <button class = "card" id = "${character[i].name}"> 
        <h1 class = "name">${character[i].name}</h1>
        <h5 class = "affectionlvl"> ${character[i].affectionlvl}</h5>
        <h5 class = "gender"> ${character[i].gender}</h5>
        <h5 class = "maplocation"> ${character[i].maplocation}</h5>
        <img src="${character[i].img}" alt="${character[i].name}" class = "img">
        </button>`
        
        )
    }

    upadatecard()

}








function chosenroute(interest){
    let character = []
    character.push(interest.querySelector(".name").innerHTML)
    loveinterests.forEach((luv) => {
        if (luv.name == character[0]){
            dom.cardbox.innerHTML = " "
            dom.cardbox.insertAdjacentElement("beforeend", interest)
        }}
)
    makeroute(character)

    upadatecard()
}

function upadatecard(){
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {card.addEventListener("click", function(){chosenroute(card)})})
}

function makeroute(character){

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1>${datingsimroute[i].route[0].scenario}</h1>
    <button id = 'option1'>${datingsimroute[i].route[0].options[0]}</button>
    <button id = 'option2'>${datingsimroute[i].route[0].options[1]}</button>
    <button id = 'option3'>${datingsimroute[i].route[0].options[2]}</button>
    </div>` )
        }
    }
 }




makecard(loveinterests)



dom.goback.addEventListener("click", function(){
    dom.cardbox.innerHTML = " "
    makecard(loveinterests)})

dom.malebtn.addEventListener("click", function(){
    dom.cardbox.innerHTML = " "
    loveinterests.forEach((luv) => {
        if (luv.gender == "Male"){
            let characters = []
            characters.push(luv)
            makecard(characters)
        }
    })
})

dom.femalebtn.addEventListener("click", function(){
    dom.cardbox.innerHTML = " "
    loveinterests.forEach((luv) => {
        if (luv.gender == "Female"){
            let characters = []
            characters.push(luv)
            makecard(characters)
        }
    })
})

dom.nonbinarybtn.addEventListener("click", function(){
    dom.cardbox.innerHTML = " "
    loveinterests.forEach((luv) => {
        if (luv.gender == "Non-Binary"){
            let characters = []
            characters.push(luv)
            makecard(characters)
        }
    })
})

console.log(datingsimroute.length)