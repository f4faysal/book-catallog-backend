import { Server } from 'http';
import app from './app';
import config from './config';
import { errorlogger, logger } from './shared/logger';


async function bootstrap() {

  const server: Server = app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
    // console.log(`BOOK-C Server running on port ${config.port}`);
  });

  const exitHandler = () => {

    if (server) {
      server.close(() => {
        logger.info('Server closed');
        // console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    errorlogger.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    // console.log('SIGTERM received');
    logger.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();