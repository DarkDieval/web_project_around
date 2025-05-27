////Sprint 9 - Funcion de validacion

// Importa la función de validación desde validate.js
// Asegúrate de importar también hideError y toggleButtonState si se usan directamente
import { enableValidation, hideError, toggleButtonState } from "./validate.js";

//// Sprint 8 - Array

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },

  {
    name: "Montañas Calvas",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },

  {
    name: "Latemar",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },

  {
    name: "Parque Nacional de la Vanoise",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },

  {
    name: "Lago di Braies",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//// Sprint 7 - 1 - Seleccionar el elementos del DOM

//Botones
const buttonEdit = document.querySelector(".profile-name-edit-button");
// Seleccionamos el botón de cerrar del popup de perfil de forma más específica
const buttonCloseProfilePopup = document.querySelector(
  ".profile-popup-close-button.outside"
);

//Popup
const profilePopup = document.querySelector(".profile-popup-container");
// El contenedor del contenido del popup de perfil (para stopPropagation)
const profileContentWrapper = profilePopup.querySelector(
  ".profile-content-wrapper"
);

//Form
const profileEditForm = document.querySelector("#profileEditForm"); // ID de formulario correcto
const inputName = document.querySelector(".profile-name-input");
const inputAbout = document.querySelector(".profile-about-input");
const spanName = document.querySelector(".span-profile-name");
const spanAbout = document.querySelector(".span-profile-about");

//// Sprint 7 - 2 - Cear funcionalidad u/o manipulación

// Popup de Perfil
function openPopup() {
  profilePopup.classList.add("active");
  // Al abrir el popup, resetea la validación y llena los campos con el texto actual del perfil
  const inputs = Array.from(
    profileEditForm.querySelectorAll(
      ".profile-name-input, .profile-about-input"
    )
  );
  const button = profileEditForm.querySelector(".profile-save-button");

  // Oculta todos los errores y limpia los mensajes
  inputs.forEach((input) =>
    hideError(input, {
      inputErrorClass: "input_type_error",
      errorClass: "error_visible",
    })
  );

  // Actualiza el estado del botón basado en la validez actual (que debería ser válida si no hay errores)
  toggleButtonState(inputs, button, { inactiveButtonClass: "button_disabled" });

  // Llena los inputs del formulario con el contenido actual del perfil
  inputName.value = spanName.textContent;
  inputAbout.value = spanAbout.textContent;
}

function closePopup() {
  profilePopup.classList.remove("active");
  // Los valores de los inputs no se limpian al cerrar, solo al resetear el formulario o al abrirlo
}

function handleSubmitProfile(event) {
  event.preventDefault(); // Previene el envío por defecto

  // Actualiza el contenido de los spans del perfil con los valores del formulario
  spanName.textContent = inputName.value;
  spanAbout.textContent = inputAbout.value;

  closePopup(); // Cierra el popup
  // profileEditForm.reset(); // No es necesario resetear aquí si los valores ya se actualizaron
}

//// Sprint 7 - 3 - Trabajar con eventos

// Apertura y cierre del Popup de edicion de nombre
buttonEdit.addEventListener("click", openPopup);
buttonCloseProfilePopup.addEventListener("click", closePopup); // Usar la constante corregida

//Formulario de Perfil
profileEditForm.addEventListener("submit", handleSubmitProfile);

// Importante: Detener la propagación de clics dentro del contenido del popup de perfil
// Esto evita que un clic en la tarjeta blanca se propague al fondo y cierre el popup.
if (profileContentWrapper) {
  // Asegúrate de que el contenedor exista
  profileContentWrapper.addEventListener("click", (event) => {
    event.stopPropagation(); // ¡Esto es crucial!
  });
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//// Sprint 8 - 1 - Seleccionar el elementos del DOM

const profileGallery = document.querySelector("#profileGallery");
const profileGalleryTemplate = document.querySelector(
  "#profileGalleryTemplate"
);

//Buttons

const profileAddButton = document.querySelector("#profileAddButton");
const buttonCloseGallery = document.querySelector(
  ".gallery-popup-close-button"
);

const profileGalleryContainer = document.querySelector(
  ".profile-gallery-container"
);

//Popup
const galleryPopup = document.querySelector(".gallery-popup-container");
// El contenedor del contenido del popup de galería (para stopPropagation)
const galleryContentWrapper = galleryPopup.querySelector(
  ".gallery-content-wrapper"
);

//Forms
const galleryAddForm = document.querySelector("#galleryAddForm"); // ID de formulario correcto
const galleryTitleImage = document.querySelector(".gallery-title-image-input");
const galleryLink = document.querySelector(".gallery-link-input");

// Elementos del popup de imagen grande
const popupImageElement = document.querySelector(".popup-image");
const popupImageImg = popupImageElement.querySelector("img");
const popupImageClose = popupImageElement.querySelector(
  ".popup-image-close-button"
);
// El contenedor de la imagen dentro del popup de imagen grande (para stopPropagation)
const popupImageContainer = popupImageElement.querySelector(
  ".popup-image-container"
);

//// Sprint 8 - 2 - Cear funcionalidad u/o manipulación

function createGalleryCard(gallery) {
  // 1 - Seleccion de elementos dentro de la función
  const galleryClone = profileGalleryTemplate.content.cloneNode(true); // Clonamos todo el contenido del template
  const containerGalleryClone = galleryClone.querySelector(
    ".profile-gallery-card" // Seleccionamos dentro del clon
  );

  const profileGalleryImage = galleryClone.querySelector(
    ".profile-gallery__image"
  ); // Seleccionamos dentro del clon

  const profileGalleryCardInfo = galleryClone.querySelector(
    ".profile-gallery-card__info" // Seleccionamos dentro del clon
  );

  const profileGalleryCardTitle = galleryClone.querySelector(
    ".profile-gallery-card__title" // Seleccionamos dentro del clon
  );

  const profileGalleryRemoveCardButton = galleryClone.querySelector(
    ".profile-gallery-remove-card-button" // Seleccionamos dentro del clon
  );
  const likeButton = galleryClone.querySelector(".profile-like-button"); // Seleccionamos el botón de like

  // 2 - Manipulacion del DOM dentro de la función
  profileGalleryCardTitle.textContent = gallery.name; // Usamos gallery.name
  profileGalleryImage.alt = gallery.name; // Usamos gallery.name
  profileGalleryImage.src = gallery.link; // Usamos gallery.link

  // Evento para eliminar la tarjeta
  profileGalleryRemoveCardButton.addEventListener("click", () => {
    containerGalleryClone.remove();
  });

  // Agregamos el evento de click a la imagen para abrir el popup de imagen grande
  profileGalleryImage.addEventListener("click", () => {
    popupImageImg.src = gallery.link; // Establecemos la fuente de la imagen en el popup
    popupImageImg.alt = gallery.name; // Establecemos el alt de la imagen
    popupImageElement.style.display = "flex"; // Mostramos el popup
  });

  // Agregamos el event listener al botón de like
  likeButton.addEventListener("click", (event) => {
    // Añadir event como parámetro
    event.target.classList.toggle("like-button-active"); // Usar event.target para alternar la clase en el botón clickeado
  });

  return containerGalleryClone;
}

// Funcion de apertura y cierre de popup de Galería
function openPopupGallery() {
  galleryPopup.classList.add("active");
  // Al abrir el popup, resetea el formulario y la validación
  galleryAddForm.reset(); // Resetea los campos del formulario
  const inputs = Array.from(
    galleryAddForm.querySelectorAll(
      ".gallery-title-image-input, .gallery-link-input"
    )
  );
  const button = galleryAddForm.querySelector(".gallery-create-button");
  inputs.forEach((input) =>
    hideError(input, {
      inputErrorClass: "input_type_error",
      errorClass: "error_visible",
    })
  );
  toggleButtonState(inputs, button, { inactiveButtonClass: "button_disabled" });
}

function closePopupGallery() {
  galleryPopup.classList.remove("active");
  // Los valores de los inputs no se limpian al cerrar, solo al resetear el formulario o al abrirlo
}

// Funcion forEach que carga el arreglo de las tarjetas
function renderGallery() {
  initialCards.forEach((gallery) => {
    const cloneGallery = createGalleryCard(gallery);
    profileGalleryContainer.appendChild(cloneGallery); // Añade al final
  });
}

// Llamado de la función renderGallery para cargar las tarjetas iniciales
renderGallery();

//Funcion del formulario para añadir nueva imagen
function handleSubmitAddImage(event) {
  event.preventDefault();

  console.log(galleryTitleImage.value, galleryLink.value); // Verifica los valores

  const newPicture = {
    name: galleryTitleImage.value,
    link: galleryLink.value,
  };

  console.log(newPicture); // Verifica el objeto creado

  const cloneImage = createGalleryCard(newPicture);

  console.log(cloneImage); //Verifica el nodo

  profileGalleryContainer.prepend(cloneImage); // Usar prepend para agregar al inicio
  closePopupGallery();
  // galleryAddForm.reset(); // Resetting is now handled in openPopupGallery
}

//// Sprint 8 - 3 - Trabajar con eventos

//Apertura y Cierre de Popup para agregar una imagen (galería)
profileAddButton.addEventListener("click", openPopupGallery);
buttonCloseGallery.addEventListener("click", closePopupGallery);

// Formulario de Galería
galleryAddForm.addEventListener("submit", handleSubmitAddImage);

// Importante: Detener la propagación de clics dentro del contenido del popup de galería
if (galleryContentWrapper) {
  // Asegúrate de que el contenedor exista
  galleryContentWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

// Evento para cerrar el popup de la imagen grande al hacer clic en la x
popupImageClose.addEventListener("click", () => {
  popupImageElement.style.display = "none"; // Ocultamos el popup
});

// Evento para cerrar el popup de la imagen grande al hacer clic fuera de la imagen (en el fondo)
popupImageElement.addEventListener("click", (event) => {
  if (event.target === popupImageElement) {
    popupImageElement.style.display = "none"; // Solo esto es necesario para cerrar
    // closePopupImage(); // <--- ELIMINADA ESTA LÍNEA QUE CAUSABA EL ERROR
  }
});

// Importante: Detener la propagación de clics dentro de la imagen del popup grande
if (popupImageContainer) {
  // Asegúrate de que el contenedor exista
  popupImageContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//// Eventos de cierre de popups generales

// Evento para cerrar el popup de perfil al hacer clic fuera del popup (en el fondo)
profilePopup.addEventListener("click", (event) => {
  if (event.target === profilePopup) {
    closePopup(); // Llama a la función consistente closePopup()
  }
});

// Evento para cerrar el popup de galería al hacer clic fuera del popup (en el fondo)
galleryPopup.addEventListener("click", (event) => {
  if (event.target === galleryPopup) {
    closePopupGallery();
  }
});

// Evento para cerrar los popups con la tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Cierra el popup de Perfil si está abierto
    if (profilePopup.classList.contains("active")) {
      closePopup();
    }
    // Cierra el popup de Galería si está abierto
    if (galleryPopup.classList.contains("active")) {
      closePopupGallery();
    }
    // Cierra el popup de Imagen grande si está abierto
    // Este popup usa style.display, así que lo comprobamos de esa manera
    if (popupImageElement.style.display !== "none") {
      popupImageElement.style.display = "none";
    }
  }
});

// Habilitar la validación de formularios una vez que todos los elementos estén disponibles
enableValidation({
  formSelector: "#profileEditForm, #galleryAddForm",
  inputSelector:
    ".profile-name-input, .profile-about-input, .gallery-title-image-input, .gallery-link-input",
  submitButtonSelector: ".profile-save-button, .gallery-create-button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "input_type_error",
  errorClass: "error_visible",
});
