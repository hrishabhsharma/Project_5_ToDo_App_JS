let newtitle = document.getElementById('newtitle')
let title = document.getElementById('title')
let card = document.getElementById('card')
let ShowCard = document.getElementById('ShowCard')


function switchtocard(){
    card.style.display = "none"
    title.innerText = newtitle.value
    ShowCard.style.display = "flex"
}