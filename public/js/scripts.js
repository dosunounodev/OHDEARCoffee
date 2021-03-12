// MENUS A MOSTRAR/ESCONDER

const navMenuBar = document.getElementById('nav__menu-bar')
const navMenuList = document.getElementById('nav__menu-lists')
const footersocials = document.getElementById('footersocials')

// ICONOS (** los 3 del navbar)

const navMenuBtn = document.getElementById('nav__menu-btn')
const navLogoCup = document.getElementById('nav__logo-cup')
const navLogoText = document.getElementById('nav__logo-text')

// LINKS MENU (los de menu list)

const inicioBtn = document.getElementById('btn-list-header')
const bioBtn = document.getElementById('btn-list-bio')
const blogBtn = document.getElementById('btn-list-blog')
const recetasBtn = document.getElementById('btn-list-recetas')
const cursosBtn = document.getElementById('btn-list-cursos')
const guiasBtn = document.getElementById('btn-list-guias')
const contactoBtn = document.getElementById('btn-list-contacto')
const newsletterBtn = document.getElementById('btn-list-newsletter')


// Togglers Btns (Array con todos los togglers, agrega a todos evento click = toggleMenuList)

const togglersBtns = [navMenuBtn, inicioBtn, bioBtn, blogBtn, recetasBtn, cursosBtn, guiasBtn, contactoBtn, newsletterBtn]
const togglersBtnsListeners = togglersBtns.map(item => item.addEventListener('click', toggleMenuList))

// Hiders Btns (Array con los iconos que solo esconden el menu)

const hidersBtns = [navLogoCup, navLogoText]
const hidersBtnsListeners = hidersBtns.map(item => item.addEventListener('click', closeMenuList))


// TOGGLE MENU
// Si el menu esta activo (abierto) lo esconde
// Si el menu esta inactivo (cerrado) lo muestra

function toggleMenuList() {
  (menuActivo) ? esconderMenuList() : mostrarMenuList()
}

// function toggleMenuList() {
//   (menuActivo) ? esconderMenuList() : mostrarMenuList()
// }

// ** Menu inactivo x default (escondido al abrir el website)
let menuActivo = false

// ** Esconder
// ** Cambia estado de Icono menu
// ** Muestra la barra de links superior
// ** Muestra la barra de socials en footer
// ** Esconde la lista de links (menu)

function esconderMenuList() {
  navMenuBtn.classList.remove('menu-active')
  navMenuBar.classList.remove('hide')
  footersocials.classList.remove('hide')
  navMenuList.classList.add('hide')
  menuActivo = false
}

// ** Mostrar
// ** Cambia estado de Icono menu
// ** Esconde la barra de links superior
// ** Esconde la barra de socials en footer
// ** Muestra la lista de links (menu)

function mostrarMenuList() {
  navMenuBtn.classList.add('menu-active')
  navMenuBar.classList.add('hide')
  footersocials.classList.add('hide')
  navMenuList.classList.remove('hide')
  menuActivo = true
}


// CLOSE MENU
// Si el menu esta activo (abierto) lo esconde
// ** Para botones/iconos que estan siempre visibles
// ** No queremos que abran el menu al clickearlos
// ** Solo deben cerrarlo si son clickeados con el menu abierto

function closeMenuList() {
  if(menuActivo) {
    esconderMenuList()
  }
}




// formulario

const NEWS_FOOTER = document.getElementById('footer-newsletter')
const NEWS_FOOTER_NOMBRE = document.getElementById('footer-nombre')
const NEWS_FOOTER_MAIL = document.getElementById('footer-mail')
const NEWS_FOOTER_ENVIAR = document.getElementById('footer-enviar')