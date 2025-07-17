# Refactoring and DRY Principles for Tic-Tac-Toe Login Website

## 1. The DRY Principle: Don't Repeat Yourself

The core idea of the DRY principle is to reduce the repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy. Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

## 2. Identifying Repetition (WET Code)

Before you can refactor, you need to identify areas of repetition ("Write Everything Twice" or WET). Look for:

- **Code Duplication**: Prefer iteration and modularization over code duplication.

- **Duplicate Code Blocks**: Identical or nearly identical blocks of code in multiple places.
- **Magic Strings/Numbers**: The same string literal or number used in multiple locations (e.g., `'X'`, `'O'`, `3` for board size).
- **Similar Logic**: Functions or methods that perform similar operations but with slight variations.
- **Boilerplate**: Repetitive setup or teardown code in tests or API handlers.

## 3. Refactoring Strategies to Stay DRY

### a. Abstraction with Functions and Classes

- **Helper Functions**: If you find yourself writing the same few lines of code in multiple places, extract them into a helper function.
  - **Example**: A function `is_valid_move(board, row, col)` that checks if a cell is within bounds and not already occupied.

- **Service Classes**: Group related logic into service classes.
  - `AuthService`: Could handle user registration, login, password hashing, and token generation.
  - `GameService`: Could manage game creation, state updates, move validation, and win/draw detection.

### b. Use Constants and Configuration

- **Constants**: Replace magic strings and numbers with named constants. This makes the code more readable and easier to update.
  - **Example**: `PLAYER_X = 'X'`, `PLAYER_O = 'O'`, `BOARD_SIZE = 3`.

- **Configuration Files**: Store environment-specific values (like database connection strings or API endpoints) in configuration files, not hardcoded in the application logic.

### c. Component-Based UI

- If using a frontend framework (like React, Vue, or Svelte), break the UI down into reusable components.
  - **Example**: A `<GameBoard />` component could render the Tic-Tac-Toe grid, and a `<Cell />` component could represent a single square on the board.

### d. Middleware for API Logic

- For backend APIs, use middleware to handle common tasks like:
  - **Authentication**: A middleware function can verify a user's token before allowing access to protected routes.
  - **Logging**: A middleware can log every incoming request.
  - **Error Handling**: A centralized error-handling middleware can catch exceptions and format a consistent error response.

## 4. When to Be Cautious (AHA Principle)

Avoid Hasty Abstractions (AHA). Sometimes, a little duplication is better than the wrong abstraction. If two pieces of code look similar now but are likely to evolve in different directions, it might be better to keep them separate for the time being.

Wait for the pattern to stabilize before creating an abstraction. A good rule of thumb is to wait until you see the same pattern three times ("Rule of Three").

## Example: Refactoring Game Logic

**Before (WET):**

```javascript
function checkWin(board) {
  // Check rows
  if (board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2]) return board[0][0];
  if (board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2]) return board[1][0];
  // ... and so on for all 8 winning combinations
}
```

**After (DRY):**

```javascript
const WINNING_COMBINATIONS = [
  [[0, 0], [0, 1], [0, 2]], // Rows
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]], // Columns
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]], // Diagonals
  [[0, 2], [1, 1], [2, 0]]
];

function checkWin(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      return board[a[0]][a[1]];
    }
  }
  return null;
}
