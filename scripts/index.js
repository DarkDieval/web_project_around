// scripts/index.js

// Importa las clases y configuraciones necesarias
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
// Importamos solo las funciones genéricas de popup
import { openPopup, closePopup, renderCard } from "./utils.js";
import { validationConfig, initialCards } from "./constants.js";

// 1 - Selección de Elementos del DOM
// Popups y botones
const editButton = document.querySelector(".main__button-edit");
const editProfilePopup = document.getElementById("editProfilePopup");
const addButton = document.querySelector(".main__button-add");
const addImagePopup = document.getElementById("addImagePopup");

// --- Selección de elementos para el Popup de Imagen ---
// 'openImagePopup' es el div padre que tiene la clase 'popup'
const imagePopupElement = document.getElementById("openImagePopup");
// 'imagePopupContainer' es el div con la clase 'popup__container popup__container_image'
const popupImageContainer = document.getElementById("imagePopupContainer");
const popupImage = popupImageContainer.querySelector(".popup__image"); // La etiqueta <img>
const popupImageTitle = popupImageContainer.querySelector(
  ".popup__image-title"
); // La etiqueta <h3> para el título

// Formularios
const formEdit = document.getElementById("formEdit");
const formAddImage = document.getElementById("formAddImage");

// Campos de entrada del popup de edición de perfil
const nameInput = document.getElementById("name-input");
const aboutInput = document.getElementById("about-input");

// Elementos del perfil en la página principal
const profileNameElement = document.querySelector(".main__paragraph-name");
const profileInfoElement = document.querySelector(".main__paragraph-info");

// Elementos para las tarjetas
const placesGrid = document.querySelector(".main__places__grid");
const cardTemplateSelector = "#main__card-template"; // Selector del template de la tarjeta

// Campos de entrada del popup de añadir imagen
const imageNameInput = document.getElementById("image-name-input");
const imageUrlInput = document.getElementById("add-image-input");

// 5 - Instanciar o crear los elementos a partir de las clases
const editFormValidator = new FormValidator(validationConfig, formEdit);
const addImageFormValidator = new FormValidator(validationConfig, formAddImage);

// 6 - Llamar los métodos para habilitar la validación en cada formulario.
editFormValidator.enableValidation();
addImageFormValidator.enableValidation();

// --- Lógica de Eventos (Orquestación principal de la UI) ---

// Listener para cerrar cualquier popup haciendo clic en el overlay
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup(popup); // Usa la función genérica de utils.js
    }
  });
});

// Listener para cerrar cualquier popup haciendo clic en sus botones de cierre
document.querySelectorAll(".popup__button_close").forEach((closeButton) => {
  closeButton.addEventListener("click", (evt) => {
    const popupToClose = evt.target.closest(".popup");
    if (popupToClose) {
      closePopup(popupToClose); // Usa la función genérica de utils.js
    }
  });
});

// Lógica ESPECÍFICA para el popup de Edición de Perfil
editButton.addEventListener("click", () => {
  nameInput.value = profileNameElement.textContent;
  aboutInput.value = profileInfoElement.textContent;
  editFormValidator.resetValidation();
  openPopup(editProfilePopup); // Usa la función genérica de utils.js
});

// Listener para manejar el envío del formulario de edición de perfil
formEdit.addEventListener("submit", (event) => {
  profileNameElement.textContent = nameInput.value;
  profileInfoElement.textContent = aboutInput.value;
  closePopup(editProfilePopup); // Cierra el popup
});

// Lógica ESPECÍFICA para el popup de Añadir Imagen
addButton.addEventListener("click", () => {
  formAddImage.reset();
  addImageFormValidator.resetValidation();
  openPopup(addImagePopup); // Usa la función genérica de utils.js
});

// Listener para manejar el envío del formulario de añadir imagen
formAddImage.addEventListener("submit", (event) => {
  const newCardData = {
    name: imageNameInput.value,
    link: imageUrlInput.value,
  };

  // Pasa las referencias necesarias a la clase Card
  const newCard = new Card(newCardData, cardTemplateSelector, {
    openPopup: openPopup, // Pasa la función openPopup
    imagePopupElement: imagePopupElement, // El popup general (con clase 'popup')
    popupImage: popupImage, // El elemento <img> dentro
    popupImageTitle: popupImageTitle, // El elemento <h3> del título
  });
  const newCardElement = newCard.generateCard();
  renderCard(newCardElement, placesGrid);
  closePopup(addImagePopup); // Cierra el popup
});

// --- Renderizar las tarjetas iniciales al cargar la página ---
initialCards.forEach((cardData) => {
  // Pasa las referencias necesarias a la clase Card
  const card = new Card(cardData, cardTemplateSelector, {
    openPopup: openPopup, // Pasa la función openPopup
    imagePopupElement: imagePopupElement, // El popup general (con clase 'popup')
    popupImage: popupImage, // El elemento <img> dentro
    popupImageTitle: popupImageTitle, // El elemento <h3> del título
  });
  const cardElement = card.generateCard();
  renderCard(cardElement, placesGrid);
});
