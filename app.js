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



const makeDrum = (drum, theElementObject) =>{
    console.log(`key pressed --> ${drum}`)

    theElementObject.classList.add("bang")
    console.log(`boom.classList.add("bang")`)

    sound.src = `./sounds/${drum}.wav`
    sound.play()

    setTimeout(()=>{
        theElementObject.classList.remove("bang")
        console.log(`boom.classList.remove("bang")`)
    },100)
   
}





document.addEventListener("keydown", (event) => {

        switch(event.key) {
            case "q":
                    makeDrum('boom', boom)
            break;

            case "w":
                    makeDrum('clap', clap)
            break;

            case "e":
                    makeDrum('hihat', hihat)
            break;

            case "r":
                    makeDrum('kick', kick)
            break;

            case "t":
                    makeDrum('openhat', openhat)
            break;

            case "y":
                    makeDrum('ride', ride)
            break;

            case "u":
                    makeDrum('snare', snare)
            break;

            case "i":
                    makeDrum('tink', tink)
            break;

            case "o":
                    makeDrum('tom', tom)
            break;

            default:
                console.log(`non-drum key pressed --> ${event.key}`)
        }
  })


  
  boom.addEventListener("click", () => {
    makeDrum('boom', boom)
  })

  clap.addEventListener("click", () => {
    makeDrum('clap', clap)
  })

  hihat.addEventListener("click", () => {
    makeDrum('hihat', hihat)
  })


  openhat.addEventListener("click", () => {
    makeDrum('openhat', openhat)
  })

  ride.addEventListener("click", () => {
    makeDrum('ride', ride)
  })

  snare.addEventListener("click", () => {
    makeDrum('snare', snare)
  })

  tink.addEventListener("click", () => {
    makeDrum('tink', tink)
  })

  tom.addEventListener("click", () => {
    makeDrum('tom', tom)
  })


  kick.addEventListener("click", () => {
    makeDrum('kick', kick)
  })