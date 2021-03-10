console.log('hola')

const navMenuBtn = document.getElementById('nav__menu-btn')
const navMenuBar = document.getElementById('nav__menu-bar')
const navMenuList = document.getElementById('nav__menu-lists')

const inicioBtn = document.getElementById('btn-list-header')
const bioBtn = document.getElementById('btn-list-bio')
const blogBtn = document.getElementById('btn-list-blog')
const recetasBtn = document.getElementById('btn-list-recetas')
const cursosBtn = document.getElementById('btn-list-cursos')
const guiasBtn = document.getElementById('btn-list-guias')
const contactoBtn = document.getElementById('btn-list-contacto')
const newslatterBtn = document.getElementById('btn-list-newslatter')

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
  if(navMenuBtn.classList.contains('menu-active')) {
    navMenuBtn.classList.remove('menu-active')
    navMenuList.classList.add('hide')
    navMenuBar.classList.remove('hide')
  } else {
    navMenuBtn.classList.add('menu-active')
    navMenuList.classList.remove('hide')
    navMenuBar.classList.add('hide')
  }
}