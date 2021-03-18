// ********* MOSTRAR / OCULTAR MENUS

// MENUS A MOSTRAR/ESCONDER
const navMenuBar = document.getElementById('nav__menu-bar')
const navMenuList = document.getElementById('nav__menu-lists')
const footersocials = document.getElementById('footersocials')

// MODALS A MOSTRAR/ESCONDER
const modals = document.getElementById('modals')
const modalGuias = document.getElementById('modal-guias')
const modalCursos = document.getElementById('modal-cursos')
const modalCurso1 = document.getElementById('modal-curso1')
const modalCurso2 = document.getElementById('modal-curso2')


// ICONOS/Btns 
// ** los 3 del navbar 
const navMenuBtn = document.getElementById('nav__menu-btn')
const navLogoContainer = document.getElementById('nav__logo-container')
// ** el close de los modal
const closeModals = document.getElementById('close-all')
// ** los popup triggers
const guiasAction = document.getElementById('guias-action')
const cursosAction = document.getElementById('cursos-action')
const curso1Action = document.getElementById('curso1-action')
const curso2Action = document.getElementById('curso2-action')


// Toggle Menu -> Para el boton hamburguesa
// ** Muestra el menu LIST y esconde el menu BAR
navMenuBtn.addEventListener('click', toggleMenuList)

// Close Menu -> Para links de menu list
// ** Cierra el menu LIST
navMenuList.addEventListener('click', (e) => {
  if((e.target.nodeName === 'LI') || (e.target.classList.contains('list__links-item'))){
    closeMenuList()
  }
})

// Close Menu -> Para logos de la parte superior izquierda
// ** Cierra el menu LIST
navLogoContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('nav__logo-img')) {
    closeMenuList()
  }
})

// Cerrar todos los modals
closeModals.addEventListener('click', ()=> closeAllModals())

// Abrir el popup GUIAS
guiasAction.addEventListener('click', ()=> {
  modals.classList.remove('hide')
  modalGuias.classList.remove('hide')
})

// Abrir el popup CURSOS
cursosAction.addEventListener('click', ()=> {
  modals.classList.remove('hide')
  modalCursos.classList.remove('hide')
})
// Switchear entre curso especifico y CURSOS
modals.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal__curso-infoextra')) {
    modalCurso1.classList.add('hide')
    modalCurso2.classList.add('hide')
    modalCursos.classList.remove('hide')
  // Switchear entre faqs...
  } else if (e.target.classList.contains('faq-question')) {
    let estaRespuesta = e.target.nextElementSibling
      if(estaRespuesta.classList.contains('none')) {
      esconderRespuestas()
      estaRespuesta.classList.toggle('none')
    } else {
      estaRespuesta.classList.add('none')
    }
  }
})

function esconderRespuestas() {
  let respuestas = modalCursos.querySelectorAll('.faq-answer')
  respuestas.forEach(element => {
    element.classList.add('none')
  })
  console.log('escondiendo respuestas')
}

// Abrir el popup CURSO 1
curso1Action.addEventListener('click', ()=> {
  modals.classList.remove('hide')
  modalCurso1.classList.remove('hide')
})

// Abrir el popup CURSO 2
curso2Action.addEventListener('click', ()=> {
  modals.classList.remove('hide')
  modalCurso2.classList.remove('hide')
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



// CLOSE ALL MODALS
// Cierra todos los modals (agrega opacity 0)

function closeAllModals() {
  modals.classList.add('hide')
  modalGuias.classList.add('hide')
  modalCursos.classList.add('hide')
  modalCurso1.classList.add('hide')
  modalCurso2.classList.add('hide')
}







// BIO HIDERS
// Alterna entre texto 2 y 3 ; 4 y 5

const bioContent = document.querySelector('.bio__content')
const bioText2 = document.getElementById('bio__txt2')
const bioText3 = document.getElementById('bio__txt3')
const bioText4 = document.getElementById('bio__txt4')
const bioText5 = document.getElementById('bio__txt5')

bioContent.addEventListener('click', (e) => {
  if(e.target.classList.contains('bio__more')) {
    bioText2.classList.toggle('display__none')
    bioText3.classList.toggle('display__none')
  } else if (e.target.classList.contains('bio__more2')) {
    bioText4.classList.toggle('display__none')
    bioText5.classList.toggle('display__none')
  }
}) 


// formulario

const NEWS_FOOTER = document.getElementById('footer-newsletter')
const NEWS_FOOTER_NOMBRE = document.getElementById('footer-nombre')
const NEWS_FOOTER_MAIL = document.getElementById('footer-mail')
const NEWS_FOOTER_ENVIAR = document.getElementById('footer-enviar')