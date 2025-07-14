import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import {
  initialCards,
  profileNameSelector,
  profileJobSelector,
  editProfilePopupSelector,
  addImagePopupSelector,
  openImagePopupSelector,
  popupImageSelector,
  popupImageTitleSelector,
  placesGridSelector,
  cardTemplateSelector,
  editButtonSelector,
  addButtonSelector,
  editProfileValidationConfig,
  addImageValidationConfig,
} from "./constants.js";

const editButton = document.querySelector(editButtonSelector);
const addButton = document.querySelector(addButtonSelector);

const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  jobSelector: profileJobSelector,
});

const imagePopup = new PopupWithImage(openImagePopupSelector, {
  imageSelector: popupImageSelector,
  titleSelector: popupImageTitleSelector,
});
imagePopup.setEventListeners();

const handleCardClick = (name, link) => {
  imagePopup.open(name, link);
};

const createCard = (cardData) => {
  const card = new Card(cardData, cardTemplateSelector, handleCardClick);
  return card.generateCard();
};

const cardListSection = new Section(
  {
    data: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardListSection.setItem(cardElement);
    },
  },
  placesGridSelector
);
cardListSection.renderItems();

const editProfilePopup = new PopupWithForm(
  editProfilePopupSelector,
  (formData) => {
    userInfo.setUserInfo({
      name: formData["name-input"],
      job: formData["about-input"],
    });
  }
);
editProfilePopup.setEventListeners();

const addImagePopup = new PopupWithForm(addImagePopupSelector, (formData) => {
  const newCardData = {
    name: formData["image-name-input"],
    link: formData["add-image-input"],
  };
  cardListSection.setItem(createCard(newCardData));
});
addImagePopup.setEventListeners();

const editFormValidator = new FormValidator(
  editProfileValidationConfig,
  editProfilePopup._form
);
const addImageFormValidator = new FormValidator(
  addImageValidationConfig,
  addImagePopup._form
);

editFormValidator.enableValidation();
addImageFormValidator.enableValidation();

editButton.addEventListener("click", () => {
  console.log("Clic detectado en el botón de editar perfil.");
  const currentUserInfo = userInfo.getUserInfo();
  editProfilePopup.setInputValues({
    "name-input": currentUserInfo.name,
    "about-input": currentUserInfo.job,
  });
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  addImageFormValidator.resetValidation();
  addImagePopup.open();
});
