# Performance Guidelines

## Performance Optimization
- Use immutable data structures in Pinia stores for predictable state management.
- Optimize WebSocket messages by minimizing payload size and using efficient serialization (e.g., JSON).
- Use efficient SQLite queries; avoid unnecessary database calls with caching where appropriate.
- Leverage Vue.js reactivity system for efficient rendering; avoid unnecessary re-renders with reactive or ref.
- Optimize Express.js middleware to reduce overhead (e.g., avoid redundant JWT verification).
- Use Vercel’s serverless functions efficiently for Express.js deployment; minimize cold start times.
- Use efficient algorithms for game logic (e.g., Tic-Tac-Toe win condition checks).
- Batch WebSocket updates to reduce network overhead in real-time gameplay.
