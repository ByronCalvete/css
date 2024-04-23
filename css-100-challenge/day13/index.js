const profile = document.querySelectorAll('.profile')
const detail = document.querySelector('.detail')
const close = document.querySelector('.close')

profile.forEach(element => element.addEventListener('click', () => {
  console.log('click')
  detail.classList.add('active')
}))

close.addEventListener('click', () => {
  console.log('click2')
  detail.classList.remove('active')
})
