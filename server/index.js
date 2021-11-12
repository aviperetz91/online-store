import express from 'express';
import DBConnection from './config/database.js';
import { PORT } from './config/consts.js';

DBConnection();

const app = express();

app.listen(PORT, console.log(`Server running on port ${PORT}`));
