export const commonValidationConfig = {
  inputSelector: ".popup__input",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const editProfileValidationConfig = {
  ...commonValidationConfig,
  submitButtonSelector: ".popup__button_save",
  inactiveButtonClass: "popup__button_disabled",
};

export const addImageValidationConfig = {
  ...commonValidationConfig,
  submitButtonSelector: ".popup__button_create",
  inactiveButtonClass: "popup__button_disabled",
};

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

export const profileNameSelector = ".profile__name";
export const profileJobSelector = ".profile__job";

export const editProfilePopupSelector = "#editProfilePopup";
export const addImagePopupSelector = "#addImagePopup";
export const openImagePopupSelector = "#openImagePopup";

export const popupImageSelector = ".popup__image";
export const popupImageTitleSelector = ".popup__image-title";

export const placesGridSelector = ".places__grid";
export const cardTemplateSelector = "#main__card-template";

export const editButtonSelector = ".profile__button-edit";
export const addButtonSelector = ".profile__button-add";
