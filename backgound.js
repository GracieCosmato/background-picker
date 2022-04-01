document.getElementById('purple').onmouseenter = partyPurple
document.getElementById('green').onmouseenter = partyGreen
document.getElementById('blue').onmouseenter = partyBlue
document.getElementById('orange').onmouseenter = partyOrange
document.getElementById('yellow').onmouseenter = partyYellow

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'purple'
}
function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'green'
}
function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'blue'
}
function partyOrange() {
    document.querySelector('body').style.backgroundColor = 'orange'
}
function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
}
