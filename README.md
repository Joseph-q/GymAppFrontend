# Gym Application

Welcome to the Gym Application! This comprehensive platform is designed for efficient user management in a gym, facilitating registration, authentication, and subscription management.

## Features

- **User Authentication**: Secure login and registration process for new users.
- **Subscriptions**: Purchase and management of gym subscriptions.
- **Reminders and Notifications**: Receive reminders about sessions, authentication, and important notifications.

---

## ⚙️ How does it work behind the scenes?

The application is structured into two main parts: the frontend and the backend, which interact seamlessly to provide an optimal user experience.

### Frontend

The frontend is developed with modern technologies that ensure an intuitive and responsive user interface. It communicates with the backend through a REST API, sending and receiving data in JSON format.

#### Main Page
![Main Page](/src/assets/GymApp/PrincipalPage.png)

#### Login
When the user logs in and the credentials are correct, a session token is sent with a specific version. If the password is incorrect, a 401 status code is returned indicating "Email or password incorrect".
![Login](/src/assets/GymApp/AuthLogin.png)

#### Registration
Upon registration, a request is sent to the backend to create a new user. If the email is already registered, a 400 status code is returned with the message "Email already registered".
![Registration](/src/assets/GymApp/AuthRegister.png)

#### Forgot Password
If the user forgets their password, an email is sent with a magic token to recover it.
![Forgot Password](/src/assets/GymApp/AuthForgotPassword.png)

#### Password Recovery
Password recovery is done through a unique link. The first parameter of the link is the user ID and the second is the magic token, which is only valid for 10 minutes. Example link:
`http://localhost:4200/auth/recover-password/2a845411-75c9-4887-a95e-ac3bd0307553/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjJhODQ1NDExLTc1YzktNDg4Ny1hOTVlLWFjM2JkMDMwNzU1MyIsImVtYWlsIjoiYWpvc2VwaHNhbnpqQGdtYWlsLmNvbSIsImlhdCI6MTcxODQ5OTQ0NSwiZXhwIjoxNzE4NTAwMDQ1fQ.Z8ay0kL6RhoQqjUGwt-3Mr_jZ4bCZr1LbY06HA76lg0`
![Password Recovery](/src/assets/GymApp/AuthRecoverPassword.png)

#### User Token
A JSON Web Token (JWT) is used, containing basic user information and their subscription type.
![User Token](/src/assets/GymApp/Qr-code.png)


### Backend

The backend is developed with NestJS, a robust framework for Node.js applications, and is responsible for handling business logic and database interactions.

#### Backend Features:

- **Create Subscriptions**: Handles the logic for creating and renewing gym subscriptions.
- **Create Users**: Manages the registration of new users, ensuring data validation and secure storage.
- **Authenticate Users**: Implements authentication mechanisms using JWT for secure sessions.
- **Accept Payments with Stripe**: Integrates the Stripe payment gateway to manage transactions securely. More information about Stripe [here](https://docs.stripe.com/api).
- **Assign Roles to Users**: Defines and assigns specific roles to users, such as administrator, trainer, and client.
- **Manage Role Permissions**: Uses CASL (CaslAbility) to control permissions and access to resources according to assigned roles. You can find more information about CASL in [their official documentation](https://casl.js.org/v5/en/).

#### Technologies and Tools:

- **NestJS**: Framework for building scalable Node.js applications.
- **MySQL**: SQL database used to store user information, subscriptions, roles, permissions.
- **JWT**: Used for user authentication and session management.
- **CASL**: Library for managing permissions and roles.
- **Stripe**: Payment gateway to handle financial transactions.


## 🛡️ Security

- **Secure Passwords**: Passwords are stored securely using bcrypt.
- **Data Protection**: Use of JWT for authentication and secure sessions.
- **Secure Payments**: Integration with Stripe to handle payments securely and efficiently.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📧 Contact

If you have questions or need more information, you can contact us at [ajosephsanzj@gmail.com].
