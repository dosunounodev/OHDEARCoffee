// ****************************************
// ********* MENUS
// ****************************************

const linkBlog = document.querySelectorAll(`nav a[href^='#blog']`);
linkBlog.forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://ohdearcoffee.com/blog');
});

// MENUS A MOSTRAR/ESCONDER
const navMenuBar = document.getElementById('nav__menu-bar');
const navMenuList = document.getElementById('nav__menu-lists');
const footersocials = document.getElementById('footersocials');

// ** Botones del navbar (icons x2 + burger)
const navMenuBtn = document.getElementById('nav__menu-btn');
const navLogoContainer = document.getElementById('nav__logo-container');

// Burger Icon ** Toggle menu LIST y menu BAR
navMenuBtn.addEventListener('click', toggleMenuListBar);

// Links de menu list ** Cierra el menu LIST
navMenuList.addEventListener('click', (e) => {
  if (
    e.target.nodeName === 'LI' ||
    e.target.classList.contains('list__links-item')
  ) {
    closeMenuList();
  }
});

// Logos del navbar ** Cierra el menu LIST
navLogoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__logo-img')) {
    closeMenuList();
  }
});

// ** Menu inactivo x default (escondido al abrir el website)
let menuActivo = false;

// TOGLE MENU LIST & BAR
function toggleMenuListBar() {
  menuActivo ? esconderMenuList() : mostrarMenuList();
}

// ** Esconder
// ** Cambia estado de Icono menu
// ** Muestra la barra de links superior
// ** Muestra la barra de socials en footer
// ** Esconde la lista de links (menu)
function esconderMenuList() {
  navMenuBtn.classList.remove('menu-active');
  navMenuBar.classList.remove('hide');
  footersocials.classList.remove('hide');
  navMenuList.classList.add('hide');
  menuActivo = false;
}

// ** Mostrar
// ** Cambia estado de Icono menu
// ** Esconde la barra de links superior
// ** Esconde la barra de socials en footer
// ** Muestra la lista de links (menu)
function mostrarMenuList() {
  navMenuBtn.classList.add('menu-active');
  navMenuBar.classList.add('hide');
  footersocials.classList.add('hide');
  navMenuList.classList.remove('hide');
  menuActivo = true;
}

// CLOSE MENU
// Si el menu esta activo (abierto) lo esconde
// ** Para botones/iconos que estan siempre visibles
// ** No queremos que abran el menu al clickearlos
// ** Solo deben cerrarlo si son clickeados con el menu abierto
function closeMenuList() {
  if (menuActivo) {
    esconderMenuList();
  }
}

// ****************************************
// ********* MODALS
// ****************************************

// MODALS A MOSTRAR/ESCONDER
const modals = document.getElementById('modals');
const modalGuias = document.getElementById('modal-guias');
// const modalCursos = document.getElementById('modal-cursos')
// const modalCurso1 = document.getElementById('modal-curso1')
// const modalCurso2 = document.getElementById('modal-curso2')

// ** Close de los modal
const closeModals = document.getElementById('close-all');

// ** Modal triggers
const guiasAction = document.getElementById('guias-action');
// const cursosAction = document.getElementById('cursos-action')
// const curso1Action = document.getElementById('curso1-action')
// const curso2Action = document.getElementById('curso2-action')

// Close btn en modals
// ** Cierra todos los modals
closeModals.addEventListener('click', () => closeAllModals());

// Cierra todos los modals (agrega opacity 0)
function closeAllModals() {
  modals.classList.add('hide');
  modalGuias.classList.add('hide');
  // modalCursos.classList.add('hide')
  // modalCurso1.classList.add('hide')
  // modalCurso2.classList.add('hide')
}

// Abrir el popup GUIAS
guiasAction.addEventListener('click', () => {
  modals.classList.remove('hide');
  modalGuias.classList.remove('hide');
});

// Abrir el popup CURSOS
// cursosAction.addEventListener('click', ()=> {
//   modals.classList.remove('hide')
//   modalCursos.classList.remove('hide')
// })

// Abrir el popup CURSO 1
// curso1Action.addEventListener('click', ()=> {
//   modals.classList.remove('hide')
//   modalCurso1.classList.remove('hide')
// })

// Abrir el popup CURSO 2
// curso2Action.addEventListener('click', ()=> {
//   modals.classList.remove('hide')
//   modalCurso2.classList.remove('hide')
// })

