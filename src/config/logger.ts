import { createLogger, format, transports } from 'winston';
import path from 'path';

const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
);

const logger = createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), logFormat),
        }),
        new transports.File({
            filename: path.resolve(__dirname, '../../logs/error.log'),
            level: 'error',
        }),
        new transports.File({
            filename: path.resolve(__dirname, '../../logs/combined.log'),
        }),
    ],
});

export default logger;
