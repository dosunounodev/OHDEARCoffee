console.log('hola')

const navMenuBtn = document.getElementById('nav__menu-btn')
const navMenuList = document.getElementById('nav__menu-lists')

navMenuBtn.addEventListener('click', hideShow)

function hideShow() {
  if(navMenuBtn.classList.contains('menu-active')) {
    navMenuBtn.classList.remove('menu-active')
    navMenuList.classList.add('hide')
  } else {
    navMenuBtn.classList.add('menu-active')
    navMenuList.classList.remove('hide')
  }
}