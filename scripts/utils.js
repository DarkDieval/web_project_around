// scripts/utils.js

// Funciones genéricas para abrir y cerrar popups
export function openPopup(popupElement) {
  popupElement.classList.add("active");
  // Añadir listener para la tecla 'Escape' al abrir cualquier popup
  document.addEventListener("keydown", closePopupOnEscape);
}

// Función genérica para cerrar un popup
export function closePopup(popupElement) {
  popupElement.classList.remove("active");
  // Remover listener para la tecla 'Escape' al cerrar el popup
  document.removeEventListener("keydown", closePopupOnEscape);
}

// Función genérica para cerrar el popup si se presiona la tecla 'Escape'
export function closePopupOnEscape(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup.active");
    if (activePopup) {
      closePopup(activePopup);
    }
  }
}

// Función de utilidad para renderizar una tarjeta en un contenedor
export function renderCard(cardElement, container) {
  container.prepend(cardElement); // Añade la tarjeta al principio del contenedor
}
