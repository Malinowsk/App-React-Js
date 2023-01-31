# React App

* Para descargar la carpeta "node_modules", abrir la consola y ubicarse en la carpeta "my-app".

``` npm install react-scripts --save ```

* De ser necesario, descargar las dependencias que utilizan los iconos de ant desing.

``` npm install --save @ant-design/icons ```


# [Just Cupcakes -web-app-project 👋](https://entrega-final-react-js-coderhouse.netlify.app/)

## E-commerce construido con React Js y Firebase

Este proyecto es mi entrega final del curso de React Js de Coderhouse.\
Consiste en un e-commerce de cupcakes, desarrollaco como una single-page application.

![Captura de la web-app](https://res.cloudinary.com/dystdxfua/image/upload/v1674270280/just%20cupcakes/just-cupcake-home_lm19vv.jpg)

> Link al deploy: [https://entrega-final-react-js-coderhouse.netlify.app/](https://entrega-final-react-js-coderhouse.netlify.app/) - [Link a demo](https://res.cloudinary.com/dystdxfua/video/upload/v1674278559/just%20cupcakes/just-cupcake_r6qkt2.mp4)

Creado con [Create React App](https://github.com/facebook/create-react-app).

### Funcionalidades desarrolladas pensando en la experiencia de usuario:

- Navegabilidad, simula una multi-page application.
- En los procesos que pueden demorar un poco se muestra un loader.
- En la página inicial se visualizan 4 productos aleatorios.
- La barra de navegación es visible en todo momento.
- El logo navega a la página de inicio.
- Los enlaces de las categorías cambian su styling cuando el usuario se encuentra en esa categoría.
- En el cart widget se muestran la cantidad de productos que se van cargando en el proceso de compra y además navega a la página del cart.
- Las cards de los productos que se encuentran en las rutas "/" y "/category/..." navegan al detalle de cada producto.
- Las cards de los detalles tienen un selector de unidades y un botón para agregar al carrito. Una vez presionado el botón aparece otro para abrir el carrito.
- Si en el mismo proceso de compra el usuario vuelve a abrir el detalle de un producto existente en el carrito el selector de unidades muestra la cantidad que hay en el carrito y el botón cambia la leyenda "Agregar al carrito" por "Cambiar cantidad".
- Los productos cargados en el carrito persisten en el local storage.
- En la vista del carrito se muestra el detalle de productos cargados, nombre, cantidad, precio unitario, subtotal y total. También hay una serie de botones que permiten, agregar y disminuir la cantidad, eliminar un producto en particular, vaciar el carrito completo.
- En la misma página hay un formulario que el cliente debe completar antes de poder terminar el proceso de compra.
- El resultado del proceso de compra se visualiza en un modal. Si es exitoso, devuelve el id de la orden de compra. Si al enviar la compra algún producto quedó sin stock, se devuelve un mensaje indicando cual es el producto y la cantidad que queda en stock.

### Funcionalidades desarrolladas pensando en la seguridad del proceso:

- Los productos están cargados en una base de datos de firestore.
- Cada vez que carga una página en la que se muestran productos se hace una llamada a firestore. De ese modo la app puede mostrar el stock disponible en ese momento.
- Los botones para seleccionar la cantidad de productos que están en los detalles, están limitados por el stock.
- En el carrito no se muestran productos duplicados. Si el mismo ya se agregó, sólo es posible editarlo.
- El formulario para completar los datos tiene validaciones y en caso de contener algún error le muestra un mensaje al cliente.
- El proceso de finalización de la compra se realiza con un llamado a firestore en el que se verifica el stock de todos los productos antes de cargar la orden. También baja el stock en firestore si la orden se carga con éxito.
- La configuración de la conexión con firebase y firestore, y toda la lógica que requiere de esos servicios está en el mismo archivo.
- Las credenciales para la conexión con firebase y firestore están cargadas en variables de entorno.

### Bibliotecas complementarias:

- Chackra UI - principalmente para las cards, tabla y loader.
- React-icons - para los íconos.
- React-router-dom - para el ruteo de la aplicación.
- React-hook-form y Yup - para las validaciones y manejo general del formulario.

> [acá todas las dependencias utilizadas](https://github.com/MariaSoledadHiga/react-js-entrega-final/blob/main/package.json)