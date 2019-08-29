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

    boom.classList.add("bang")
    console.log(`boom.classList.add("bang")`)

    sound.src = `./sounds/${drum}.wav`
    sound.play()

    setTimeout(()=>{
        boom.classList.remove("bang")
        console.log(`boom.classList.remove("bang")`)
    },100)
   
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









