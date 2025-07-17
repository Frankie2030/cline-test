# Backend-Specific Guidelines

- Structure Express.js apps with separate routers for different resources (e.g., /auth, /game).
- Use jsonwebtoken for secure JWT-based authentication; validate tokens in middleware.
- Use bcrypt for secure password hashing; follow best practices for salt rounds.
- Use ws WebSocket library for real-time communication; define clear message protocols with TypeScript interfaces.
- Use sqlite3 for lightweight SQLite database interactions; prefer parameterized queries for security.
- Organize database schemas and migrations in dedicated files (e.g., db/migrations/).
