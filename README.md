# Event Registration System

A server-rendered event registration web application built with **Node.js, Express, MongoDB, Mongoose, and EJS**. The project lets visitors browse events and provides registration-history and organizer-facing event management pages.

> Built as a learning project for practicing full-stack development, MVC-style separation, authentication, database modeling, and server-rendered interfaces.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Application Routes](#application-routes)
- [How It Works](#how-it-works)
- [Security Notes](#security-notes)
- [Future Improvements](#future-improvements)
- [Author](#author)

## Overview

The Event Registration System is designed to organize event information and participant registrations in one place. Event data is stored in MongoDB, Express handles HTTP requests and routing, controller modules implement application logic, and EJS templates render the user interface on the server.

The codebase follows a **separation-of-concerns approach** with routes, controllers, models, middleware, configuration, public assets, and views in separate folders.

## Features

- **Event feed:** View events ordered by creation date.
- **Event details:** Open an individual event's detail page.
- **Event creation:** Organizers can submit event information such as title, description, date, location, and capacity.
- **Participant registration:** Store participant details and associate a registration with an event and user.
- **Registration history:** View a user's registrations.
- **Cancellation flow:** Remove a registration and restore the event's available capacity.
- **Organizer dashboard:** Provide organizer-facing pages, including a registration list.
- **Authentication foundation:** Passport Local, sessions, and authentication middleware are included.
- **Server-rendered interface:** EJS templates render pages, with CSS and JavaScript assets served from `public/`.

> The exact authorization and validation rules should be reviewed before using the application in production.

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Web server and routing |
| MongoDB | Database |
| Mongoose | MongoDB schemas and data access |
| EJS | Server-side HTML templating |
| Passport.js + Passport Local | Authentication strategy |
| express-session | Session management |
| connect-mongo | MongoDB-backed session storage |
| bcrypt | Password hashing dependency |
| dotenv | Environment configuration |
| Multer / Cloudinary | File and media handling dependencies available in the project |
| CSS + browser JavaScript | Interface styling and client-side interactions |

## Project Structure

```text
CodeAlpha_EventRegistration/
├── config/
│   ├── DB_Connection.js
│   ├── passportConfig.js
│   └── .env                 # Local environment configuration; do not commit secrets
├── controller/
│   ├── eventController.js
│   ├── organizerController.js
│   └── userController.js
├── middleware/
│   └── ensureAuth.js
├── model/
│   ├── eventSchema.js
│   ├── organizerSchema.js
│   └── userModel.js
├── public/
│   ├── auth.css
│   ├── password-visibility.js
│   └── style.css
├── route/
│   ├── organizerRoute.js
│   ├── registrationRoute.js
│   └── userRoutes.js
├── views/
│   ├── detail.ejs
│   ├── feedPage.ejs
│   ├── login.ejs
│   ├── myEvent.ejs
│   ├── organizerDashboard.ejs
│   ├── register.ejs
│   └── registrationList.ejs
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/) (use a current LTS release)
- npm (included with Node.js)
- A MongoDB instance, either local or hosted with MongoDB Atlas

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd CodeAlpha_EventRegistration
```

Replace `<your-repository-url>` with the HTTPS or SSH URL of your GitHub repository.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a local environment file at `config/.env` based on the variables your configuration expects. At minimum, the current server setup uses `DB_String` for the MongoDB connection and `PORT` for the server port.

Example template:

```env
PORT=3000
DB_String=mongodb://127.0.0.1:27017/event_registration
SESSION_SECRET=replace_with_a_long_random_secret
```

For MongoDB Atlas, use your Atlas connection string for `DB_String`. Adjust the database name and connection options as needed.

**Important:** The current `server.js` uses a hard-coded session secret. Before deployment, update the code to read `SESSION_SECRET` from the environment and never commit real credentials, connection strings, or production secrets.

### 4. Start the application

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

The port depends on the value configured in `PORT`. If startup fails, confirm that MongoDB is running, `config/.env` exists, and the connection string is valid.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port on which the Express server listens |
| `DB_String` | MongoDB connection string |
| `SESSION_SECRET` | Recommended secret for signing session cookies; update the application to use it |

Do not publish real environment values. Keep local environment files out of version control and use your hosting provider's secret/environment-variable settings for deployment.

## Application Routes

The following routes are registered in the current application. Some actions may require authentication, and the route-level protection should be checked before production use.

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/` | Display the event feed |
| `GET` | `/events/history` | Display the signed-in user's event registrations |
| `GET` | `/detail/:id` | Display event details |
| `POST` | `/detail/register` | Submit an event registration |
| `DELETE` | `/register/cancel/:id` | Cancel a registration |
| `/admin` | Organizer routes | Organizer dashboard and event-related management |
| `/register` | User routes | Registration and login-related routes |

For exact behavior, refer to the route files in `route/` and their corresponding controllers in `controller/`.

## How It Works

1. A browser requests a page or submits a form.
2. Express routes the request to the appropriate controller.
3. Controllers use Mongoose models to read or update MongoDB records.
4. EJS templates render the response using data supplied by the controller.
5. Session and Passport middleware provide the foundation for user authentication.
6. Registration and cancellation logic updates registration records and event capacity.

## Security Notes

This repository is a development/learning project and should be reviewed before public deployment.

- Move the session secret from source code into an environment variable.
- Ensure `config/.env` and all files containing credentials are excluded from Git.
- Protect event creation, registration, cancellation, and organizer pages with appropriate authentication and authorization.
- Validate and sanitize incoming form data on the server.
- Prevent registrations when event capacity is zero or negative; validate capacity changes safely.
- Check that a user can cancel only their own registration, unless an authorized organizer is performing the action.
- Use secure cookie settings and HTTPS in production.
- Add centralized error handling and automated tests.

## Future Improvements

- Add server-side validation and clear success/error messages.
- Add role-based authorization for organizers and participants.
- Prevent duplicate registrations and enforce event capacity reliably.
- Add search, filtering, and pagination for events.
- Add automated tests for routes, authentication, and registration workflows.
- Improve accessibility, responsive behavior, and form feedback.
- Add deployment instructions and screenshots/demo links when available.

## Author

**Bereket Woldemariyam**

Back-end & Full-Stack Software Engineering learner interested in building maintainable web applications with clear architecture, practical backend logic, and user-focused interfaces.

---

If you find this project useful, feel free to explore the code, open an issue, or suggest an improvement.
