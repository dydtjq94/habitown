const iosBtn = document.querySelector(`.ios__img`)
const googleBtn = document.querySelector(`.google__img`)

const init = () => {
  iosBtn.addEventListener('click', () => {
    location.href = `https://apps.apple.com/kr/app/%EC%8A%A4%ED%94%BD%EB%B3%BC-%EB%8F%88-%EB%B2%84%EB%8A%94-%EC%98%81%EC%96%B4-%ED%9A%8C%ED%99%94-%EC%95%B1-%EC%8A%A4%ED%94%BC%ED%82%B9-%EB%A6%AC%EC%8A%A4%EB%8B%9D/id6457251682`
  })
  googleBtn.addEventListener('click', () => {
    location.href = `https://play.google.com/store/apps/details?id=com.nmax.cashball`
  })
}

init()