// Switchear entre curso especifico y CURSOS
// modals.addEventListener('click', (e) => {
//   if(e.target.classList.contains('modal__curso-infoextra')) {
//     modalCurso1.classList.add('hide')
//     modalCurso2.classList.add('hide')
//     modalCursos.classList.remove('hide')

//   // Switchear entre faqs...
//   // Acordeon de Cursos
//   } else if (e.target.classList.contains('faq-question')) {
//     let estaRespuesta = e.target.nextElementSibling
//       if(estaRespuesta.classList.contains('none')) {
//       esconderRespuestas()
//       estaRespuesta.classList.toggle('none')
//     } else {
//       estaRespuesta.classList.add('none')
//     }
//   }
// })

// Esconder la respuesta al clickear
// Esconder las otras respuestas al clickear en una
// function esconderRespuestas() {
//   let respuestas = modalCursos.querySelectorAll('.faq-answer')
//   respuestas.forEach(element => {
//     element.classList.add('none')
//   })
// }

// ****************************************
// ********* BIO HIDERS
// ****************************************

// Alterna entre texto 2 y 3 ; 4 y 5

const bioContent = document.querySelector('.bio__content');
const bioText2 = document.getElementById('bio__txt2');
const bioText3 = document.getElementById('bio__txt3');
const bioText4 = document.getElementById('bio__txt4');
const bioText5 = document.getElementById('bio__txt5');

bioContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('bio__more')) {
    bioText2.classList.toggle('display__none');
    bioText3.classList.toggle('display__none');
  } else if (e.target.classList.contains('bio__more2')) {
    bioText4.classList.toggle('display__none');
    bioText5.classList.toggle('display__none');
  }
});

// ****************************************
// ********* FORMULARIOS
// ****************************************

// Sets de Errores y Exito

function setError(input, msj, inputIdentificador, formularioIdentificador) {
  let inputField = input.parentElement;
  let spanAlerta = inputField.querySelector('.form__alert');
  spanAlerta.classList.add('form__alert--active');
  spanAlerta.textContent = msj;
  formularioIdentificador.push(`Error en input ${inputIdentificador}`);
}

function setSuccess(input) {
  let inputField = input.parentElement;
  let spanAlerta = inputField.querySelector('.form__alert');
  spanAlerta.classList.remove('form__alert--active');
}

// Validador de mail

const MAIL_FORMAT = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function mailInvalido(mail) {
  if (MAIL_FORMAT.test(mail)) {
    return false;
  } else {
    return true;
  }
}

// ****************************************
// ********* FORMULARIO GUIAS
// ****************************************

const FORM_GUIAS = document.getElementById('form-guias');
const FORM_GUIAS_NAME = document.getElementById('form-guias-name');
const FORM_GUIAS_MAIL = document.getElementById('form-guias-mail');
let erroresGuias = [];

FORM_GUIAS.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFieldsGuias();
  if (erroresGuias.length > 0) {
    console.log('hay un error en el formulario guias');
  } else {
    FORM_GUIAS.submit();
    closeAllModals();
  }
});

function checkFieldsGuias() {
  let inputName = FORM_GUIAS_NAME;
  let inputMail = FORM_GUIAS_MAIL;
  erroresGuias = [];
  if (inputName.value.trim() === '') {
    setError(
      inputName,
      'No olvides colocar tu nombre',
      'guias-name',
      erroresGuias
    );
  } else if (inputName.value.trim().length < 2) {
    setError(
      inputName,
      'Dime un nombre de más letras',
      'guias-name',
      erroresGuias
    );
  } else setSuccess(inputName);

  if (inputMail.value.trim() === '') {
    setError(inputMail, 'No olvides poner un mail', 'guias-mail', erroresGuias);
  } else if (mailInvalido(inputMail.value.trim())) {
    setError(inputMail, 'OOPS!! El mail ingresado no es valido');
  } else setSuccess(inputMail);

  console.log(erroresGuias);
}

// ****************************************
// ********* FORMULARIO CONTACTO
// ****************************************

const FORM_CONTACTO = document.getElementById('form-contacto');
const FORM_CONTACTO_NAME = document.getElementById('form-contacto-name');
const FORM_CONTACTO_MAIL = document.getElementById('form-contacto-mail');
const FORM_CONTACTO_MSJ = document.getElementById('form-contacto-msj');
let erroresContacto = [];

