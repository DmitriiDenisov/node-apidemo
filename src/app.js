import express from 'express';
import * as bodyParser from 'body-parser';

import apiErrorHandler from './middleware/errorHandler';
import config from './config';
import {
  sectorRoutes,
  apiDocsRoutes
} from './routes';

import { logger } from './utils/logger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((expressRequest, expressResponse, next) => {
  expressResponse.header('Access-Control-Allow-Origin', '*');

  expressResponse.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  return next();
});

const prefix = '/data-api';

app.use(`${prefix}/sectors`, sectorRoutes);
app.use(`${prefix}/api-docs`, apiDocsRoutes);

app.use(apiErrorHandler);

const server = app.listen(config.server.port, () => {
  logger.info(`Express server listening on port: ${config.server.port}`);
});

export default server;
