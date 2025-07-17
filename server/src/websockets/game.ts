import { WebSocketServer, WebSocket } from 'ws';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-super-secret-key';

interface GameState {
  [gameId: string]: {
    players: WebSocket[];
    board: (string | null)[];
    currentPlayer: WebSocket;
  };
}

const games: GameState = {};

export function handleConnection(ws: WebSocket, wss: WebSocketServer) {
  console.log('Client connected to WebSocket');

  ws.on('message', (message: string) => {
    try {
      const data = JSON.parse(message);
      // Further message handling will be implemented here
      console.log('Received:', data);
    } catch (error) {
      console.error('Failed to parse message:', message);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected from WebSocket');
    // Handle player disconnection, e.g., end game
  });
}
