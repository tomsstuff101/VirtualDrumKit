const boom = document.getElementById('boom')
const clap = document.getElementById('clap')
const hihat = document.getElementById('hihat')
const kick = document.getElementById('kick')
const openhat = document.getElementById('openhat')
const ride = document.getElementById('ride')
const snare = document.getElementById('snare')
const tink = document.getElementById('tink')
const tom = document.getElementById('tom')

// const body = document.querySelector('body')


// Play drum by keyboard press

const sound = new Audio();  


// every drum has a sound, a style
// also may wish to change the overall drum kit

// class noise {
//     constructor(drumType){
//         this.drumType = drumType
//     }

// }

const makeDrum = (drum) =>{
    console.log(`key pressed --> ${drum}`)

    sound.src = `./sounds/${drum}.wav`
    sound.play()
    // `${drum}`.style.backgroundColor = "red"
    // `${drum}`.style.color = "white"

    boom.classList.toggle("bang")  // TEMP: only for boom at the mo !
    
}




document.addEventListener("keydown", (event) => {

        switch(event.key) {
            case "q":
                    makeDrum('boom')
            break;

            case "w":
                    makeDrum('clap')
            break;

            case "e":
                    makeDrum('clap')
            break;

            case "r":
                    makeDrum('kick')
            break;

            case "t":
                    makeDrum('openhat')
            break;

            case "y":
                    makeDrum('ride')
            break;

            case "u":
                    makeDrum('snare')
            break;

            case "i":
                    makeDrum('tink')
            break;

            case "o":
                    makeDrum('tom')
            break;

            default:
                console.log(`non-drum key pressed --> ${event.key}`)
        }
  })









