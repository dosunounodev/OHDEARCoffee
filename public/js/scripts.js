// ********* MOSTRAR / OCULTAR MENUS

// MENUS A MOSTRAR/ESCONDER
const navMenuBar = document.getElementById('nav__menu-bar')
const navMenuList = document.getElementById('nav__menu-lists')
const footersocials = document.getElementById('footersocials')

// ICONOS (** los 3 del navbar)
const navMenuBtn = document.getElementById('nav__menu-btn')
const navLogoContainer = document.getElementById('nav__logo-container')

// Toggle Menu -> Para links de menu list
navMenuList.addEventListener('click', (e) => {
  if((e.target.nodeName === 'LI') || (e.target.classList.contains('list__links-item'))){
    toggleMenuList()
  }
})

// Toggle Menu -> Para el boton hamburguesa
navMenuBtn.addEventListener('click', toggleMenuList)

// Esconder el menu al tocar iconos/logos de la parte superior izquierda
navLogoContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('nav__logo-img')) {
    closeMenuList()
  }
})


// TOGGLE MENU
// Si el menu esta activo (abierto) lo esconde
// Si el menu esta inactivo (cerrado) lo muestra

function toggleMenuList() {
  (menuActivo) ? esconderMenuList() : mostrarMenuList()
}

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