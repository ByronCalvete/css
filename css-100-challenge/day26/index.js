let active = 1

const buttons = document.querySelectorAll('.button')
const cards = document.querySelectorAll('.card')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    cards[active - 1].classList.remove('active')
    cards[active - 1].classList.add('inactive')
  
    if (active == 3) active = 0
    active++
  
    cards[active - 1].classList.remove('inactive')
    cards[active - 1].classList.add('active')
  })
})
