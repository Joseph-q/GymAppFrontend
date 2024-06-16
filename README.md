# 🏋️‍♂️ Aplicación de Gimnasio

¡Bienvenido a la Aplicación de Gimnasio! Esta plataforma integral está diseñada para la gestión eficiente de usuarios en un gimnasio, facilitando el registro, la autenticación y la gestión de suscripciones.

## 🚀 Características

- **Autenticación de usuarios**: Proceso seguro de inicio de sesión y registro de nuevos usuarios.
- **Suscripciones**: Compra y gestión de suscripciones de gimnasio.
- **Recordatorios y notificaciones**: Recepción de recordatorios sobre sesiones, autenticacion y notificaciones importantes.

---

## ⚙️ ¿Cómo funciona por detrás?

La aplicación está estructurada en dos partes principales: el frontend y el backend, que interactúan de manera fluida para ofrecer una experiencia de usuario óptima.
### Frontend

El frontend está desarrollado con tecnologías modernas que garantizan una interfaz de usuario intuitiva y receptiva. Este se comunica con el backend a través de una API REST, enviando y recibiendo datos en formato JSON.

#### Página Principal
![Página Principal](/src/assets/GymApp/PrincipalPage.png)

#### Inicio de Sesión
Cuando el usuario inicia sesión y las credenciales son correctas, se envía un token de sesión con una versión específica. Si la contraseña es incorrecta, se devuelve un código de estado 401 indicando "Email o contraseña incorrecta".
![Inicio de Sesión](/src/assets/GymApp/AuthLogin.png)

#### Registro
Al registrarse, se envía una solicitud al backend para la creación de un nuevo usuario. Si el correo electrónico ya está registrado, se devuelve un código de estado 400 con el mensaje "Email ya registrado".
![Registro](/src/assets/GymApp/AuthRegister.png)

#### Olvidó Contraseña
Si el usuario olvida su contraseña, se envía un correo electrónico con un token mágico para recuperarla.
![Olvidó Contraseña](/src/assets/GymApp/AuthForgotPassword.png)

#### Recuperación de Contraseña
La recuperación de la contraseña se realiza a través de un enlace único. El primer parámetro del enlace es el ID del usuario y el segundo es el token mágico, que tiene una validez de solo 10 minutos. Ejemplo de enlace:
`http://localhost:4200/auth/recover-password/2a845411-75c9-4887-a95e-ac3bd0307553/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjJhODQ1NDExLTc1YzktNDg4Ny1hOTVlLWFjM2JkMDMwNzU1MyIsImVtYWlsIjoiYWpvc2VwaHNhbnpqQGdtYWlsLmNvbSIsImlhdCI6MTcxODQ5OTQ0NSwiZXhwIjoxNzE4NTAwMDQ1fQ.Z8ay0kL6RhoQqjUGwt-3Mr_jZ4bCZr1LbY06HA76lg0`
![Recuperación de Contraseña](/src/assets/GymApp/AuthRecoverPassword.png)

#### Token de Usuario
Se utiliza un JSON Web Token (JWT) que contiene la información básica del usuario y el tipo de suscripción que tiene.
![Token de Usuario](/src/assets/GymApp/Qr-code.png)


### Backend

El backend está desarrollado con NestJS, un framework robusto para aplicaciones Node.js, y se encarga de gestionar la lógica de negocio y la interacción con la base de datos.

#### Funcionalidades del Backend:

- **Crear suscripciones**: Maneja la lógica para la creación y renovación de suscripciones de gimnasio.
- **Crear usuarios**: Gestiona el registro de nuevos usuarios, asegurando la validación y almacenamiento seguro de datos.
- **Autenticar usuarios**: Implementa mecanismos de autenticación utilizando JWT para asegurar sesiones seguras.
- **Aceptar pagos con Stripe**: Integra la pasarela de pagos Stripe para gestionar transacciones de forma segura. Más información sobre Stripe [aquí](https://docs.stripe.com/api).
- **Asignar roles a usuarios**: Define y asigna roles específicos a los usuarios, como administrador, entrenador y cliente.
- **Gestionar permisos para los roles**: Utiliza CASL (CaslAbility) para controlar los permisos y accesos a los recursos según los roles asignados. Puedes encontrar más información sobre CASL en [su documentación oficial](https://casl.js.org/v5/en/).

#### Tecnologías y Herramientas:

- **NestJS**: Framework para construir aplicaciones escalables de Node.js.
- **Mysql**: Base de datos SQL utilizada para almacenar la información de los usuarios, suscripciones, roles, permisos.
- **JWT**: Utilizado para la autenticación de usuarios y la gestión de sesiones.
- **CASL**: Biblioteca para la gestión de permisos y roles.
- **Stripe**: Pasarela de pago para gestionar transacciones financieras.


## 🛡️ Seguridad

- **Contraseñas seguras**: Las contraseñas se almacenan de manera segura utilizando bcrypt.
- **Protección de datos**: Uso de JWT para autenticación y sesiones seguras.
- **Pagos seguros**: Integración con Stripe para manejar pagos de manera segura y eficiente.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

Si tienes preguntas o necesitas más información, puedes contactarnos en [ajosephsanzj@gmail.com].
