// MENUS

const navMenuBar = document.getElementById('nav__menu-bar')
const navMenuList = document.getElementById('nav__menu-lists')
const footersocials = document.getElementById('footersocials')

// BOTONES

const navMenuBtn = document.getElementById('nav__menu-btn')
const navLogoCup = document.getElementById('nav__logo-cup')
const navLogoText = document.getElementById('nav__logo-text')

// LINKS MENU

const inicioBtn = document.getElementById('btn-list-header')
const bioBtn = document.getElementById('btn-list-bio')
const blogBtn = document.getElementById('btn-list-blog')
const recetasBtn = document.getElementById('btn-list-recetas')
const cursosBtn = document.getElementById('btn-list-cursos')
const guiasBtn = document.getElementById('btn-list-guias')
const contactoBtn = document.getElementById('btn-list-contacto')
const newslatterBtn = document.getElementById('btn-list-newslatter')


// TOGLE MENU
// Si el menu esta cerrado lo abren
// Si esta abierto lo cierran

let menuActivo = false

function esconderMenuList() {
  navMenuBtn.classList.remove('menu-active')
  navMenuBar.classList.remove('hide')
  footersocials.classList.remove('hide')
  navMenuList.classList.add('hide')
  menuActivo = false
}

function mostrarMenuList() {
  navMenuBtn.classList.add('menu-active')
  navMenuBar.classList.add('hide')
  footersocials.classList.add('hide')
  navMenuList.classList.remove('hide')
  menuActivo = true
}

navMenuBtn.addEventListener('click', togleMenuList)
inicioBtn.addEventListener('click', togleMenuList)
bioBtn.addEventListener('click', togleMenuList)
blogBtn.addEventListener('click', togleMenuList)
recetasBtn.addEventListener('click', togleMenuList)
cursosBtn.addEventListener('click', togleMenuList)
guiasBtn.addEventListener('click', togleMenuList)
contactoBtn.addEventListener('click', togleMenuList)
newslatterBtn.addEventListener('click', togleMenuList)

function togleMenuList() {
  if(menuActivo) {
    esconderMenuList()
  } else {
    mostrarMenuList()
  }
}

// CERRAR MENU
// ** Si se clickean los iconos con el menu abierto
// ** No pueden abrirlo sino lo abririan siempre

navLogoCup.addEventListener('click', closeMenuList)
navLogoText.addEventListener('click', closeMenuList)

function closeMenuList() {
  if(menuActivo) {
    esconderMenuList()
  }
}
