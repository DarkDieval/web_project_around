enableValidation({
  formSelector: ".profile-form, .gallery-form", // Selecciona ambos formularios por sus clases
  inputSelector:
    ".profile-name-input, .profile-about-input, .gallery-title-image-input, .gallery-link-input", // Selectores para todos tus inputs
  submitButtonSelector: ".profile-save-button, .gallery-create-button", // Selectores para ambos botones de submit
  inactiveButtonClass: "button_disabled", // Esta clase la tendrás que añadir en tu CSS y a los botones inicialmente
  inputErrorClass: "input_type_error", // Esta clase la tendrás que añadir en tu CSS para el estilo del input con error
  errorClass: "error_visible", // Esta clase la tendrás que añadir en tu CSS para mostrar el span de error
});
