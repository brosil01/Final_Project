# Password Manager 
The Password manager will build on the provided user management and authentication project provided. The core fucntionality includes allowing users to add remove and change passwords and store those passwords which are stored in MongoDB Atlas.

## Roadmap
* password sharing
* adding friends
* groups for shared passwords
* password complexity suggestions
* password generator
* password change history

## Project Presentation
### Video
https://drive.google.com/file/d/1TtzCwPmqjHzJl9bwP_TIpET7K7_S4jr6/view?usp=drive_link

### Render
https://csc317-group-i.onrender.com/

## Project Breakdown

### Initial Implementation

#### Models
* Update User
* Password

#### Views
* Change provided views to match new site
* All passwords view

#### Partials
* Individual passwords view

#### Controllers
* Password controller

#### Middleware
* Update Error Handling

#### Routes
* Add password routes

## Project Structure(future)

```
.
├── app.js                     # Application entry point
├── controllers/               # Route controllers
│   ├── authController.js      # Authentication logic
│   ├── userController.js      # User-related logic
|   └── passwordController.js  # Password-related logic
├── middlewares/               # Custom middleware
│   ├── auth.js                # Authentication middleware
│   ├── error-handler.js       # Error handling middleware
│   └── locals.js              # Template locals middleware
├── models/                    # Database models
│   ├── User.js                # User model with password hashing
|   └── Password.js            # Password model with encryption
├── public/                    # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── routes/                    # Express routes
│   ├── auth.js                # Authentication routes
│   ├── index.js               # Public routes
│   ├── user.js                # Protected user routes
|   └── password.js
└── views/                     # EJS templates
    ├── partials/              # Reusable template parts (header, footer, etc.)
    ├── auth/                  # Authentication templates
    ├── user/                  # User-related templates
    └── password/              # Password-related templates
```


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-authentication-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   cp .env.example .env
   ```

4. Modify the `.env` file with your configuration:
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/auth_template
   SESSION_SECRET=your_secure_secret_key
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000`