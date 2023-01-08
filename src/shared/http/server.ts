import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (Error: Error, Request: Request, Response: Response, next: NextFunction) => {
    if (Error instanceof AppError) {
      return response.status(Error.statusCode).json({
        status: 'error',
        message: Error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('server started on port 3333 ✌️');
});
