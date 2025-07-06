# NodeJs Blog & Admin Panel

A simple content‐driven blog platform built with Node.js, Express and MongoDB, featuring:

  - Responsive homepage showcasing a hero banner and a list of latest posts  
  - “Home” and “About” pages  
  - Per-post pages with title, content and publication date  
  - Site-wide header with search functionality  
  - Footer with copyright and tech stack credit  

- **Admin Panel**  
  - Secure login for administrators  
  - Create, edit and delete posts via a WYSIWYG editor  
  - Form validation (title, content, date)  
  - Live preview of new or updated posts 

# 🔒 Environment Variables

PORT=3000 <br/>
MONGODB_URI=your_mongo_connection_string <br/>
JWT_SECRET=some_secure_secret <br/>

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
