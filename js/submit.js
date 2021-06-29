const iosBtn = document.querySelector(`.ios__img`)
const googleBtn = document.querySelector(`.google__img`)

const init = () => {
  iosBtn.addEventListener('click', () => {
    location.href = `https://mailchi.mp/2dc9b736f196/habitown`
  })
  googleBtn.addEventListener('click', () => {
    location.href = `https://mailchi.mp/2dc9b736f196/habitown`
  })
}

init()
