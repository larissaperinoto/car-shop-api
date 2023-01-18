import express from 'express';
import ErrorHandler from './middlewares/ErrorMiddleware';
import carRoutes from './routes/CarRoutes';
import motorcycleRoutes from './routes/MotorcycleRoutes';

const app = express();

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

app.use(ErrorHandler.handle);

export default app;
