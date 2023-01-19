import swaggerUi from 'swagger-ui-express';
import express from 'express';
import ErrorHandler from './middlewares/ErrorMiddleware';
import carRoutes from './routes/CarRoutes';
import motorcycleRoutes from './routes/MotorcycleRoutes';
import swaggerJson from '../swagger.json';

const app = express();

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(ErrorHandler.handle);

export default app;
