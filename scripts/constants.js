export const validationConfig = {
  formSelector: ".popup__container", // Selector para todos los formularios
  inputSelector: ".popup__input", // Selector para todos los inputs
  submitButtonSelector: ".popup__button_save", // Selector del botón de guardar/crear
  inactiveButtonClass: "popup__button_save_disabled", // Clase para el botón deshabilitado
  inputErrorClass: "popup__input_type_error", // Clase para el input con error visual
  errorClass: "popup__input-error_active", // Clase para mostrar el mensaje de error
};

// Arreglo de tarjetas iniciales (mantén esto aquí, o podrías tener un archivo `initial-cards.js`)
export const initialCards = [
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
