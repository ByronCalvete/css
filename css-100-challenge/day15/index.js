const dropzone = document.querySelector('.dropzone')
const upload = document.querySelector('.upload')
const button = document.querySelector('.upload-btn')
const syncing = document.querySelector('.syncing')
const done = document.querySelector('.done')
const bar = document.querySelector('.bar')

let uploading = false
let fileName = ''

const allEvents = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']

allEvents.forEach(el => dropzone.addEventListener(el, (e) => {
  e.preventDefault()
  e.stopPropagation()
}))

const enterEvents = ['dragover', 'dragenter']

enterEvents.forEach(el => dropzone.addEventListener(el, () => {
  dropzone.classList.add('is-dragover')
}))

const leaveEvents = ['dragend', 'dragleave', 'drop']

leaveEvents.forEach(el => dropzone.addEventListener(el, () => {
  dropzone.classList.remove('is-dragover')
}))

dropzone.addEventListener('drop', (e) => {
  let droppedFiles = e.dataTransfer.files
  fileName = droppedFiles[0]['name']
  document.querySelector('.filename').innerHTML = fileName
  upload.classList.add('hidden')
})

document.querySelector('input[type="file"]').addEventListener('change', () => {
  fileName = this.files[0].name
  document.querySelector('.filename').innerHTML = fileName
  upload.classList.add('hidden')
})

button.addEventListener('click', (e) => {
  if (!uploading && fileName != '') {
    uploading = true
    document.querySelector('.filename').innerHTML = ''
    dropzone.classList.add('hidden')
    syncing.classList.add('active')
    done.classList.add('active')
    bar.classList.add('active')
    button.innerHTML = 'Uploading...'
    changeToDone()
  }
})

// There are better ways to do it
function changeToDone() {
  setTimeout(() => {
    button.innerHTML = 'Done'
  }, 3200)
}
