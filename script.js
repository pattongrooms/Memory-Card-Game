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

// console.log(containerVisual)

buildBoard()

function buildBoard() {
  for (let i = 0; i < memoryCards.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/earth_IMG.jpeg') //ashley was working
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    // console.log(card, i)
    containerVisual.appendChild(card)
  }
}

function flipCard() {
  console.log('clicked')
}
