const firstDisSubmit = document.querySelector(`.first__dis__submit`)
const formDisplayWrap = document.querySelector(`.form__display__wrap`)
const resultWrap = document.querySelector(`.result__wrap`)
const loadingWrap = document.querySelector(`.loading__wrap`)
const resultName = document.querySelector(`.result__name`)

const firstInput = document.querySelector(`.first__dis__input`)

const init = () => {
  firstDisSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    console.dir(firstInput.value)
    let a = {
      b: firstInput.value,
      c: 8,
    }
    localStorage.setItem('name', JSON.stringify(a))
    formDisplayWrap.classList.add('none')
    loadingWrap.classList.remove('none')

    setTimeout(() => {
      getName = localStorage.getItem('name')
      console.log(JSON.parse(getName).b)
      let name = JSON.parse(getName).b
      resultName.innerHTML = name
      loadingWrap.classList.add('none')
      resultWrap.classList.remove('none')
      resultWrap.classList.add('trans')
    }, 5000)
  })
}

init()
