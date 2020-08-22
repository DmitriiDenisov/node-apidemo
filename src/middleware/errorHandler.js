import { logger } from '../utils/logger';

const apiErrorHandler = (error, req, res, next) => {
  logger.error(`ERROR HANDLER: ${error.message || error.toString()}`);
  res.status(res.statusCode || 500);
  res.send({
    error: error.message || error.toString()
  });

  return next;
};

export default apiErrorHandler;
