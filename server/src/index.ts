import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import authRouter from './routes/auth';
import { handleConnection } from './websockets/game';

const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Tic-Tac-Toe Server is running!');
});

wss.on('connection', (ws) => {
  handleConnection(ws, wss);
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
