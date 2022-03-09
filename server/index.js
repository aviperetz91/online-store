import express from 'express';
import cors from 'cors';
import DBConnection from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import { urlNotFound, errorHandler } from './middlewares/errorMiddleware.js';
import { PORT } from './config/consts.js';

DBConnection();

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('ONLINE-STORE API!'));

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use(urlNotFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
