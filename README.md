Tripleten web_project_homeland
Dirección del proyecto:

https://darkdieval.github.io/web_project_around/

Descripción del proyecto:

Este proyecto web es una plataforma interactiva diseñada para explorar y compartir lugares de interés. La interfaz presenta las siguientes funcionalidades principales:

Perfil de usuario: Sección dedicada a la información del usuario, que incluye nombre y descripción. Permite la edición de esta información.

Galería de imágenes: Muestra una colección de imágenes de lugares, con la posibilidad de dar "me gusta" a las imágenes.

Popup de visualización de imágenes: Permite ver las imágenes de la galería en tamaño completo.

El diseño es adaptable a diferentes tamaños de pantalla, asegurando una experiencia de usuario consistente tanto en dispositivos de escritorio como móviles.

Tecnologías usadas:

HTML: Define la estructura y el contenido de la página web.

CSS: Proporciona estilos visuales, diseño y adaptabilidad (diseño responsivo) mediante media queries.

JavaScript (Modular): Se ha utilizado JavaScript para crear una experiencia de usuario dinámica e interactiva. El código está organizado en módulos y clases para mejorar la mantenibilidad, la reutilización y la escalabilidad del proyecto.

Arquitectura JavaScript Modular:

El proyecto sigue una estructura modular en JavaScript para una mejor organización y separación de responsabilidades, haciendo el código más limpio y fácil de gestionar:

index.js: Es el punto de entrada principal de la aplicación. Aquí se inicializan los componentes, se configuran los oyentes de eventos y se orquesta la interacción entre las diferentes partes del proyecto. Es el lugar donde se importan y utilizan las clases Card y FormValidator, y las funciones de utilidad.

Card.js: Este módulo exporta la clase Card. Cada instancia de Card representa una tarjeta de lugar individual en la galería. La clase se encarga de:

Renderizar la tarjeta a partir de una plantilla HTML.

Manejar la lógica de los botones de "me gusta" (toggle de clase activa).

Implementar la funcionalidad para eliminar la tarjeta.

Abrir el popup de visualización de imagen al hacer clic en la imagen de la tarjeta.

FormValidator.js: Este módulo exporta la clase FormValidator. Una instancia de esta clase es responsable de validar un formulario específico. Sus funcionalidades incluyen:

Mostrar y ocultar mensajes de error para campos de entrada inválidos.

Habilitar o deshabilitar el botón de envío del formulario según la validez de todos los campos.

Gestionar el estado visual de los campos de entrada.

utils.js: Contiene un conjunto de funciones de utilidad genéricas que se utilizan en varios módulos para evitar la duplicación de código. Esto incluye funciones para:

Abrir y cerrar popups de manera genérica.

Manejar el cierre de popups al presionar la tecla Escape.

constants.js: Este archivo centraliza todas las constantes y selectores de CSS utilizados en el proyecto. Almacenar estas constantes en un solo lugar facilita la gestión y actualización de los valores, y mejora la legibilidad del código.

Funcionalidades:

Edición del perfil de usuario: Los usuarios pueden modificar su nombre y descripción a través de un formulario, cuya validación es gestionada por la clase FormValidator.

Visualización de imágenes de la galería: Se muestra una colección de imágenes que representan diversos lugares, cada una gestionada por una instancia de la clase Card.

Funcionalidad de "Me gusta": Cada tarjeta de imagen (Card) tiene un botón de "me gusta" que permite a los usuarios indicar su preferencia.

Visualización de imágenes en tamaño completo: Al hacer clic en una imagen de la galería, se abre un popup que muestra la imagen en detalle, utilizando las funciones de utilidad de utils.js.

Añadir nuevas imágenes a la galería: Los usuarios pueden agregar nuevas tarjetas de imágenes a la galería mediante un formulario, cuya validación también es manejada por la clase FormValidator.

Planes de mejora:

Persistencia de datos: Explorar mecanismos para guardar la información del perfil y los "me gusta" de forma permanente (por ejemplo, utilizando LocalStorage o una API).

Optimización del rendimiento: Mejorar la carga de imágenes y otros recursos para optimizar el rendimiento de la página.

Mejoras en la interfaz de usuario: Considerar mejoras en la interfaz, como transiciones y animaciones, para una experiencia más atractiva.

Integración de API: Investigar la posibilidad de integrar una API para obtener información adicional sobre los lugares mostrados o para añadir funcionalidades extra.

Autor:

Dieval
