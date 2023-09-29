# Task-Manager-Api

Task-Manager-Api is a web backend powered by Node.js, Express, and Mongoose. This backend is responsible for handling user-related operations, task management, and various endpoints.

### Key Technologies Used

- **Node.js and Express:** The backend is built using Node.js, with Express providing a powerful and flexible framework for creating web applications and APIs.

- **Mongoose:** Mongoose is used to interact with a MongoDB database, enabling efficient storage and retrieval of user and task data. The use of references allows for seamless linking between users and their tasks.

- **Postmark:** Postmark is utilized for sending welcome and cancellation emails to users, enhancing user experience and communication.

- **JSON Web Tokens (JWT):** JWT is implemented for authentication purposes, allowing users to securely access their accounts and perform actions while ensuring data privacy and security.

- **Multer:** Multer is employed to handle profile picture uploads, enabling users to personalize their profiles with avatars.

### Available Endpoints

The backend offers a range of endpoints to handle user management and task operations. Some of the key endpoints include:

- **Signup:** Users can create new accounts by providing essential information.

- **Login:** Registered users can log in securely using their credentials.

- **Logout:** Users can log out of their accounts, terminating their session.

- **Avatar Operations:** Users can upload, update, or delete their profile avatars.

- **Task Operations:** Users can perform CRUD (Create, Read, Update, Delete) operations on tasks, managing their to-do lists effectively.

- **User Information:** Access user profiles, retrieve user details, and more.

### Postman Integration

The backend has been thoroughly tested and is compatible with Postman, a popular tool for testing and documenting APIs. You can easily interact with the backend's endpoints and verify their functionality using Postman.


