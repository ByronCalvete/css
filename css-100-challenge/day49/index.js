const frame = document.querySelector('.frame')
const cursor = document.querySelector('.cursor')

const frameWidth = 400;
const frameHeight = 400;

frame.addEventListener('mousemove', (e) => {
  const top = e.pageY - ((window.innerHeight - frameHeight) / 2);
  const left = e.pageX - ((window.innerWidth - frameWidth) / 2)

  cursor.style.top = `${top}px`
  cursor.style.left = `${left}px`
})
