/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import proxy from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';
import cookieparser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json({  limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieparser());
app.set('trust proxy', 1);

 
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to apps.api-gateway!' });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
