let heading = document.querySelector('h1')
let btn = document.querySelector('button')
let firstDice = document.querySelector('.img1')
let secondDice = document.querySelector('.img2')

function playGame() {

    let firstDiceValue = Math.floor(Math.random()*6)+1
    let secondDiceValue = Math.floor(Math.random()*6)+1
    firstDice.setAttribute('src', `images/dice${firstDiceValue}.png`)
    secondDice.setAttribute('src', `images/dice${secondDiceValue}.png`)
    
    if (firstDiceValue > secondDiceValue) {
        heading.textContent = '🚩 First Player Wins!'
    } else if (secondDiceValue > firstDiceValue) {
        heading.textContent = 'Second Player Wins! 🚩'
    } else {
        heading.textContent = 'Draw'
    }
}

document.addEventListener('keydown', e=>{
    if (e.key.toLowerCase() == 'f' || e.key.toLowerCase()=='j') {
        playGame()
    }
})

btn.addEventListener('click',e=>{
    playGame()
})
