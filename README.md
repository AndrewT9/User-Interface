# User-Interface-app

A minimal Express 5 application demonstrating:

-   MongoDB integration via Mongoose
-   Session management with `express-session` and `connect-mongo`
-   User authentication using Passport.js (local strategy)
-   Environment-based configuration with `dotenv`
-   Basic request validation with `express-validator`

# 🔒 Environment Variables

PORT=3000
MONGODB_URI=your_mongo_connection_string
SESSION_SECRET=some_secure_secret

# 🛠️ Tech Stack

Express 5

Mongoose for MongoDB ODM
Passport.js (Local strategy)
express-session + connect-mongo for session persistence
dotenv for config
express-validator for request validation
nodemon for development hot reload

# 🚀 Getting Started

bash```
git clone https://github.com/AndrewT9/User-Interface.git

bash```
npm install

bash```
cp .env.example .env

bash```
npm run start:dev

Listens on http://localhost:${PORT} by default.

# 🔒 Environment Variables

Make sure to include a .env file (never commit it!) containing:

bash```
PORT=3000
MONGODB_URI=your_mongo_connection_string
SESSION_SECRET=some_secure_secret

```

```
