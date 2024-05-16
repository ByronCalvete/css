const pics = document.querySelectorAll('.pic')

pics.forEach(element => element.addEventListener('click', () => {
  element.classList.toggle('active')
}))
