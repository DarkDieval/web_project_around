// Mostrar mensaje de error
// Recibe el elemento input que tiene el error y un objeto de configuración con las clases CSS.
export const showError = (input, config) => {
  // Exportado para ser usado en index.js
  // 1. Selecciona el elemento span de error asociado al input.
  const errorSpan = document.querySelector(`#${input.id}-error`);

  // 2. Establece el texto del span de error con el mensaje de validación del input.
  errorSpan.textContent = input.validationMessage;

  // 3. Añade la clase CSS de error al input para cambiar su estilo (ej. borde rojo).
  input.classList.add(config.inputErrorClass);

  // 4. Añade la clase CSS para hacer visible el span de error.
  errorSpan.classList.add(config.errorClass);
};

// Ocultar mensaje de error
// Recibe el elemento input y un objeto de configuración.
export const hideError = (input, config) => {
  // Exportado para ser usado en index.js
  // 1. Selecciona el elemento span de error asociado al input.
  const errorSpan = document.querySelector(`#${input.id}-error`);

  // 2. Limpia el texto del span de error.
  errorSpan.textContent = "";

  // 3. Elimina la clase CSS de error del input.
  input.classList.remove(config.inputErrorClass);

  // 4. Elimina la clase CSS que hace visible el span de error.
  errorSpan.classList.remove(config.errorClass);
};

// Validar si un input es correcto o no
// Recibe el elemento input y un objeto de configuración.
const checkInputValidity = (input, config) => {
  // Comprueba si el input no es válido.
  if (!input.validity.valid) {
    // Si no es válido, muestra el mensaje de error.
    showError(input, config);
  } else {
    // Si es válido, oculta cualquier mensaje de error existente.
    hideError(input, config);
  }
};

// Activar o desactivar el botón del formulario (submit)
// Recibe un array de inputs, el botón del formulario y un objeto de configuración.
export const toggleButtonState = (inputs, button, config) => {
  // Exportado para ser usado en index.js
  // Comprueba si TODOS los inputs en el array son válidos.
  const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    // Si todos los inputs son válidos, habilita el botón.
    button.disabled = false;
    // Elimina la clase que lo hace parecer deshabilitado.
    button.classList.remove(config.inactiveButtonClass);
  } else {
    // Si al menos un input no es válido, deshabilita el botón.
    button.disabled = true;
    // Añade la clase que lo hace parecer deshabilitado.
    button.classList.add(config.inactiveButtonClass);
  }
};

// Agregar eventos a cada input dentro de un formulario
// Recibe el formulario y un objeto de configuración.
const setEventListeners = (form, config) => {
  // Selecciona todos los inputs del formulario que coinciden con el selector de inputs.
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  // Selecciona el botón de submit del formulario.
  const button = form.querySelector(config.submitButtonSelector);

  // Itera sobre cada input para añadir un event listener.
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      // Cada vez que el usuario escribe en un input, se verifica su validez
      // y se actualiza el estado del botón.
      checkInputValidity(input, config);
      toggleButtonState(inputs, button, config);
    });
  });

  // También se debe verificar el estado del botón cuando el formulario se carga por primera vez.
  toggleButtonState(inputs, button, config);

  // Prevenir el comportamiento por defecto del envío del formulario (recarga de la página).
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

// FUNCION PRINCIPAL: Habilita la validación para todos los formularios especificados
// Recibe un objeto de configuración con selectores y clases CSS.
export const enableValidation = (config) => {
  // Selecciona todos los formularios que coinciden con el selector de formularios.
  const forms = document.querySelectorAll(config.formSelector);

  // Itera sobre cada formulario para configurar sus event listeners.
  forms.forEach((form) => {
    setEventListeners(form, config);
  });
};
