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

    return console.log(character)
}

function makecard(character){
    for (let i = 0; i<= loveinterests.length; i++){
        dom.cardbox.insertAdjacentHTML("beforeend",
            ""
        )


    }
}
