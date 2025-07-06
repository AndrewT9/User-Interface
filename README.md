# NodeJs Blog & Admin Panel

A simple content‐driven blog platform built with Node.js, Express and MongoDB, featuring:
-   Mongoose for MongoDB ODM <br/>
-   Passport.js (Local strategy) <br/>
-   express-session + connect-mongo for session persistence <br/>
-   dotenv for config <br/>
-   express-validator for request validation <br/>
-   nodemon for development hot reload <br/>

🔐 Admin Panel
- Visit http://localhost:3000/admin/login
- Log in with the credentials from your .env
- Manage posts: create new articles, edit existing ones, or delete outdated content

# 🚀 Getting Started

```bash
git clone https://github.com/AndrewT9/User-Interface.git
```

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
npm run start:dev
```

Listens on http://localhost:${PORT} by default.

# 🔒 Environment Variables

Make sure to include a .env file (never commit it!) containing:

```bash
PORT=3000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=some_secure_secret
```
