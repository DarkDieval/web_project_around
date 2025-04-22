// 1 - Seleccionar el elemento del DOM

//Botones
const buttonEdit = document.querySelector(".profile-name-edit-button");
const buttonClose = document.querySelector(".profile-popup-close-button");
//Popup
const profilePopup = document.querySelector(".profile-popup-container");
//Form
const form = document.querySelector(".profile-form");
const inputName = document.querySelector(".profile-name-input");
const inputAbout = document.querySelector(".profile-about-input");
const spanName = document.querySelector(".span-profile-name");
const spanAbout = document.querySelector(".span-profile-about");

// 2 - Cear funcionalidad u/o manipulación

//Popup
function openPopup() {
  profilePopup.classList.add("active");
}

function closePopup() {
  profilePopup.classList.remove("active");
}

function handleSubmitName(event) {
  event.preventDefault();

  const name = inputName.value;

  spanName.textContent = name;

  inputName.value = "";

  closePopup();
}

function handleSubmitAbout(event) {
  event.preventDefault();

  const about = inputAbout.value;

  spanAbout.textContent = about;

  inputAbout.value = "";

  closePopup();
}

// 3 - Trabajar con eventos

//Popup
buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

//Form
form.addEventListener("submit", handleSubmitName);
form.addEventListener("submit", handleSubmitAbout);
