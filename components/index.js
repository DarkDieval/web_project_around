import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { validationConfig, initialCards } from "./constants.js";

const editButton = document.querySelector(".main__button-edit");
const addButton = document.querySelector(".main__button-add");

const profileNameSelector = ".main__paragraph-name";
const profileJobSelector = ".main__paragraph-info";

const editProfilePopupSelector = "#editProfilePopup";
const addImagePopupSelector = "#addImagePopup";
const openImagePopupSelector = "#openImagePopup";

const popupImageSelector = ".popup__image";
const popupImageTitleSelector = ".popup__image-title";

const placesGridSelector = ".main__places__grid";
const cardTemplateSelector = "#main__card-template";

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
  const newCardElement = createCard(newCardData);
  cardListSection.setItem(newCardElement);
});
addImagePopup.setEventListeners();

const editFormValidator = new FormValidator(
  validationConfig,
  editProfilePopup._form
);
const addImageFormValidator = new FormValidator(
  validationConfig,
  addImagePopup._form
);

editFormValidator.enableValidation();
addImageFormValidator.enableValidation();

editButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  editProfilePopup._form.querySelector("#name-input").value =
    currentUserInfo.name;
  editProfilePopup._form.querySelector("#about-input").value =
    currentUserInfo.job;
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  addImageFormValidator.resetValidation();
  addImagePopup.open();
});
