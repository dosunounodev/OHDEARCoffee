console.log('hola')

const navMenuBtn = document.getElementById('nav__menu-btn')
const navMenuList = document.getElementById('nav__menu-lists')

const inicioBtn = document.getElementById('btnheader')
const bioBtn = document.getElementById('btnbio')
const blogBtn = document.getElementById('btnblog')
const recetasBtn = document.getElementById('btnrecetas')
const cursosBtn = document.getElementById('btncursos')
const guiasBtn = document.getElementById('btnguias')
const contactoBtn = document.getElementById('btncontacto')
const newslatterBtn = document.getElementById('btnnewslatter')

navMenuBtn.addEventListener('click', hideShow)
inicioBtn.addEventListener('click', hideShow)
bioBtn.addEventListener('click', hideShow)
blogBtn.addEventListener('click', hideShow)
recetasBtn.addEventListener('click', hideShow)
cursosBtn.addEventListener('click', hideShow)
guiasBtn.addEventListener('click', hideShow)
contactoBtn.addEventListener('click', hideShow)
newslatterBtn.addEventListener('click', hideShow)

function hideShow() {
  if(navMenuBtn.classList.contains('menu-active')) {
    navMenuBtn.classList.remove('menu-active')
    navMenuList.classList.add('hide')
  } else {
    navMenuBtn.classList.add('menu-active')
    navMenuList.classList.remove('hide')
  }
}