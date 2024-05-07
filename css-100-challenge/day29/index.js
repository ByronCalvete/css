const search = document.querySelector('.search')
const suggestion = document.querySelector('.suggestion')

search.addEventListener('input', (e) => {
  const searchValue = e.target.value;

  if (searchValue === '') {
    suggestion.innerHTML = ''
  } else {
    suggestion.innerHTML = `
      <li><strong>${searchValue}</strong></li>
      <li>Veritatis et <strong>${searchValue}</strong></li>
      <li>ut aliquid ex <strong>${searchValue}</strong> vero eos</li>
    `
  }
})
