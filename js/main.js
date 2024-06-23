const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = '../img/icons/nav_close.svg'
  } else {
    navBtnImg.src = '../img/icons/nav_open.svg'
  }
}

AOS.init({
  disable: 'phone',
  once: true,
})
