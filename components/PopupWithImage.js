import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, { imageSelector, titleSelector }) {
    super(popupSelector);

    this._popupImage = this._popupElement.querySelector(imageSelector);
    this._popupImageTitle = this._popupElement.querySelector(titleSelector);
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageTitle.textContent = name;

    super.open();
  }
}
