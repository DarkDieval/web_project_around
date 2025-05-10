const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },

  {
    name: "Montañas Calvas",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },

  {
    name: "Latemar",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },

  {
    name: "Parque Nacional de la Vanoise",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },

  {
    name: "Lago di Braies",

    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Sprint 7 - 1 - Seleccionar el elemento del DOM
//Botones
const buttonEdit = document.querySelector(".profile-name-edit-button");
const buttonClose = document.querySelector(".profile-popup-close-button");

//Popup
const profilePopup = document.querySelector(".profile-popup-container");

//Form
const profileEditForm = document.querySelector("#profileEditForm"); // ID de formulario correcto
const inputName = document.querySelector(".profile-name-input");
const inputAbout = document.querySelector(".profile-about-input");
const spanName = document.querySelector(".span-profile-name");
const spanAbout = document.querySelector(".span-profile-about");

//Sprint 8 - 1 - Seleccionar el elemento del DOM
const profileGallery = document.querySelector("#profileGallery");
const profileGalleryTemplate = document.querySelector(
  "#profileGalleryTemplate"
);

//Buttons
const profileAddButton = document.querySelector("#profileAddButton");
const buttonCloseGallery = document.querySelector(
  ".gallery-popup-close-button"
);

const profileGalleryContainer = document.querySelector(
  ".profile-gallery-container"
);

//Popup
const galleryPopup = document.querySelector(".gallery-popup-container");

//Forms
const galleryAddForm = document.querySelector("#galleryAddForm"); // ID de formulario correcto
const galleryTitleImage = document.querySelector(".gallery-title-image-input");
const galleryLink = document.querySelector(".gallery-link-input");

// Nuevo: Elementos del popup de imagen
const popupImageElement = document.querySelector(".popup-image");
const popupImageImg = popupImageElement.querySelector("img");
const popupImageClose = popupImageElement.querySelector(
  ".popup-image-close-button"
); // Selecciona el nuevo botón

// Selecciona el contenedor
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Sprint 7 - 2 - Cear funcionalidad u/o manipulación
//Popup
function openPopup() {
  profilePopup.classList.add("active");
}

function closePopup() {
  profilePopup.classList.remove("active");
  inputName.value = "";
  inputAbout.value = "";
}

function handleSubmitProfile(event) {
  // Combinado handleSubmit
  event.preventDefault();

  const name = inputName.value;
  const about = inputAbout.value;

  if (name.trim() === "") {
    spanName.textContent = "Insert Name";
  } else {
    spanName.textContent = name;
  }

  if (about.trim() === "") {
    spanAbout.textContent = "Insert Activity";
  } else {
    spanAbout.textContent = about;
  }

  closePopup();
  profileEditForm.reset();
}

//Sprint 8 - 2 - Cear funcionalidad u/o manipulación
function createGalleryCard(gallery) {
  // 1 - Seleccion de elementos dentro de la función
  const galleryClone = profileGalleryTemplate.content.cloneNode(true); // Clonamos todo el contenido del template
  const containerGalleryClone = galleryClone.querySelector(
    ".profile-gallery-card" // Seleccionamos dentro del clon
  );

  const profileGalleryImage = galleryClone.querySelector(
    ".profile-gallery__image"
  ); // Seleccionamos dentro del clon

  const profileGalleryCardInfo = galleryClone.querySelector(
    ".profile-gallery-card__info" // Seleccionamos dentro del clon
  );

  const profileGalleryCardTitle = galleryClone.querySelector(
    ".profile-gallery-card__title" // Seleccionamos dentro del clon
  );

  const profileGalleryRemoveCardButton = galleryClone.querySelector(
    ".profile-gallery-remove-card-button" // Seleccionamos dentro del clon
  );
  const likeButton = galleryClone.querySelector(".profile-like-button"); // Seleccionamos el botón de like

  // 2 - Manipulacion del DOM dentro de la función
  profileGalleryCardTitle.textContent = gallery.name; // Usamos gallery.name
  profileGalleryImage.alt = gallery.name; // Usamos gallery.name
  profileGalleryImage.src = gallery.link; // Usamos gallery.link
  profileGalleryRemoveCardButton.addEventListener("click", () => {
    containerGalleryClone.remove();
  });

  // Agregamos el evento de click a la imagen para abrir el popup
  profileGalleryImage.addEventListener("click", () => {
    popupImageImg.src = gallery.link; // Establecemos la fuente de la imagen en el popup
    popupImageElement.style.display = "flex"; // Mostramos el popup
  });

  // Agregamos el event listener al botón de like
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("like-button-active"); // Agregamos o quitamos la clase
  });

  return containerGalleryClone;
}

// Funcion de apertura y cierre de popup
function openPopupGallery() {
  galleryPopup.classList.add("active");
}

function closePopupGallery() {
  galleryPopup.classList.remove("active");
  galleryTitleImage.value = "";
  galleryLink.value = "";
}

// Funcion forEach que carga el arreglo de las tarjetas
function renderGallery() {
  initialCards.forEach((gallery) => {
    const cloneGallery = createGalleryCard(gallery);

    profileGalleryContainer.appendChild(cloneGallery); // Añade al inicio con prepend
  });
}

// Llamado de la función renderGallery
renderGallery();

//Funcion del form
function handleSubmitAddImage(event) {
  event.preventDefault();

  console.log(galleryTitleImage.value, galleryLink.value); // Verifica los valores

  const newPicture = {
    name: galleryTitleImage.value, // Cambiado a "name"
    link: galleryLink.value, // Cambiado a "link"
  };

  console.log(newPicture); // Verifica el objeto creado

  const cloneImage = createGalleryCard(newPicture);

  console.log(cloneImage); //Verifica el nodo

  profileGalleryContainer.prepend(cloneImage); // Usar prepend para agregar al inicio
  closePopupGallery();
  galleryAddForm.reset();
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Sprint 7 - 3 - Trabajar con eventos
// Apertura y cierre del Popup de edicion de nombre
buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

//Form
profileEditForm.addEventListener("submit", handleSubmitProfile); // Un solo listener

// Sprint 8 - 3 - Trabajar con eventos
//Apertura y Cierre de Popup para agregar una imagen
profileAddButton.addEventListener("click", openPopupGallery);
buttonCloseGallery.addEventListener("click", closePopupGallery);

//Form
galleryAddForm.addEventListener("submit", handleSubmitAddImage);

// Evento para cerrar el popup de la imagen al hacer clic en la x
popupImageClose.addEventListener("click", () => {
  popupImageElement.style.display = "none"; // Ocultamos el popup
});

// Evento para cerrar el popup de la imagen al hacer clic fuera de la imagen
popupImageElement.addEventListener("click", (event) => {
  if (event.target === popupImageElement) {
    popupImageElement.style.display = "none";
  }
});
