# Active Context: Online Tic-Tac-Toe Game

## 1. Current Work Focus

The immediate priority is to establish the foundational structure of the project. This involves creating the directory layout for both the frontend and backend, and initializing the necessary configuration files for each part of the application.

## 2. Next Steps

1.  **Create Project Scaffolding:**
    *   Set up a root directory for the project.
    *   Create separate `client` and `server` directories to house the frontend and backend code, respectively.

2.  **Initialize Frontend:**
    *   Use Vite to scaffold a new Vue.js project within the `client` directory.
    *   Install initial dependencies like Pinia.

3.  **Initialize Backend:**
    *   Initialize a new Node.js project (`npm init`) in the `server` directory.
    *   Install core dependencies: `express`, `ws`, `jsonwebtoken`, `bcrypt`, and `sqlite3`.

4.  **Establish Basic Server:**
    *   Create a basic Express server that listens on a port and serves a placeholder message.

## 3. Active Decisions & Considerations

-   **Monorepo vs. Polyrepo:** We will proceed with a simple monorepo-like structure (client and server folders in one repository) for ease of management, but they will be treated as separate applications.
-   **Initial Database Schema:** The initial focus is on project setup. The database schema for the `users` table will be designed once the backend server is initialized.
