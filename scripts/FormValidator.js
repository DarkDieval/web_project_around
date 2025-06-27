// scripts/FormValidator.js

class FormValidator {
  // 3 - Definición de propiedades o atributos
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  // 4 - Definir de métodos o funciones

  // Método privado para mostrar el mensaje de error
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Método privado para ocultar el mensaje de error
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = ""; // Limpiar el mensaje de error
  }

  // Método privado para verificar la validez de un input
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Método privado para verificar si hay algún input inválido en el formulario
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Método privado para alternar el estado del botón de envío
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true; // Deshabilitar el botón
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false; // Habilitar el botón
    }
  }

  // Método privado para añadir listeners a los inputs
  _setEventListeners() {
    this._toggleButtonState(); // Establecer el estado inicial del botón

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    // Se mantiene el listener para 'submit' aquí si el FormValidator es el único que previene el submit.
    // Si el formulario ya se maneja en otro lugar que llama a .preventDefault(), este podría eliminarse.
    this._formElement.addEventListener("submit", () => {
      // Retrasar el reinicio del estado de validación para permitir que el envío se procese
      setTimeout(() => {
        this._toggleButtonState(); // Reinicia el estado del botón después del envío
      }, 0);
    });

    // Se elimina el listener 'reset' aquí y se reemplaza con el método público resetValidation
  }

  // Nuevo método público para resetear la validación del formulario
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement); // Limpia los mensajes de error
    });
    this._toggleButtonState(); // Asegura que el botón se deshabilite si es necesario
  }

  // Método público para habilitar la validación del formulario
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Asegura que el formulario no se envíe por defecto
    });
    this._setEventListeners();

    // Asegurarse de que el estado inicial del formulario esté limpio
    this.resetValidation(); // Usar el nuevo método
  }
}

// Exporta la clase para poder importarla en otros archivos
export default FormValidator;
