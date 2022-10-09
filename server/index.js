import express from 'express';
import cors from 'cors';
import DBConnection from './config/database.js';
import path from 'path';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import { urlNotFound, errorHandler } from './middlewares/errorMiddleware.js';
import { PORT, NODE_ENV } from './config/consts.js';

DBConnection();

const app = express();

app.use(cors());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

const __dirname = path.resolve();

if (NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('ONLINE-STORE API!'));
}

app.use(urlNotFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