FORM_CONTACTO.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFieldsContacto();
  erroresContacto.length > 0
    ? console.log('hay un error en el formulario contacto')
    : FORM_CONTACTO.submit();
});

function checkFieldsContacto() {
  let inputName = FORM_CONTACTO_NAME;
  let inputMail = FORM_CONTACTO_MAIL;
  let inputMsj = FORM_CONTACTO_MSJ;
  erroresContacto = [];
  if (inputName.value.trim() === '') {
    setError(
      inputName,
      'No olvides colocar tu nombre',
      'contacto-name',
      erroresContacto
    );
  } else if (inputName.value.trim().length < 2) {
    setError(
      inputName,
      'Dime un nombre de más letras',
      'contacto-name',
      erroresContacto
    );
  } else setSuccess(inputName);

  if (inputMail.value.trim() === '') {
    setError(
      inputMail,
      'No olvides poner un mail',
      'contacto-mail',
      erroresContacto
    );
  } else if (mailInvalido(inputMail.value.trim())) {
    setError(inputMail, 'OOPS!! El mail ingresado no es valido');
  } else setSuccess(inputMail);

  if (inputMsj.value.trim() === '') {
    setError(
      inputMsj,
      'No olvides dejar tu mensaje',
      'contacto-msj',
      erroresContacto
    );
  } else setSuccess(inputMsj);

  console.log(erroresContacto);
}

// ****************************************
// ********* FORMULARIO NEWSLETTER
// ****************************************

const FORM_FOOTER = document.getElementById('form-footer');
const FORM_FOOTER_NAME = document.getElementById('form-footer-name');
const FORM_FOOTER_MAIL = document.getElementById('form-footer-mail');
let erroresFooter = [];

FORM_FOOTER.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFieldsFooter(FORM_FOOTER_NAME, FORM_FOOTER_MAIL);
  erroresFooter.length > 0
    ? console.log('hay un error en el formulario footer')
    : FORM_FOOTER.submit();
});

function checkFieldsFooter(inputName, inputMail) {
  erroresFooter = [];
  if (inputName.value.trim() === '') {
    setError(
      inputName,
      'No olvides colocar tu nombre',
      'footer-name',
      erroresFooter
    );
  } else if (inputName.value.trim().length < 2) {
    setError(
      inputName,
      'Dime un nombre de más letras',
      'footer-name',
      erroresFooter
    );
  } else setSuccess(inputName);

  if (inputMail.value.trim() === '') {
    setError(
      inputMail,
      'No olvides poner un mail',
      'footer-mail',
      erroresFooter
    );
  } else if (mailInvalido(inputMail.value.trim())) {
    setError(inputMail, 'OOPS!! El mail ingresado no es valido');
  } else setSuccess(inputMail);

  console.log(erroresFooter);
}

// ****************************************
// ********* CAMBIO DE TITULO INACTIVO
// ****************************************

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    document.title = `OH DEAR Coffee - Recetas, Guias, Cursos y Pasión por el Café`;
  } else {
    document.title = `VUELVE, HAY CAFÉ`;
  }
});

// ****************************************
// ********* FETCH A WORDPRESS
// ****************************************

const template = document.getElementById('template-blogpost').content;
const blogpostcontainer = document.querySelector('.blog__articles-container');
const fragment = document.createDocumentFragment();

fetch('https://ohdearcoffee.com/wordpress/wp-json/wp/v2/posts?_embed')
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < 2; i++) {
      let clone = template.cloneNode(true);
      clone
        .querySelector('.post-img-container a img')
        .setAttribute(
          'src',
          json[i]['_embedded']['wp:featuredmedia'][0].source_url
        );
      clone
        .querySelector('.post-img-container a')
        .setAttribute('href', json[i].link);
      clone.querySelector('.post-title a').textContent = json[i].title.rendered;
      clone.querySelector('.post-title a').setAttribute('href', json[i].link);
      clone.querySelector('.author-name').textContent =
        json[i]['_embedded'].author[0].name;
      clone.querySelector('.post-date').textContent = json[i].date.substring(
        0,
        10
      );
      clone.querySelector('.post-resume p').textContent = json[
        i
      ].excerpt.rendered.slice(3, -5);
      clone.querySelector('.read-more').setAttribute('href', json[i].link);
      fragment.append(clone);
    }
    blogpostcontainer.append(fragment);
  });
