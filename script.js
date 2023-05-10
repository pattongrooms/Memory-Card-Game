// my array with objects

const memoryCards = [
  {
    name: 'earth',
    img: 'images/earth_IMG.jpeg'
  },
  {
    name: 'saturn',
    img: 'images/saturn_IMG.jpeg'
  },
  {
    name: 'astronaut',
    img: 'images/astronaut_IMG.jpeg'
  },
  {
    name: 'jupiter',
    img: 'images/jupiter_IMG.jpeg'
  },
  {
    name: 'nasa',
    img: 'images/nasa_IMG.png'
  },
  {
    name: 'moon',
    img: 'images/moon_IMG.webp'
  },
  {
    name: 'earth',
    img: 'images/earth_IMG.jpeg'
  },
  {
    name: 'saturn',
    img: 'images/saturn_IMG.jpeg'
  },
  {
    name: 'astronaut',
    img: 'images/astronaut_IMG.jpeg'
  },
  {
    name: 'jupiter',
    img: 'images/jupiter_IMG.jpeg'
  },
  {
    name: 'nasa',
    img: 'images/nasa_IMG.png'
  },
  {
    name: 'moon',
    img: 'images/moon_IMG.webp'
  }
]
// console.log(memoryCards[0].img)

// sort compares two values then sorts through
// math.random returns any number from 0 < -1
// sorts through asking if larger than 0.5 then smaller than 0.5 through array

memoryCards.sort(() => 0.5 - Math.random()) //shortcut to randomize array

// console.log(memoryCards)

const containerVisual = document.querySelector('#container')
let cardsClicked = []
let cardsClickedIds = []
const cardsWon = []

// console.log(containerVisual)

buildBoard()

function buildBoard() {
  for (let i = 0; i < memoryCards.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/space_IMG.jpeg') //ashley was working
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    // console.log(card, i)
    containerVisual.appendChild(card)
  }
}

function seeMatch() {
  const cards = document.querySelectorAll('img')
  const selectOneId = cardsClickedIds[0]
  const selectTwoId = cardsClickedIds[1]
  console.log(cards)
  console.log('check for match!')
  if (selectOneId === selectTwoId) {
    alert('Same Image!')
  }
  if (cardsClicked[0] == cardsClicked[1]) {
    alert('Interstellar Match!')
    cards[selectOneId[0]].setAttribute('src', 'images/blank_IMG.png')
    cards[selectTwoId[1]].setAttribute('src', 'images/blank_IMG.png')
    cards[selectOneId[0]].removeEventListener('click', flipCard)
    cards[selectTwoId[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardsClicked)
  }
  cardsClicked = []
  cardsClickedIds = []
}

function flipCard() {
  const cardId = this.getAttribute('data-id') //this key allows to interact with clicked img
  cardsClicked.push(memoryCards[cardId].name)
  cardsClickedIds.push(cardId)
  console.log(cardsClicked)
  console.log(cardsClickedIds)
  this.setAttribute('src', memoryCards[cardId].img)
  if (cardsClicked.length === 2) {
    setTimeout(seeMatch, 300)
  }
}
