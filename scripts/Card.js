// scripts/Card.js

class Card {
  // El constructor ahora recibe un tercer argumento 'popupConfig'
  constructor(data, cardSelector, popupConfig) {
    this._name = data.name; // Nombre del lugar
    this._link = data.link; // Enlace a la imagen
    this._cardSelector = cardSelector; // Selector del template HTML para la tarjeta

    // Guarda las referencias a la función genérica de popup y los elementos del popup de imagen
    this._openPopup = popupConfig.openPopup;
    this._imagePopupElement = popupConfig.imagePopupElement; // El div general del popup de imagen
    this._popupImage = popupConfig.popupImage; // El elemento <img> dentro del popup
    this._popupImageTitle = popupConfig.popupImageTitle; // El elemento <h3> del título
  }

  // Método privado para obtener la plantilla del elemento DOM de la tarjeta
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".main__place-card")
      .cloneNode(true);

    return cardElement;
  }

  // Método privado para configurar los event listeners de la tarjeta
  _setEventListeners() {
    // Event listener para el botón de like
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    // Event listener para el botón de eliminar
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    // Event listener para la imagen de la tarjeta (para abrir la vista grande)
    this._cardImage.addEventListener("click", () => {
      // Configura la imagen y el título del popup
      this._popupImage.src = this._link;
      this._popupImage.alt = this._name;
      this._popupImageTitle.textContent = this._name;

      // Abre el popup de imagen usando la función genérica
      this._openPopup(this._imagePopupElement);
    });
  }

  // Método para manejar el clic en el botón de like
  _handleLikeClick() {
    this._likeButton.classList.toggle("main__place-card__like-button_active");
  }

  // Método para manejar el clic en el botón de eliminar
  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // Método público para generar el elemento completo de la tarjeta
  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".main__place-card__image");
    this._cardTitle = this._element.querySelector(".main__place-card__title");
    this._likeButton = this._element.querySelector(
      ".main__place-card__like-button"
    );
    this._deleteButton = this._element.querySelector(
      ".main__place-card__delete-button"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
