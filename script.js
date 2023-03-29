let firstDiceValue = Math.floor(Math.random()*6)+1
let secondDiceValue = Math.floor(Math.random()*6)+1

let heading = document.querySelector('h1')
let firstDice = document.querySelector('.img1')
let secondDice = document.querySelector('.img2')

console.log(firstDice.setAttribute('src', `/images/dice${firstDiceValue}.png`))
console.log(secondDice.setAttribute('src', `/images/dice${secondDiceValue}.png`))

if (firstDiceValue > secondDiceValue) {
    heading.textContent = '🚩 First Player Wins!'
} else if (secondDiceValue > firstDiceValue) {
    heading.textContent = 'Second Player Wins! 🚩'
} else {
    heading.textContent = 'Draw, Refresh the page'
}