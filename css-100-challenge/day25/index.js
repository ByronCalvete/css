const marker = document.querySelector('.marker')
const card = document.querySelector('.card')

marker.addEventListener('click', () => {
  card.classList.add('active')
  marker.classList.add('inactive')
})

card.addEventListener('click', () => {
  card.classList.remove('active')
  marker.classList.remove('inactive')
})