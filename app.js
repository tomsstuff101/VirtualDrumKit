const boom = document.getElementById('boom')
const clap = document.getElementById('clap')
const hihat = document.getElementById('hihat')
const kick = document.getElementById('kick')
const openhat = document.getElementById('openhat')
const ride = document.getElementById('ride')
const snare = document.getElementById('snare')
const tink = document.getElementById('tink')
const tom = document.getElementById('tom')

const body = document.querySelector('body')


// Play drum by keyboard press

const sound = new Audio();  

document.addEventListener("keydown", (event) => {

        switch(event.key) {
            case "q":
                    console.log(`q pressed --> boom`)
                    sound.src = './sounds/boom.wav'
                    sound.play()
            break;

            case "w":
                    console.log(`w pressed --> clap`)
                    sound.src = './sounds/clap.wav'
                    sound.play()
            break;

            case "e":
                    console.log(`e pressed --> hihat`)
                    sound.src = './sounds/hihat.wav'
                    sound.play()

            break;

            case "r":
                    console.log(`r pressed --> kick`)
                    sound.src = './sounds/kick.wav'
                    sound.play()
            break;

            case "t":
                    console.log(`t pressed --> openhat`)
                    sound.src = './sounds/openhat.wav'
                    sound.play()
            break;

            case "y":
                    console.log(`y pressed --> ride`)
                    sound.src = './sounds/ride.wav'
                    sound.play()
            break;

            case "u":
                    console.log(`u pressed --> snare`)
                    sound.src = './sounds/snare.wav'
                    sound.play()
            break;

            case "i":
                    console.log(`i pressed --> tink`)
                    sound.src = './sounds/tink.wav'
                    sound.play()
            break;

            case "o":
                    console.log(`o pressed --> tom`)
                    sound.src = './sounds/tom.wav'
                    sound.play()
            break;

            default:
                console.log(`non-drum key pressed --> ${event.key}`)
        }
  })









