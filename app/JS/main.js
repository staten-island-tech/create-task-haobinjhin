import "../CSS/style.css";
import {loveinterests} from "../JS/items.js";
import { datingsimroute } from "../JS/luvinterestroute.js";

const dom = {
    cardbox: document.querySelector(".cardbox"),
    goback: document.querySelector("#back"),
    malebtn: document.querySelector("#male"),
    femalebtn: document.querySelector("#female"),
    nonbinarybtn: document.querySelector("#nonbinary"),

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
    makeroutescenario1(character)
    upadatecard()
}

function optionmakerscenario1(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt1scenario2(character)})
    option2.addEventListener('click', () => {makerouteopt2scenario2(character)})
    option3.addEventListener('click', () => {makerouteopt3scenario2(character)})
}

function optionmakeropt1scenario2(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt1scenario2opt1final(character)})
    option2.addEventListener('click', () => {makerouteopt1scenario2opt2final(character)})
    option3.addEventListener('click', () => {makerouteopt1scenario2opt3final(character)})

}

function optionmakeropt2scenario2(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt2scenario2opt1final(character)})
    option2.addEventListener('click', () => {makerouteopt2scenario2opt2final(character)})
    option3.addEventListener('click', () => {makerouteopt2scenario2opt3final(character)})

}

function optionmakeropt3scenario2(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt3scenario2opt1final(character)})
    option2.addEventListener('click', () => {makerouteopt3scenario2opt2final(character)})
    option3.addEventListener('click', () => {makerouteopt3scenario2opt3final(character)})

}

function optionmakeropt1scenario2opt1final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt1scenario2opt1finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt1scenario2opt1finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt1scenario2opt1finalscenarioopt3ending(character)})

}

function optionmakeropt1scenario2opt2final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt1scenario2opt2finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt1scenario2opt2finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt1scenario2opt2finalscenarioopt3ending(character)})

}

function optionmakeropt1scenario2opt3final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt1scenario2opt3finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt1scenario2opt3finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt1scenario2opt3finalscenarioopt3ending(character)})

}

function optionmakeropt2scenario2opt1final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt2scenario2opt1finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt2scenario2opt1finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt2scenario2opt1finalscenarioopt3ending(character)})

}

function optionmakeropt2scenario2opt2final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt2scenario2opt2finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt2scenario2opt2finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt2scenario2opt2finalscenarioopt3ending(character)})

}

function optionmakeropt2scenario2opt3final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt2scenario2opt3finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt2scenario2opt3finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt2scenario2opt3finalscenarioopt3ending(character)})

}

function optionmakeropt3scenario2opt1final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt3scenario2opt1finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt3scenario2opt1finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt3scenario2opt1finalscenarioopt3ending(character)})

}

function optionmakeropt3scenario2opt2final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt3scenario2opt2finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt3scenario2opt2finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt3scenario2opt2finalscenarioopt3ending(character)})

}

function optionmakeropt3scenario2opt3final(character){
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')

    option1.addEventListener('click', () => {makerouteopt3scenario2opt3finalscenarioopt1ending(character)})
    option2.addEventListener('click', () => {makerouteopt3scenario2opt3finalscenarioopt2ending(character)})
    option3.addEventListener('click', () => {makerouteopt3scenario2opt3finalscenarioopt3ending(character)})

}

function upadatecard(){
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {card.addEventListener("click", function(){chosenroute(card)})})
}

function makeroutescenario1(character){

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakerscenario1(character)
 }

function makerouteopt1scenario2(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt1scenario2[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt1scenario2[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt1scenario2[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt1scenario2[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt1scenario2(character)
}

function makerouteopt2scenario2(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt2scenario2[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt2scenario2[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt2scenario2[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt2scenario2[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt2scenario2(character)
}

function makerouteopt3scenario2(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt3scenario2[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt3scenario2[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt3scenario2[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt3scenario2[0].options[2]}</button>
    </div>` )
        }
    }
    optionmakeropt3scenario2(character)

}

function makerouteopt1scenario2opt1final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt1finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt1finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt1finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt1finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt1scenario2opt1final(character)

}

function makerouteopt1scenario2opt2final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt2finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt2finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt2finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt2finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt1scenario2opt2final(character)

}

function makerouteopt1scenario2opt3final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt3finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt3finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt3finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt1scenario2[0].opt1scenario2opt3finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt1scenario2opt3final(character)

}

function makerouteopt2scenario2opt1final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt1finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt1finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt1finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt1finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt2scenario2opt1final(character)

}

function makerouteopt2scenario2opt2final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt2finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt2finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt2finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt2finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt2scenario2opt2final(character)

}

function makerouteopt2scenario2opt3final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt3finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt3finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt3finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt2scenario2[0].opt2scenario2opt3finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt2scenario2opt3final(character)

}

function makerouteopt3scenario2opt1final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt1finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt1finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt1finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt1finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt3scenario2opt1final(character)

}

function makerouteopt3scenario2opt2final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt2finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt2finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt2finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt2finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt3scenario2opt2final(character)

}

function makerouteopt3scenario2opt3final(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt3finalscenario[0].scenario}</h1>
    <button class = 'option' id = 'option1'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt3finalscenario[0].options[0]}</button>
    <button class = 'option' id = 'option2'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt3finalscenario[0].options[1]}</button>
    <button class = 'option' id = 'option3'>${datingsimroute[i].route[0].opt3scenario2[0].opt3scenario2opt3finalscenario[0].options[2]}</button>
    </div>` )
        }
    }

    optionmakeropt3scenario2opt3final(character)

}


function makerouteopt1scenario2opt1finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt1finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt1finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt1finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt1finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt1finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt2finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt2finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt2finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt2finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt2finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt2finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt3finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt3finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt3finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt3finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt1scenario2opt3finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt1scenario2opt3finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt1finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt1finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt1finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt1finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt1finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt1finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt2finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt2finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt2finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt2finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt2finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt2finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt3finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt3finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt3finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt3finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt2scenario2opt3finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt2scenario2opt3finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt1finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt1finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt1finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt1finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt1finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt1finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt2finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt2finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt2finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt2finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt2finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt2finalscenarioopt3ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt3finalscenarioopt1ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt3finalscenarioopt1ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt3finalscenarioopt2ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt3finalscenarioopt2ending}</h1>
    </div>` )
        }
    }

}

function makerouteopt3scenario2opt3finalscenarioopt3ending(character){

    let prevscenario = document.querySelector('.scenerio')
    prevscenario.remove()

    for (let i = 0; i< datingsimroute.length; i++){
        if(datingsimroute[i].route[0].name == character){
            dom.cardbox.insertAdjacentHTML("beforeend", 
    `<div class="scenerio">
    <h1 id="character">${datingsimroute[i].opt3scenario2opt3finalscenarioopt3ending}</h1>
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
