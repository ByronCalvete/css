const frame = document.querySelector('.frame')
const white = document.querySelector('.white')
const purple = document.querySelector('.purple')

frame.addEventListener('click', () => {
  white.classList.toggle('big')
  purple.classList.toggle('normal')
})
