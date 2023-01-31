# [VIVA LA BIRRA - Web-App-Project 👋](https://beautiful-banoffee-f93522.netlify.app/)

## E-commerce construido con React Js y Firebase

Este proyecto es mi entrega final del curso de React Js de Coderhouse.\
Consiste en un e-commerce de Cervezas, desarrollado como una single-page application.

![Captura de la web-app](https://res.cloudinary.com/dystdxfua/image/upload/v1674270280/just%/just-cupcake-home_lm19vv.jpg)

> Link al deploy: [https://beautiful-banoffee-f93522.netlify.app/](https://beautiful-banoffee-f93522.netlify.app/) - [Link a demo](https://res.cloudinary.com/dystdxfua/video/upload/v1674278559/just%20cupcakes/just-cupcake_r6qkt2.mp4)

Creado con [Create React App](https://github.com/facebook/create-react-app).

### Funcionalidades desarrolladas pensando en la experiencia de usuario:

- Navegabilidad, simula una multi-page application.
- En los procesos que pueden demorar un poco se muestra un loader.
- En la página inicial se visualizan todas las cervezas.
- El logo navega a la página de inicio.
- Los enlaces de las categorías cambian su styling cuando el usuario se encuentra en esa categoría.
- En el cart widget se muestran la cantidad de productos que se van cargando en el proceso de compra y además navega a la página del cart.
- Las cards de los productos que se encuentran en las rutas "/" y "/categoria/..." navegan al detalle de cada producto.
- Las cards de los detalles tienen un selector de unidades y un botón para agregar al carrito. Una vez presionado el botón aparece un mensaje debajo diciendo que la carga fue exitosa.
- Los productos cargados en el carrito persisten en el local storage.
- En la vista del carrito se muestra el detalle de productos cargados, nombre, cantidad, precio unitario, descripcion e imagen. También hay una serie de botones que permiten, eliminar un producto en particular, vaciar el carrito completo.
- En la misma página hay un boton para terminar el proceso de compra.
- El resultado del proceso de compra se visualiza en un mensaje de éxito con dos segundos de duración y a su vez se vacia el carrito.

### Funcionalidades desarrolladas pensando en la seguridad del proceso:

- Los productos están cargados en una base de datos de firestore.
- Cada vez que carga una página en la que se muestran productos se hace una llamada a firestore. De ese modo la app puede mostrar el stock disponible en ese momento.
- Los botones para seleccionar la cantidad de productos que están en los detalles, están limitados por el stock.
- En el carrito no se muestran productos duplicados. Si el mismo ya se agregó, y se vuelve a agregar, al mismo se le suman las cantidades.
- El proceso de finalización de la compra se realiza con un llamado a firestore para agregar la compra correspondiente en una coleccion llamada ventas, el cual se guarda el id de los productos con sus cantidades, fecha de compra, y nro de coken de la compra.
- Las credenciales para la conexión con firebase y firestore están cargadas en variables de entorno.

### Bibliotecas complementarias:

- Firebase - Para el almacenamiento de datos.
- Ant Design - para los íconos.
- React-router-dom - para el ruteo de la aplicación.
- React-toastify - Para el uso de mensajes 

> [acá todas las dependencias utilizadas](https://github.com/Malinowsk/React-Js-App-Project/blob/main/my-app/package.json)