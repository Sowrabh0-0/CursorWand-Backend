import express from 'express';
import cors from 'cors';
import config from './config/env';
import { db } from './config/firebase';
import logger from './config/logger';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/ErrorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    logger.info('Home route accessed');
    res.send('CursorWand Backend API');
});

app.use(errorHandler)

const PORT = config.port;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});