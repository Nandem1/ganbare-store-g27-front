# Proyecto Final: Ecommerce Ganbare Store
## Grupo
Proyecto realizado por:
 - Vicente Aguirre
 - Isabel Palacios
 - Katia Velasquez

## Instalación

Para poder correr el proyecto necesitas realizar los siguientes pasos:

 - Descarga el proyecto y ábrelo en vsCode.
 - Ejecuta el comando ```npm install ``` (para instalar dependencias necesarias para el proyecto).
 - Ejecuta el comando ```npm run dev ``` (para levantar el proyecto).

## Descripción
Proyecto de FrontEnd de Tienda Ecommerce desarrollado con React y estilizado con React- Bootstrap como parte del proyecto final para la carrera de Desarrollo FullStack JS en Desafío Latam.
Se utilizaron las siguientes librerías:

 - Axios: Para solicitudes HTTP.
 - Formik: Para manejo de formularios.
 - React-Bootstrap: Para estilización de la aplicación.
 - react-router-dom: Para manejo de rutas.
 - Sweetalert2: Para los mensajes de alerta.
 - Validator: Para validaciones en el formulario.
 - Yup: Para validaciones en el formulario.

## Consideraciones

El proyecto simula una tienda donde se consideran 2 roles:

 - **Comprador:** Usuario que necesita estar loqueado para poder agregar productos al carro y poder comprar productos.
 - **Administrador:** Usuario que puede ingresar productos para ser vendidos en la página de la tienda.
![Captura de Pantalla 2023-07-26 a la(s) 19 56 06](https://github.com/Nandem1/ganbare-store-g27-front/assets/106329497/28eb1e7d-cea2-4e56-a11b-7b878e73a6bb)

Para poder loguearse es necesario crear una cuenta e indicar el tipo de perfil que se desea tener (este punto sera retirado una vez que sea implementado el Backend). Una vez creada la cuenta es necesario usarla en el login lo cual dará acceso a las rutas protegidas.

Las vistas que están protegidas consideran:

 - **Mi cuenta:** Donde se pueden ver los datos asociados a la cuenta que esta fogueada. Existe la posibilidad de editar estos datos.
 ![Captura de Pantalla 2023-07-26 a la(s) 19 53 44](https://github.com/Nandem1/ganbare-store-g27-front/assets/106329497/2e334280-302d-42ed-9367-d067eb7e6753)

 - **Carro de compras:** Aqui se puede ver los productos que han sido agregados al carro con el detalle de la cantidad y subtitules, así como eltotal de la compra.
![Captura de Pantalla 2023-07-26 a la(s) 19 54 20](https://github.com/Nandem1/ganbare-store-g27-front/assets/106329497/8d86155b-0a3b-4d68-9477-482a2fef14df)

 - **Ingreso de productos:** Este componente se visualiza en la vista de Mi cuenta cuando el usuario loqueado tiene perfil de administrador.
![Captura de Pantalla 2023-07-26 a la(s) 19 59 29](https://github.com/Nandem1/ganbare-store-g27-front/assets/106329497/165fac08-a849-4244-8f36-acaea8282bdd)


**El usuario se crea provisoriamente en el LocalStorage para poder simular el registro y la validación de usuario y contraseña.**

