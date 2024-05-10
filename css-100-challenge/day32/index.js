const number = document.querySelector('.number')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

let numberValue = 0

plus.addEventListener('click', () => {
  updateNumber(1)
})

minus.addEventListener('click', () => {
  updateNumber(-1)
})

const updateNumber = (value) => {
  numberValue += value

  number.classList.remove('fadeOutDown', 'fadeOutUp')
  number.querySelector('span').classList.remove('fadeInUp')

  if (value > 0) {
    number.querySelector('span').classList.add('fadeOutUp')
    number.innerHTML = `<span class="fadeInUp">${numberValue}</span>`
  } else if(numberValue < 0) {
    numberValue = 0
    number.querySelector('span').classList.add('fadeOutDown')
    number.innerHTML = `<span class="fadeInDown">${numberValue}</span>`
  } else {
    number.querySelector('span').classList.add('fadeOutDown')
    number.innerHTML = `<span class="fadeInDown">${numberValue}</span>`
  }
}
