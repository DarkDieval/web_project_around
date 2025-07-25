import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__container");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.id] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.id] || "";
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
