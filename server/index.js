import express from 'express';
import DBConnection from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import { PORT } from './config/consts.js';

DBConnection();

const app = express();

app.get('/', (req, res) => res.send('ONLINE-STORE API!'));

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));